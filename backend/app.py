from flask import Flask, jsonify
import psycopg2
from psycopg2.extras import RealDictCursor
from _env import DB_URI

app = Flask(__name__)

def connect_db():
    return psycopg2.connect(DB_URI)

def db_query(query: str, data: tuple):
    connection = connect_db()
    cursor = connection.cursor(cursor_factory=RealDictCursor)

    cursor.execute(query, data)
    cards = cursor.fetchall()

    cursor.close()
    connection.close()

    return jsonify(cards)

@app.route("/")
def confirm_running():
    return "Application running."

@app.route("/withtag/<tag_name>")
def with_tag(tag_name: str):

    query = """
SELECT front, back
FROM cards c JOIN card_tags ct
ON c.card_id = ct.card_id
WHERE tag_id = (
	SELECT tag_id
	FROM tags 
	WHERE tag_name = %s
);
"""

    # That random comma turns the () into a tuple, needed by the psycopg2 to parse arguments.
    return db_query(query, (tag_name,)) # I know it looks stupid.
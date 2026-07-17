# backend

Accepts HTTP Requests and queries the remote database based on them, to produce flashcard sets.

All of the code is in `app.py`, which also contains helper functions for querying the remote db.

The remote db uri is stored in a python file `_env.py`, in a variable named `DB_URI`.

## stack
 - Python
 - Flask
 - psycopg2 (for querying remote sql databases.)


## API overview

All requests return a json list, containing a json objects that represent cards:
```json
{
    "front": "front text",
    "back": "back text"
}
```

If parameters need spaces in them, use `%20` in place of the space.

### `/withtag/tag`
Returns all of the cards that have a given tag.
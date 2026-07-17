CREATE TABLE cards (
    card_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    front TEXT NOT NULL,
    back TEXT NOT NULL
);

CREATE TABLE tags (
    tag_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tag_name TEXT NOT NULL UNIQUE
);

-- Each row represents the application of a tag to a card
CREATE TABLE card_tags (
    card_id INT,
    tag_id INT,
    PRIMARY KEY (card_id, tag_id),
    FOREIGN KEY (card_id) REFERENCES cards(card_id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id) ON DELETE CASCADE,
);
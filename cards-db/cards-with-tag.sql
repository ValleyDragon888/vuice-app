SELECT front, back
FROM cards c JOIN card_tags ct
ON c.card_id = ct.card_id
WHERE tag_id = (
	SELECT tag_id
	FROM tags 
	WHERE tag_name = "test tag 1"
);
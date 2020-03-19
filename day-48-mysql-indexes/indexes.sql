SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

EXPLAIN
SELECT *
FROM `paragraphs`
WHERE `id` = 1337;

SELECT *
FROM `words`
WHERE `word` = 'kissed';

EXPLAIN
SELECT *
FROM `words`
WHERE `word` = 'kissed';

INSERT INTO `words`
(`word`, `count`)
VALUES
('February', 0);


INSERT INTO `words`
(`word`, `count`)
VALUES
('Únor', 0);

SELECT *
FROM `paragraphs`
WHERE `text` LIKE '%Edmond Dantès%';
-- 0.1366s , 41 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('Edmond Dantès')
-- 0.1448s, 788 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('"Edmond Dantès"')
-- 0.0043s , 41 results


SELECT *,
    MATCH (`text`) AGAINST ('Edmond Dantès')
FROM `paragraphs`
WHERE MATCH (`text`) AGAINST ('+Edmond +Dantès' IN BOOLEAN MODE)
-- 0.0044s, 90 results
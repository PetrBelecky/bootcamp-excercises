-- select all columns from country table
SELECT *
FROM `country`;

-- all columns from country table, where population is greater than 20 mil
SELECT * 
FROM `country` 
WHERE `population` > 20000000;

-- all columns from country table, where population is greater than 20 mil
-- and order them by population in ascending order
SELECT * 
FROM `country` 
WHERE `population` > 20000000
ORDER BY `population` ASC;  

-- all columns from country table, where population is greater than 20 mil
-- and order them by population in descending order
SELECT * 
FROM `country` 
WHERE `population` > 20000000
ORDER BY `population` DESC;  

-- all columns from country table, where population is greater than 20 mil
-- and order them by population in ascending order
-- and limit results only to first 10
SELECT * 
FROM `country` 
WHERE `population` > 20000000
ORDER BY `population` DESC
LIMIT 10;


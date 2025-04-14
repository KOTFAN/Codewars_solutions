--Best-Selling Books (SQL for Beginners #5)
SELECT * FROM books
ORDER BY copies_sold DESC
LIMIT 5
--SQL: Concatenating Columns
SELECT CONCAT_WS(' ',prefix,first,last,suffix) AS title FROM names
--Countries Capitals for Trivia Night (SQL for Beginners #6)
SELECT capital FROM countries 
WHERE (continent = 'Africa' OR continent = 'Afrika') AND country LIKE 'E%' 
ORDER BY capital ASC
LIMIT 3
--SQL Basics: Raise to the Power
SELECT POWER(number1,number2) AS result FROM decimals
--SQL Basics - Position
SELECT id,name,POSITION(',' IN characteristics) AS comma FROM monsters
ORDER BY comma ASC
--SQL Basics: Repeat and Reverse
SELECT CONCAT(name,name,name) AS name,REVERSE(characteristics) AS characteristics FROM monsters
--BASICS: Length based SELECT with LIKE
SELECT first_name, last_name FROM names 
WHERE first_name LIKE '______%';
--SQL with Harry Potter: Sorting Hat Comparators
SELECT * FROM students
WHERE ((quality1='evil' AND quality2='cunning')) 
OR (quality1='brave' AND quality2<>'evil') 
OR (quality1='studious' OR quality2='intelligent')
OR (quality1='hufflepuff' OR quality2='hufflepuff')
--Easy SQL: Bit Length
SELECT id, LENGTH(name) * 8 as name, birthday, LENGTH(race) * 8 as race FROM demographics;
--SQL Basics: Maths with String Manipulations
SELECT BIT_LENGTH(name)+LENGTH(race) AS calculation FROM demographics
--Easy SQL: ASCII Converter
SELECT id,ASCII(name) as name,birthday,ASCII(race)as race FROM demographics
--Easy SQL: Moving Values
SELECT 
  LENGTH(name) AS id,
  LENGTH(CAST(legs AS TEXT)) AS name,
  LENGTH(CAST(arms AS TEXT)) AS legs,
  LENGTH(characteristics) AS arms,
  LENGTH(CAST(id AS TEXT)) AS characteristics
FROM monsters;

--SQL Basics: Simple JOIN
SELECT 

products.id, 
products.name, 
products.isbn, 
products.company_id, 
products.price,
companies.name AS company_name

FROM products

JOIN companies

ON products.company_id = companies.id;
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
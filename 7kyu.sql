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

SELECT id,LENGTH(name)*8 as name,birthday,LENGTH(race) *8 as race FROM demographics

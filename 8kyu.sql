--Multiply
SELECT price * amount AS total FROM items
--Easy SQL: Square Root and Log
SELECT SQRT(number1) AS root, LOG10(number2) AS log FROM decimals 
--Easy SQL: Rounding Decimals
SELECT FLOOR(number1)as number1,CEIL(number2)as number2 FROM decimals
--Easy SQL: Convert to Hexadecimal
SELECT to_hex(legs) as legs, to_hex(arms) as arms FROM monsters
--1. Find all active students
SELECT * FROM students WHERE IsActive
--SQL Basics: Simple WHERE and ORDER BY
SELECT * FROM people WHERE age>50 ORDER BY age DESC
--Adults only (SQL for Beginners #1)
SELECT * FROM users WHERE age>17
--Easy SQL - Ordering
SELECT * FROM companies ORDER BY employees DESC
--Easy SQL: LowerCase
SELECT id,name,birthday,LOWER(race)as race FROM demographics
--Collect Tuition (SQL for Beginners #4)
SELECT * FROM students WHERE NOT tuition_received
--On the Canadian Border (SQL for Beginners #2)
SELECT * FROM travelers WHERE NOT country='USA' AND NOT country='Mexico' AND NOT country='Canada'
--SQL Basics: Simple MIN / MAX
SELECT MIN(age) AS age_min, MAX(age) AS age_max FROM people 
--SQL Basics: Simple DISTINCT
SELECT DISTINCT age FROM people
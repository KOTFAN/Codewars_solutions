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
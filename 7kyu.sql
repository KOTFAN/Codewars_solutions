--Best-Selling Books (SQL for Beginners #5)
SELECT * FROM books
ORDER BY copies_sold DESC
LIMIT 5
--SQL: Concatenating Columns
SELECT CONCAT_WS(' ',prefix,first,last,suffix) AS title FROM names
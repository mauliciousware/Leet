SELECT p.product_name,s.year,s.price
FROM Sales as s
JOIN Product as p
On s.product_id = p.product_id
```sql
SELECT * FROM table_name
SELECT field1 as fieldx,field2 FROM table_name

INSERT INTO table_name (field1, field2) VALUES (value1, value2)

UPDATE table_name SET field1=value1,field2=value2 WHERE fiieldx=valuex

DELETE FROM table_name WHERE fiieldx=valuex

SELECT * from table_name WHERE field1=value1 AND field2=value2
SELECT * from table_name WHERE field1=value1 OR field2=value2

SELECT * from table_name ORDER BY field1 ASC, field2 DESC

SELECT COUNT(*) as num FROM table_name;
```

```sql
// 创建数据库
CREATE DATABASE dbname
// 删除数据库
DROP DATABASE dbname
// 选择数据库
USE dbname
// 创建数据表
CREATE TABLE tablename (column_name column_type)
// 删除数据表
DROP TABLE tablename
```
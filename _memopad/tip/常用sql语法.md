```sql
## 创建数据库
1. CREATE DATABASE test1;

## 使用数据库  
2. USE test1;

## 查看所有数据库
3. SHOW databases;

## 显示数据库中的所有表 
4. SHOW tables;

## 删除数据库
5. DROP DATABASE test1;

## 创建表
6. CREATE TABLE emp (
        ename varchar(10),
        hiredata date,
        sal decimal(10,2),
        deptno int(2)
   );

## 查看表详情
7. SHOW CREATE TABLE emp \G;
8. DESC emp;

## 删除表
9. DROP TABLE emp;

10. ALTER

11. INSERT INTO emp(ename,hiredate,sal,deptno) values('z','2000-01-01','2000',1);
INSERT INTO emp(ename,hiredate,sal,deptno) values
('z','2000-01-01','2000',1),
('z','2000-01-01','2000',1),
...
('z','2000-01-01','2000',1);

12. UPDATE tablename SET field1=value1,field2=value2,...,fieldn=valuen [WHERE CONDITION];

13. DELETE FROM tablename [WHERE CONDITION];    
```
## 深入浅出MySQL
### p41 
having和where的区别在于，having是对聚合后的结果进行条件的过滤，而where是在聚合前就对记录进行过滤，如果逻辑允许，我们尽可能用where先过滤记录，这样因为结果集减小，将对聚合的效率大大提高，最后再根据逻辑看是否用having进行再过滤

WITH ROLLUP 是可选语法，表明是否对分类聚合后的结果进行再汇总

### p46
UNION 和 UNION ALL, UNION ALL是把结果直接合并在一起，而UNION是将UNION ALL的结果进行一次DISTINCT,去除重复记录后的结果

### p55
float double decimal
浮点数和定点数都可以在类型名称后加(M,D)来进行表示，M,D又称为精度和标度，定点数在MySQL内部以字符串形式存放，比浮点数更准确

定点数默认为(10,0)，浮点数会对不符合MD的进行四舍五入，定点数会报warn并截断

```sql
SELECT bin(id),hex(id) FROM t2;
```

### p66
CHAR 会删除尾部空格，VARCHAR不会

    
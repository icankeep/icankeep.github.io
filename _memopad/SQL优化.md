SQL优化
---
- 慢查询
  - my.ini开启慢查询，并设置输出日志，定义慢查询时间，定义输出的query
  - 通过explain分析SQL
- 索引
  - 尽量不使用以'%'开头的LIKE查询
  - 如果查询的索引是字符串类型，给它加上引号，避免隐式类型转换，造成索引失效
  - 如果查询条件中存在OR，则查询的列尽量都存在索引，否则索引失效
  - 对于复合索引，必须满足最左前缀，即左边中间一定要有，右边可以没
  - 避免在索引列上使用IS NULL和 IS NOT NULL
- 排序
  - 避免排序，如果不能避免，尽量选择索引排序
    - 1>:where和order by使用相同的索引，并且order by 的顺序和索引顺序（如果复合索引）相同
    - 2>:order by 字段都是同为升序或者降序，否则索引不生效，使用了Using fileSort
    - 3>:当filesort索引无法避免情况下，想办法加快fileSort操作，设计到两次扫描算法和一次扫描算法，看情况使用某一种。
    - 两次扫描算法：根据条件取出排序字段和行指针信息，之后再排序区排序，如果排序区不够在新建临时表。完成排序后在通过指针回表读取记录。
    - 一次扫描算法：一次性取出满足条件的行的所有字段。然后再排序区完成排序后，直接输出数据，这个排序的时候内存消耗比较大，但是相比两次效率又高。
- 查询
  - 优先使用union all ,避免使用union
    - UNION 因为会将各查询子集的记录做比较，故比起UNION ALL ，通常速度都会慢上许多。一般来说，如果使用UNION ALL能满足要求的话，务必使用UNION  ALL。还有一种情况，如果业务上能够确保不会出现重复记录
  - 避免查询不必要的字段
  - 把计算放到业务层而不是数据库层
  - 不要在查询条件where后面对字段做函数处理
  - 尽量不要使用select *  ,使用需要的具体字段查询
  - 使用not exist代替not in
    - 如果查询语句使用了not in 那么内外表都进行全表扫描，没有用到索引；而not extsts 的子查询依然能用到表上的索引
  - in 和 exist 区别选择。
    - in 是把外表和内表作hash 连接，而exists是对外表作loop循环，每次loop循环再对内表进行查询。因此，in用到的是外表的索引， exists用到的是内表的索引。
    - 如果查询的两个表大小相当，那么用in和exists差别不大，
    - 如果两个表中一个较小，一个是大表，则子查询表大的用exists，子查询表小的用in


  SQL优化：

个人理解：主要是对查询的优化。对于sql的优化主要就是下面几个方面的优化，

1.避免全表扫描

2.避免索引失效

3.避免排序，不能避免，尽量选择索引排序

4.避免查询不必要的字段

5.避免临时表的创建，删除

6....

一.插入数据
1.导入大批量数据

     这个需要先关闭索引，插入数据后再打开索引。

1.1.针对MyISAM引擎可以通过以下方式提高导入数据效率，但是Innodb并不能提高这个效率。

    命令：alter table user disable keys; //关闭所有索引

              alter table user enable keys;  // 开启索引

1.2.对于Innodb类型的表，由于Innodb的表是根据主键的顺序保存的，所以将导入的数据按照主键的顺序，可以提高效率

      1. 2.1在导入数据前关闭唯一性校验也可以提高效率 set unique_checks=0

      1.2.2 关闭自动提交，set auto-commit=0 采用手动提交也可以提高效率

2.优化insert语句

    2.1如果同时插入多行，采用多个值表更好。例如：

     inset into test values(1,2),(1,3),(2,3);

二.排序 order by
     目标：尽量减少额外的排序，通过索引直接返回有序数据。

排序情况有以下两种结果：

   1.通过有序索引顺序扫描直接返回有序数据。这里分析结果Extra：Using index ;例如：

         explain select customer_id from customer order by store_id;  //这里customer_id是主键，store_id是索引

    2. 通过返回数据进行排序，explain 返回的Extra结果是Using fileSort。这个是不好的。例如：

         explain select * from cutomer order by store_id;//store_id是一个索引

   方案：1>:where和order by使用相同的索引，并且order by 的顺序和索引顺序（如果复合索引）相同

               2>:order by 字段都是同为升序或者降序，否则索引不生效，使用了Using fileSort

              3>:当filesort索引无法避免情况下，想办法加快fileSort操作，设计到两次扫描算法和一次扫描算法，看情况使用某一种。

     两次扫描算法：根据条件取出排序字段和行指针信息，之后再排序区排序，如果排序区不够在新建临时表。完成排序后在通过指针回表读取记录。

   一次扫描算法：一次性取出满足条件的行的所有字段。然后再排序区完成排序后，直接输出数据，这个排序的时候内存消耗比较大，但是相比两次效率又高。

三.分组group by 优化
      默认情况下group by 对字段分组的时候，会排序。这和在查询order by 的情况类似。

        1. 如果在在分组的时候不需要排序，最好关掉排序命令：order by null。例如：

        explain select name sum(money) from user group by name order by null;

四. 优化嵌套查询
      .某些子查询可以通过join来代替。理由：join不需要在内存中创建一个临时表来存储数据。

        explain select * from customer where customer_id not in (select customer_id from payment) ;

       上面的语句用下面的语句代替

             explain select * from customer a left join payment b on a.customer_id=b.customer where b.customer_id is null;

  五.优化or条件
      1. 对于单独的两个索引

        explain select  * from sales where id=2 or year =1998;    //id和year都是索引

        这两个索引都是被使用到了的，但是这个查询时分别对两个条件进行查询，然后union两个结果的。

      2. 如果对复合索引(id 和year是复合索引)，那么就不能使用到了索引，采用的全文扫描。

 六.优化分页查询
      常见的分页查询，查询到“limit 2000,20”;时候就会出现先查询前面2200个，然后抛弃前面2000个，造成查询和排序代价非常大。优化方式如下：

      1.在索引上完成排序分页的操作。根据主键关联回原表查询所需要的其他内容。例如：

           explain select a.last_name , a.first_name from user a inner join (select id from user order by id limit 2000,20) b on a.id=b.id;

     2.把limit查询转换成某一个位置查询。可以通过把上一页的最后一条记录记下来。

           例子：select * from payment order by rental_id desc limit 2000,20;    //这样效率非常低下

      如上面是通过 rental_id 降序来排列的 ，那么我们在查询 limit 1800,20时候，记录下2000位置的rental_id,加入这里的rental_id的值，假设这里的值是“5000” ，那么sql语句就可以转换成如下：

                        select * from payment where rental_id < 5000 order by rental_id desc limit 10;

           注意事项： 这个只适合在排序字段不会出现重复值的特定环境，能够减轻分页翻页的压力，如果排序字段出现重复值，那么就会出现记录丢失。

  七.使用SQL提示
    常见的SQL提示如下：

  1. use index  这个表示希望sql去参考的索引，就可以让mysql不在考虑其他可用的索引了

       explain select count(*) from user user index(idx_user_id);

  2.ingore index 只是单纯的希望mysql忽略一个索引，或者多个。例如：

     explain select count(*) from rental ignore index(idx_rental_date)

3.force index 强制mysql使用一个索引

    explain select * from user  use index (idx_fk_inventory_id) where inventory_id >1;

   默认inventory_Id都是大于1的，所以一般会全表扫描，如果强制使用这个所以，那么msyql还是会使用这个索引。

八.查询的一些注意项
     1.慎用模糊查询，使用 like  两边加“%”--造成索引失效；左边没有%,这个索引不会失效

     2.尽量不要使用select *  ,使用需要的具体字段查询

     3.不要在查询条件where后面对字段做函数处理

     4.优先使用union all ,避免使用union.

         UNION 因为会将各查询子集的记录做比较，故比起UNION ALL ，通常速度都会慢上许多。一般来说，如果使用UNION ALL能满足要求的话，务必使用UNION ALL。还有一种情况，如果业务上能够确保不会出现重复记录

     5.使用not exist代替not in

         如果查询语句使用了not in 那么内外表都进行全表扫描，没有用到索引；而not extsts 的子查询依然能用到表上的索引

    6.in 和 exist 区别选择。

      in 是把外表和内表作hash 连接，而exists是对外表作loop循环，每次loop循环再对内表进行查询。因此，in用到的是外表的索引， exists用到的是内表的索引。

     如果查询的两个表大小相当，那么用in和exists差别不大，

     如果两个表中一个较小，一个是大表，则子查询表大的用exists，子查询表小的用in

   7.避免在索引列上作如下操作，当在索引列上使用如上操作时，索引将会失效，造成全表扫描

     避免在索引字段上使用<>，!=
     避免在索引列上使用IS NULL和IS NOT NULL
     避免在索引列上出现数据类型转换（比如某字段是String类型，参数传入时是int类型）

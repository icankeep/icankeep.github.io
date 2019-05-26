## MyBatis版本3.3.1
```xml
<insert id="insertList" useGeneratedKeys="true" keyProperty="id">
    insert into sys_user(
        user_name, user_password, user_email, user_info, head_img, create_time)
    values
    <foreach collection="list" item="user" separator=",">
        (#{user.userName}, #{user.userPassword}, #{user.userEmail}, #{user.userInfo}, #{user.headImg, jdbcType=BLOB},
        #{user.createTime, jdbcType=TIMESTAMP})
    </foreach>
</insert>
```

```java
/**
 * 批量插入用户
 * @param userList
 * @return
 */
int insertList(List<SysUser> userList);
```

MyBatis在3.3.1版本开始支持批量插入时回写主键. 批量插入接口入参名称必须为 “collection” “list” “array” 之一. 集合参数不能使用 `@Param` 并且 接口只能有一个参数.

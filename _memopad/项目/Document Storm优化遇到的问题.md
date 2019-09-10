## 2019.8.31
1. Maven中心库中没有对应的jar包，需要通过下面的Maven命令打到本地的Maven库后应用即可
```cmd
mvn install:install-file -Dfile=D:\aspose-words-15.8.0.jar -DgroupId=com.aspose -DartifactId=aspose-words -Dversion=15.8.0 -Dpackaging=jar
```

2. SpringBoot测试DAO接口，需要在SpringBoootTest中添加classes = DocumentStormPlatformApplication.class
```java
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DocumentStormPlatformApplication.class)
public class DocumentStormPlatformApplicationTests {
    @Autowired
    private FileInfoDao fileInfoDao;
    @Test
    public void contextLoads() {
    }
}
```

3. SpringBoot启动不成功
项目添加web依赖即可

4. SpringBoot项目结构
```
├─.idea
│  ├─dataSources
│  └─libraries
├─.mvn
│  └─wrapper
├─src
│  ├─main
│  │  ├─java
│  │  │  └─top
│  │  │      └─docstorm
│  │  │          └─documentstormcommon
│  │  │              ├─config
│  │  │              ├─constant
│  │  │              ├─domain
│  │  │              ├─exception
│  │  │              ├─mapper
│  │  │              ├─service
│  │  │              └─utils
│  │  └─resources
│  │      ├─mapper
│  │      └─top
│  │          └─docstorm
│  │              └─documentstormcommon
│  │                  └─mapper
│  └─test
│      └─java
│          └─top
│              └─docstorm
│                  └─documentstormcommon
│                      └─mapper
```


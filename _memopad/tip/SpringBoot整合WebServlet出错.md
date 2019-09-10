## 报错信息

org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'servletComponentRegisteringPostProcessor': Bean instantiation via constructor failed; nested exception is java.lang.NoClassDefFoundError: javax/servlet/annotation/WebServlet
	at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:304) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.ConstructorResolver.autowireConstructor(ConstructorResolver.java:285) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.autowireConstructor(AbstractAutowireCapableBeanFactory.java:1341) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBeanInstance(AbstractAutowireCapableBeanFactory.java:1187) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.doCreateBean(AbstractAutowireCapableBeanFactory.java:555) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractAutowireCapableBeanFactory.createBean(AbstractAutowireCapableBeanFactory.java:515) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.lambda$doGetBean$0(AbstractBeanFactory.java:320) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:222) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:318) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.AbstractBeanFactory.getBean(AbstractBeanFactory.java:204) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.context.support.PostProcessorRegistrationDelegate.invokeBeanFactoryPostProcessors(PostProcessorRegistrationDelegate.java:179) ~[spring-context-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.invokeBeanFactoryPostProcessors(AbstractApplicationContext.java:705) ~[spring-context-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.context.support.AbstractApplicationContext.refresh(AbstractApplicationContext.java:531) ~[spring-context-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.boot.SpringApplication.refresh(SpringApplication.java:775) [spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at org.springframework.boot.SpringApplication.refreshContext(SpringApplication.java:397) [spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:316) [spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1260) [spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at org.springframework.boot.SpringApplication.run(SpringApplication.java:1248) [spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at com.example.demo.DemoApplication.main(DemoApplication.java:25) [classes/:na]
Caused by: java.lang.NoClassDefFoundError: javax/servlet/annotation/WebServlet
	at org.springframework.boot.web.servlet.WebServletHandler.<init>(WebServletHandler.java:39) ~[spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at org.springframework.boot.web.servlet.ServletComponentRegisteringPostProcessor.<clinit>(ServletComponentRegisteringPostProcessor.java:50) ~[spring-boot-2.1.5.RELEASE.jar:2.1.5.RELEASE]
	at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) ~[na:1.8.0_201]
	at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) ~[na:1.8.0_201]
	at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) ~[na:1.8.0_201]
	at java.lang.reflect.Constructor.newInstance(Constructor.java:423) ~[na:1.8.0_201]
	at org.springframework.beans.BeanUtils.instantiateClass(BeanUtils.java:172) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.SimpleInstantiationStrategy.instantiate(SimpleInstantiationStrategy.java:117) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	at org.springframework.beans.factory.support.ConstructorResolver.instantiate(ConstructorResolver.java:300) ~[spring-beans-5.1.7.RELEASE.jar:5.1.7.RELEASE]
	... 18 common frames omitted
Caused by: java.lang.ClassNotFoundException: javax.servlet.annotation.WebServlet
	at java.net.URLClassLoader.findClass(URLClassLoader.java:382) ~[na:1.8.0_201]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:424) ~[na:1.8.0_201]
	at sun.misc.Launcher$AppClassLoader.loadClass(Launcher.java:349) ~[na:1.8.0_201]
	at java.lang.ClassLoader.loadClass(ClassLoader.java:357) ~[na:1.8.0_201]
	... 27 common frames omitted

## 解决方案

在eclipse下正常运行，在idea下报错

```java
<dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
      <scope>provided</scope>
</dependency>
```

将scope去掉，使用缺省值

* compile，缺省值，适用于所有阶段，会随着项目一起发布。 
* provided，类似compile，期望JDK、容器或使用者会提供这个依赖。如servlet.jar。 
* runtime，只在运行时使用，如JDBC驱动，适用运行和测试阶段。 
* test，只在测试时使用，用于编译和运行测试代码。不会随项目发布。 
* system，类似provided，需要显式提供包含依赖的jar，Maven不会在Repository中查找它。

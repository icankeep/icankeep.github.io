代理
---
  - 静态代理 --> 代理类需要实现和被代理类一样的接口并重写相应的方法，在被代理对象访问前进行预处理操作和扫尾操作
  - 动态代理
    - JDK动态代理 --> 代理类实现InvocationHandler接口
    - CGLIB动态代理 --> 代理类实现MethodInterceptor接口

Spring中AOP
---
AOP思想的实现一般都是基于 代理模式 ，在JAVA中一般采用JDK动态代理模式，但是我们都知道，JDK动态代理模式只能代理接口而不能代理类。因此，Spring AOP 会这样子来进行切换，因为Spring AOP 同时支持 CGLIB、ASPECTJ、JDK动态代理。

- 如果目标对象的实现类实现了接口，Spring AOP 将会采用 JDK 动态代理来生成 AOP 代理类
- 如果目标对象的实现类没有实现接口，Spring AOP 将会采用 CGLIB 来生成 AOP 代理类——不过这个选择过程对开发者完全透明、开发者也无需关心

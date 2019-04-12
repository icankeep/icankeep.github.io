
- - -
## 2019.4.12
1.输出hah
==

```java
public static void hh() {
  System.out.println("hah");
}
public static void main(String[] args) {
  ((Main)null).hh();
}

2.内存泄露
==
内存泄漏（Memory Leak）是指程序中己动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

3.finally
==
关于返回值：

如果try语句里有return，返回的是try语句块中变量值。 详细执行过程如下：

如果有返回值，就把返回值保存到局部变量中；
执行jsr指令跳到finally语句里执行；
执行完finally语句后，返回之前保存在局部变量表里的值。
如果try，finally语句里均有return，忽略try的return，而使用finally的return.

---

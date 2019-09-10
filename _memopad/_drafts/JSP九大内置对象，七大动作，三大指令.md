JSP之九大内置对象
隐藏对象入门探索
Servlet 和JSP中输出数据都需要使用out对象。Servlet 中的out对象是通过getWriter()方法获取的。而JSP中没有定义out对象却可以直接使用。这是因为out是JSO的内置隐藏对象。JSP中的常见的9个内置隐藏对象如下


out输出流对象
　　隐藏对象out是javax.servlet.jsp.JspWriter类的实例服务器向客户输出的字符内容可以通过out对象输出。获取方法： PrintWriter out = response.getWriter();out对象常用的方法如下：
1 　　void clear() 　　清除缓冲区的内容
2　　 void clearBuffer() 　　清除缓冲区的当前内容
3　　 void flush() 　　将缓冲内容flush到客户端浏览器
4　　 int getBufferSize() 　　返回缓冲大小，单位KB
5 　　int getRemaining() 　　返回缓冲剩余大小，单位KB
6 　　isAutoFlush() 　　返回缓冲区满时,是自动清空还是抛出异常
7 　　void close() 　　 关闭输出流

request请求对象
　　隐藏对象request是javax.servlet.ServletRequest类的实例，代表客户端的请求。request包含客户端的信息以及请求的信息，如请求那个文件，附带的地址参数等。每次客户端的请求都会产生一个request实例。request对象的常用方法如下：
1　　 object getAttribute(String name) 　　返回指定属性的属性值
2 　　Enumeration getAttributeNames() 　　 返回所有可用属性名的枚举
3　　String getCharacterEncoding() 　　返回字符编码方式
4　　 int getContentLength() 　　返回请求体的长度(以字节数)
5　　 String getContentType() 　　得到请求体的MIME类型
6　　 ServletInputStream getInputStream()　　 得到请求体中一行的二进制流
7 　　String getParameter(String name) 　　返回name指定参数的参数值
8　　 Enumeration getParameterNames()　　 返回可用参数名的枚举
9 　　String[] getparameterValues(String name) 　　 返回包含参数name的所有值的数组
10　　 String getProtocol() 　　返回请求用的协议类型及版本号
11　　 String getScheme() 　　返回请求用的计划名,如:http https及ftp等
12 　　int getServerPort() 　　返回服务器接受此请求所用的端口号
13　　 String getServerName() 　　 返回接受请求的服务器主机名
14 　　BufferedReader getReader() 　　 返回解码过了的请求体
15 　　String getRemoteAddr() 　　 返回发送此请求的客户端IP地址
16 　　String getRemoteHost() 　　返回发送此请求的客户端主机名
17 　　void setAttribute(String key Object obj) 　　设置属性的属性值
18　　 String getRealPath(String path) 　　返回一虚拟路径的真实路径
19 　　void setCharacterEncoding(“gb2312”) 　　设置接受参数的字符集

response响应对象
　　隐藏对象response是javax.servlet.ServletResponse类的实例，代表客户端的响应。服务器端的任何输出都通过response对象发送到客户端浏览器。每次服务器端都会响应一个response实例。response对象的常用方法如下：
1 　　String getCharacterEncoding() 　　 返回响应用的是何种字符编码
2 　　ServletOutputStream getOutputStream() 　　返回响应的一个二进制输出流
3 　　PrintWriter getWriter() 　　返回可以向客户端输出字符的一个对象
4 　　 void setContentLength(int len) 　　设置响应头长度
5　　 void setContentType(String type) 　　设置响应的MIME类型
6 　　sendRedirect(java.lang.String location) 　　重新定向客户端的请求
7 　　void setCharacterEncoding(“gb2312”) 　　设置响应头的字符集

config配置对象
　　隐藏对象config是javax.servlet.ServletConfig类的实例，ServletConfig封装了配置在web.xml中初始化JSP的参数。JSP中通过config获取这些参数。每个JSP文件中共有一个config对象。config对象的常用方法如表：
1　　String getInitParameter(String name)　　返回配置在web.xml中初始化参数
2　　Enumeration getInitParameterNames() 　　返回所有的初始化参数名称
3　　ServletContext getServletContext()　　返回ServletContext对象
4　　String getServletName　　返回Servlet对象

session会话对象
　　隐藏对象session是javax.servlet.http.HttpSession类的实例。session与cookie是记录客户访问信息的两种机制，session是用于服务器端保存用户信息，cookie用于在客户端保存用户信息。Servlet中通过request.getSession()来获取session对象，而JSP中可以直接使用。如果JSP中配置了<%@page session=”false”%>,则隐藏对象session不可用。每个用户对应一个session对象。session对象的常用方法如下:
1　　 long getCreationTime() 　　返回Session创建时间
2 　　public String getId() 　　返回Session创建时JSP引擎为它设的唯一ID号
3 　　long getLastAccessedTime() 　　返回此Session里客户端最近一次请求时间
4　　 int getMaxInactiveInterval()　　 返回两次请求间隔多长时间此Session被取消(ms)
5　　 String[] getValueNames() 　　返回一个包含此Session中所有可用属性的数组
6　　 void invalidate() 　取消Session,使Session不可用
7 　　boolean isNew() 　　返回服务器创建的一个Session,客户端是否已经加入
8 　　void removeValue(String name) 　　删除Session中指定的属性
9　　 void setAttribute(String key,Object obj) 　　设置Session的属性
１０，　Object getAttribute(String name)　　 返回session中属性名为name的对象

application应用程序对象
　　隐藏对象application是javax.servlet.ServletContext类的对象。application封装JSP所在Web应用程序的信息，例如web.xml中国配置的全局的初始化信息。Servlet中application对象需要通过ServletConfig.getServletContext()来获取。整个Web应用程序对应一个application对象。application对象常用的方法如下：
1,　　Object getAttribute(String name)　　返回application中属性为name的对象
2，　　Enumeration getAttributeNames() 　　返回application中的所有属性名
3，　　void setAttribute(String name,Object value)　　设置application属性
4，　　void removeAttribute(String name) 　　移除application属性
5，　　String getInitParameter(String name)　　返回全局初始话函数
6，　　Enumeration getInitParameterNames(）　　返回所有的全局初始话参数
7，　　String getMimeType(String filename)　　返回文件的文档类型，例如getMimeType(“abc.html”)将返回“text.html”
8，　　String getRealPath(String relativePath）　　返回Web应用程序内相对网址对应的绝对路径

page页面对象
　　隐藏对象page是javax.servlet.jsp.HttpJspPage类的实例。page对象代表当前JSP页面，是当前JSP编译后的Servlet类的对象。page想当于Java类中的关键字this

pageContext页面上下文对象
　　隐藏对象pageContext为javax.servlet.jsp.PageContext类的实例。pageContext对象代表当前JSP页面编译后的内容。通过pageContext能够获取到JSP中的资源。pageContext常用方法如下：
1 　　 JspWriter getOut() 　　返回out对象
2 　　 HttpSession getSession() 　　 返回Session对象(session)
3 　　 Object getPage() 　　返回page对象
4 　　 ServletRequest getRequest() 　　 返回request对象
5 　　 ServletResponse getResponse() 　　 返回response对象

6 　　 void setAttribute(String name,Object attribute) 　　　设置属性及属性值 ，在page范围内有效
7 　　 void setAttribute(String name,Object obj,int scope)　　 在指定范围内设置属性及属性值 ，int1=page,2=request,3=session,4=application
8 　　public Object getAttribute(String name) 　　取属性的值
9　　 Object getAttribute(String name,int scope) 　　在指定范围内取属性的值
10　　 public Object findAttribute(String name) 　　寻找一属性,返回起属性值或NULL
11 　　void removeAttribute(String name) 　　删除某属性
12 　　void removeAttribute(String name,int scope) 　　 在指定范围删除某属性
13　　 int getAttributeScope(String name)　　 返回某属性的作用范围
14　　Enumeration getAttributeNamesInScope(int scope) 　　返回指定范围内可用的属性名枚举
15 　　void release() 　　释放pageContext所占用的资源
16　　void forward(String relativeUrlPath) 　　 使当前页面重导到另一页面
17 　　void include(String relativeUrlPath) 　　 在当前位置包含另一文件

Eexception异常对象
　　隐藏对象exception为java.lang.Exception类的对象。exception封装了JSP中抛出的异常信息。要使用exception隐藏对象，需要设置<%@page isErrorPage”true”%>。隐藏对象exception通常被用来处理错误页面，
　　

JSP之三大指令
page指令
实例：<%@ page language=”java” import=”java.util.*” pageEncoding=”UTF-8”%>
import：等同与import语句
<%@ page import=”java.util.*” %>
<%@ page import=”java.util., java.net.” %>
在一个JSP页面中可以给出多个page指令，而且import是可以重复出现的
<%@ page import=”java.util.*” %>
<%@ page import=”java.next.*” %>

pageEncoding：指定当前页面的编码
如果pageEncoding没有指定，那么默认为contentType的值；
如果pageEncoding和contentType都没有指定，那么默认值为iso-8859-1

contentType：等同与调用response.setContentType(“text/html;charset=xxx”);
如果没有指定contentType属性，那么默认为pageEncoding的值；
如果contentType和pageEncoding都没有指定，那么默认值为iso-8859-1

errorPage：如果当前页面出现异常，那么跳转到errorPage指定的jsp页面。
例如：<%@ page errorPage=”b.jsp” %>
isErrorPage：上面示例中指定b.jsp为错误页面，但在b.jsp中不能使用内置对象exception，保有b.jsp中使用<%@page isErrorPage=”true”%>时，才能在b.jsp中使用错误页面。
autoFlush：当autoFlush为true时，表示out流缓冲区满时会自动刷新。默认为true
buffer：指定out流的缓冲区大小，默认为8KB
isELIgnored：当前JSP页面是否忽略EL表达式，默认为false，表示不忽略，即支持EL表达式

page指令不常用的属性：
language：当前JSP编译后的语言！默认为java，当前也只能选择java
info：当前JSP的说明信息
isThreadSafe：当前JSP是否执行只能单线程访问，默认为false，表示支持并发访问
session：当前页面是否可以使用session，默认为false，表示支持session的使用。
extends：指定JSP编译的servlet的父类！


include指令
JSP可以通过include指令来包含其他文件。被包含的文件可以是JSP文件、HTML文件或文本文件。包含的文件就好像是该JSP文件的一部分，会被同时编译执行。
Include指令的语法格式如下：
<%@ include file=”文件相对 url 地址” %>

taglib指令
taglib指令是用来在当前jsp页面中导入第三方的标签库
<%@ taglib uri=”http://java.sun.com/jsp/jstl/core” % prefix=”c” >
prefix：指定标签前缀，这个东西可以随意起名
uri：指定第三方标签库的uri（唯一标识）
当然，需要先把第三方标签库所需jar包放到类路径中。

JSP之七大动作
jsp:include：在页面被请求的时候引入一个文件。
jsp:useBean：寻找或者实例化一个 JavaBean。
jsp:setProperty：设置 JavaBean 的属性。
jsp:getProperty：输出某个 JavaBean 的属性。
jsp:forward：把请求转到一个新的页面。
jsp:plugin：根据浏览器类型为 Java 插件生成 OBJECT 或 EMBED 标记
详细查看：JSP 动作元素 | 菜鸟教程 .
---------------------
作者：SnailClimb在csdn
来源：CSDN
原文：https://blog.csdn.net/qq_34337272/article/details/64310849
版权声明：本文为博主原创文章，转载请附上博文链接！

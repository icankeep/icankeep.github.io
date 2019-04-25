# Java中线程池

## 合理使用线程池的好处
- 降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。
- 提高响应速度。当任务到达时，任务可以不需要线程创建就能立即执行。
- 提高线程的可管理性。线程是稀缺资源，如果无限制地创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一分配、调优和监控。

## 线程池的实现原理
1. 线程池判断核心线程池里的线程是否都在执行任务。如果不是，则创建一个新的工作线程来执行任务。如果核心线程池里的线程都在执行任务，则进入下个流程。
2. 线程池判断工作队列是否已经满。如果工作队列没有满，则将新提交的任务存储在这个工作队列里。如果工作队列满了，则进入下个流程。
3. 线程池判断线程池的线程是否都处于工作状态。如果没有，则创建一个新的工作线程来执行任务。如果已经满了，则交给饱和策略来处理这个任务。
4. 如果创建新线程将使当前运行的线程超出maximumPoolSize，任务将被拒绝，并调用RejectedExecutionHandler.rejectedExecution()方法。

## 线程池的使用

### 线程池的创建
```java
new ThreadPoolExecutor(corePoolSize,maximumPoolSize,keepAliveTime,milliseconds,runnableTaskQueue,handler);
```
1. `corePoolSize`(线程池的基本大小)：当提交一个任务到线程池时，线程池会创建一个线程来执行任务，即使其他空闲的基本线程能够执行新任务也会创建线程，等到需要执行的任务数大于线程池基本大小时就不再创建。如果调用了线程池的prestartAllCoreThreads()方法，线程池会提前创建并启动所有基本线程。
2. `runnableTaskQueue`(任务队列)：用于保存等待执行的任务的阻塞队列。
- `ArrayBlockingQueue`：是一个基于数组结构的有界阻塞队列，此队列按FIFO原则对元素进行排序
- `LinkedBlockingQueue`：一个基于链表结构的阻塞队列，此队列按FIFO排序元素，吞吐量通常要高于`ArrayBlockingQueue`。静态工厂方法Executors.newFixedThreadPool()使用了这个队列。
- `SynchronousQueue`：一个不存储元素的阻塞队列。每个插入操作必须等到另一个线程调用移除操作，否则插入操作一直处于阻塞状态，吞吐量通常要高于`LinkedBlockingQueue`，静态工厂方法Executors.newCachedThreadPool使用了这个队列。
- `PriorityBlockingQueue`：一个具有优先级的无限阻塞队列。
3. `maximumPoolSize`(线程池最大数量)：线程池允许创建的最大线程数。如果队列满了，并且已创建的线程数小于最大线程数，则线程池会再创建新的线程执行任务。如果使用了无界的任务队列这个参数就没什么效果。
4. `ThreadFactory`：用于设置创建线程的工厂，可以通过线程工厂给每个创建出来的线程设置更有意义的名字。
5. `RejectedExecutionHandler`(饱和策略)：当队列和线程池都满了，说明线程池处于饱和状态，那么必须采取一种策略处理提交的新任务。这个策略默认情况下是AbortPolicy，表示无法处理新任务时抛出异常。
- AbortPolicy：直接抛出异常
- CallerRunsPolicy：只用调用者所在线程来运行任务。
- DiscardOldestPolicy：丢弃队列里最近的一个任务，并执行当前任务。
- DiscardPolicy：不处理，丢弃掉。
可以根据应用场景需要来实现RejectedExecutionHandler接口自定义策略。如记录日志或持久化存储不能处理的任务。
6. `keepAliveTime`(线程活动保持时间)：线程池的工作线程空闲后，保持存活的时间。
7. `TimeUnit`(线程活动保持时间的单位)

### 向线程池提交任务
可以使用两个方法向线程池提交任务，分别为execute()和submit()方法。

execute()用于提交不需要返回值的任务，所以无法判断任务是否被线程池执行成功。

submit()方法用于提交需要返回值的任务。线程池会返回一个Future类型的对象，通过这个Future对象可以判断任务是否执行成功， 并且可以通过Future的get()方法来获取返回值，get()方法或阻塞当前线程直到任务完成，而使用get(long timeout,TimeUnit unit)方法则会阻塞当前线程一段时间后立即返回，这时候有可能任务没有执行完。

### 关闭线程池
可以通过调用线程池的shutdown或shutdownNow方法来关闭线程池。它们的原理是遍历线程池中的工作线程，然后逐个调用线程的interrupt方法来中断线程，所以无法响应中断的任务可能永远无法终止。但是它们存在一定的区别，shutdownNow首先将线程池的状态设置为STOP，然后尝试停止所有的正在执行或暂停任务的线程，并返回等待执行任务的列表，而shutdown只是将线程池的状态设置为SHUTDOWN状态，然后中断所有没有正在执行的任务的线程。

只要调用了这两个关闭方法中的任意一个，isShutdown方法就会返回true。当所有的任务都已关闭后，才表示线程池关闭成功，这是调用isTerminaed方法会返回true。

### 合理地配置线程池
要想合理地配置线程池，就必须首先分析任务特性，可以从以下几个角度来分析。
- 任务的性质：cpu密集型任务，IO密集型任务和混合型任务。
- 任务的优先级：高、中和低
- 任务的执行时间：长、中和短
- 任务的依赖性：是否依赖其他系统资源，如数据库连接

性质不同的任务可以用不同规模的线程池分开处理。CPU密集型任务应配置尽可能小的线程池，如配置N<sub>cpu</sub>+1个线程的线程池。由于IO密集型任务线程并不是一直在执行任务，则应配置尽可能多的线程，如N<sub>cpu</sub>×2。混合型的，如果可以拆分则拆分，只要这两个任务执行的时间不是相差太大，那么分解后执行的吞吐量将高于串行执行的吞吐量。

建议使用有界队列

### 线程池的监控
在监控线程池的时候可以使用以下属性：

taskCount：线程池需要执行的任务数量

completedTaskCount：线程池在运行过程中已完成的任务数量，小于或等于taskCount

largestPoolSize：线程池中曾经创建过的最大线程数量

getPoolSize：线程池当前的线程数量

getActiveCount：获取活动的线程数

通过扩展线程池进行监控。可以通过继承线程池来自定义线程池，重写线程池的beforeExecute、afterExecute和terminated方法，也可以在任务执行前、执行后和线程池关闭前执行一些代码来进行监控。例如，监控任务的平均执行时间，最大执行时间和最小执行时间。这几个方法在线程池中是空方法

## Executor
1. 任务。包括被执行任务需要实现的接口：Runnable接口或Callable接口。
2. 任务的执行。包括任务执行机制的核心接口Executor，以及继承自Executor的ExecutorService接口。Executor框架有两个关键类实现了ExecutorService接口(ThreadPoolExecutor和ScheduledThreadPoolExecutor)。
3. 异步计算的结果。包括接口Future和实现Future接口的FutureTask类

### ThreadPoolExecutor
1. FixedThreadPool
```java
public static ExecutorService newFixedThreadPool(int nThreads) {
  return new ThreadPoolExecutor(nThreads,nThreads,0L,TimeUnit.MILLISECONDS,new LinkedBlockingQueue<Runnable>());
}
public static ExecutorService newFixedThreadPool(int nThreads,ThreadFactory threadFactory);
```
适用于为了满足资源管理的需求，而需要限制当前线程数量的应用场景，它适用于负载比较重的服务器。

(1)如果当前运行的线程数少于corePoolSize，则创建新线程来执行任务

(2)在线程池完成预热之后(当前运行的线程数等于corePoolSize)，将任务加入LinkedBlockingQueue

(3)线程执行完1中的任务后，会在循环中反复从LinkedBlockingQueue获取任务来执行

使用无界队列带来的影响

(1)当线程中的线程数达到corePoolSize后，新任务将在无界队列中等待，因此线程池中的线程数不会超过corePoolSize

(2)由于1，使用无界队列时maximumPoolSize将是一个无效参数

(3)由于1和2，使用无界队列时keepAliveTime将是一个无效参数

(4)由于使用无界队列，运行中的FixedThreadPool(未执行方法shutdown()或shutdownNow())不会拒绝任务

2.  SingleThreadPool
```java
public static ExecutorService newSingleThreadExecutor() {
        return new FinalizableDelegatedExecutorService
            (new ThreadPoolExecutor(1, 1,
                                    0L, TimeUnit.MILLISECONDS,
                                    new LinkedBlockingQueue<Runnable>()));
    }
public static ExecutorService newSingleThreadExecutor(ThreadFactory threadFactory);
```
适用于需要保证顺序地执行各个任务；并且在任意时间点，不会有多个线程是活动的应用场景

3. CachedThreadPool
```java
public static ExecutorService newCachedThreadPool() {
    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                  60L, TimeUnit.SECONDS,
                                  new SynchronousQueue<Runnable>());
}
public static ExecutorService newCachedThreadPool(ThreadFactory threadFactory);
```
大小无界的线程池，适用于执行很多的短期异步任务的小程序，或者是负载比较轻的服务器

(1)首先执行SynchronousQueue.offer(Runnable task)。如果当前maximumPool中有空闲线程正在执行SynchronousQueue.poll()，那么主线程执行offer操作与空闲线程执行的poll()操作配对成功，主线程把任务交给空闲线程执行，execute()方法执行完成；否则执行下面的步骤二

(2)当初始maximumPool为空，或者maximumPool中当前没有空闲线程时，将没有线程执行poll()。这种情况下，会创建一个新线程执行任务，execute()方法执行完成

(3)新创建的线程执行完后，会执行SynchronousQueue.poll()。这个poll操作会让空闲线程最多在SynchronousQueue中等待60秒。

### ScheduledThreadPoolExecutor
1. ScheduledThreadPoolExecutor
```java
public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize);
public static ScheduledExecutorService newScheduledThreadPool(int corePoolSize,ThreadFactory threadFactory);
```
适用于需要单个后台线程执行周期任务，同时需要保证顺序地执行各个任务的应用场景

(1)当调用ScheduledThreadPoolExecutor的scheduleAtFixedRate()方法或者scheduleWithFixedDelay()方法时，会向ScheduledThreadPoolExecutor的DelayQueue添加一个实现了RunnableScheduledFuture接口的ScheduledFutureTask

(2)线程池中的线程从DelayQueue中获取ScheduledFutureTask，然后执行任务

2. SingleThreadScheduledExecutor
```java
public static ScheduledExecutorService newSingleThreadScheduledExecutor();
public static ScheduledExecutorService newSingleThreadScheduledExecutor(ThreadFactory threadFactory);
```
适用于单个后台线程执行周期任务，同时需要保证顺序地执行各个任务的应用场景

### Future接口
Future接口和实现Future接口的FutureTask类用来表示异步计算的结果。当我们把Runnable接口或Callable接口的实现类提交(submit)给ThreadPoolExecutor或ScheduledThreadPoolExecutor时，ThreadPoolExecutor或ScheduledThreadPoolExecutor会向我们返回一个FutureTask对象。
```java
<T> Future<T> submit(Callable<T> task);
<T> Future<T> submit(Runnable task,T result);
Future<?> submit(Runnable task);
```

### Runnable接口和Callable接口
Runnable接口和Callable接口的实现类，都可以被ThreadPoolExecutor或ScheduledThreadPoolExecutor执行。它们之间的区别是Runnable不会返回结果，而Callable可以返回结果。

除了可以自己创建实现Callable接口的对象外，还可以使用工厂类Executors来把一个Runnable包装成一个Callable。
```java
public static Callable<Object> callable(Runnable task);//任务完成get()方法返回null
public static <T> Callable<T> callable(Runnable task,T result);//任务完成get()方法返回result对象
```

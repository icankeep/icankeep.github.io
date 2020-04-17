## git rebase
### 一些博客：
- 廖雪峰教程
- https://blog.csdn.net/allanGold/article/details/87168012
- https://mp.weixin.qq.com/s?__biz=MzU4NTQ2OTcyOQ==&mid=2247484061&idx=1&sn=2cd225911f39267218dc8415d7de7ab5&chksm=fd8b58d3cafcd1c5a24b9062ab419fbb4610f44ba1ad6a7a93815a68c3d2be34f0c7feca3dfa&token=396286843&lang=zh_CN#rd

### 个人总结：

- 可以合并多个commit
- 开发完成需要提交的时候远端已经被别人提交了一个或多个commit，我们再提交的时候需要git pull，然后就会形成分叉，如果需要去除分叉形成一条直线就需要rebase

![](https://ae03.alicdn.com/kf/H95297568120148df80f0d903f8855de7t.png)

**rebase后**
![](https://ae01.alicdn.com/kf/H7c92674a8d57425c85172655ef9187c67.png)

```git
git rebase -i HEAD~3
```

执行该命令后就会进入一个编辑的界面

主要使用的pick和squash

pick不做处理，该提交不变化

squash可以将该提交合并到之前的提交

![](https://ae06.alicdn.com/kf/H837b1885c14d468cac4e0618cb524d97N.png)

![](https://ae03.alicdn.com/kf/H4bf2066f780b4c32835ecadb3806f36fh.png)

### FAQ
有时已经将commit push到远端，然后在本地又进行了rebase操作，这种情况下是不能进行fast-forwad模式的合并操作的，所以当执行 git push origin feature 命令时会报一个错误。

**解决办法:**
- feature分支只有你一个人在开发

    此时没有其他人会进行提交操作，那么可以直接进行强制推送 git push --force origin feature ，–force可以直接理解为用你本地分支的状态区覆盖掉远端origin分支的状态，也就是执行过后，本地的分支什么样，远端分支就什么样

- feature分支有多人开发

    此时如果你贸然的使用–force命令，会有覆盖掉其他人提交代码的风险。比如，小明和小红两个人同时在feature分支上进行开发，小明已经在feature分支上提交了一部分代码，而小红此时执行了rebase操作，所以如果想要推送到远端仓库就必须使用 - -force 参数，而小红推送成功之后就会覆盖掉小明提交的代码（前面说过–force就是用本地状态覆盖掉远端状态）。在这种情况下，推荐另外一种更安全的命令  git push --force-with-lease origin feature  使用该命令在强制覆盖前会进行一次检查如果其他人在该分支上有提交会有一个警告，此时可以避免覆盖代码的风险。

总结：不管当前分支是否只有自己在使用，在rebase之后，需要强制推送到远端分支时，使用  git push --force-with-lease origin feature  参数来保证分支安全。

### 修改已提交的commit的author信息

重置本项目用户信息：

```bash
$ git config user.name 'b'

$ git config user.email b@email.com
```

使用amend命令修改commit信息：
```bash
$ git commit --amend --reset-author
```

amend命令只会修改最后一次commit的信息，之前的commit需要使用rebase：
```bash
$ git rebase -i HEAD~3
```


# 输出如下

pick 1 commit 1

pick 2 commit 2

pick 3 commit 3

要修改哪个，就把那行的pick改为edit，然后退出。例如想修改commit 1的author，光标移到第一个pick，按i键进入INSERT模式，把pick改为edit：

edit 1 commit 1

pick 2 commit 2

pick 3 commit 3

...

-- INSERT --

然后按esc键，退出INSERT模式，输入:wq退出，这时可以看到提示，可以修改commit 1的信息了：

Stopped at 1 commit 1

You can amend the commit now, with

```
$ git commit --amend
```

Once you are satisfied with tour changes, run
```
$ git rebase --continue
```


输入amend命令重置用户信息：
```
$ git commit --amend --reset-author
```

会出现commit 1的提交记录及注释内容，可进入INSERT模式修改注释，:wq退出。这时再查看提交历史，发现commit 1的author已经变成b(b@email.com)了，且是最新一次记录。

通过continue命令回到正常状态：

```
$ git rebase --continue
```

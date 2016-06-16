# lazyclone

lazyclone for git clone

## 原理

为了偷个懒，折腾好半天

因为clone完成后要cd到新目录，所以比较恶心，而node.js里的child_process是无法切换的，你想啊shell命令是当前子线程里执行，只要线程不变，它可能变么？

node.js里的child_process实际上使用的popen(3)接口

```
  popen(3) - Linux man page

  Name

  popen, pclose - pipe stream to or from a process

  Synopsis

  #include <stdio.h>

  FILE *popen(const char *command, const char *type);

  int pclose(FILE *stream);
  Feature Test Macro Requirements for glibc (see feature_test_macros(7)):
  popen(), pclose():
  _POSIX_C_SOURCE >= 2 || _XOPEN_SOURCE || _BSD_SOURCE || _SVID_SOURCE
```

在shell里其实也是一样的

```
cd $reponame

exec $SHELL
```

必须`exec $SHELL`才好使

那么，只剩下最后一招了，把a.sh脚本copy到npm命令所在的目录，然后赋予执行权限，这样就可以像npm一样执行了。

这是npm scripts的另一个极端的做法。

## Install 

```
npm i -g lazyclone
```

now, you can use `clone` command in terminal.


## Usages

> clone git@github.com:i5ting/lazyclone.git


```
$ pwd
/Users/sang/test/gitclone
```

execute clone

```
$ clone git@github.com:i5ting/lazyclone.git
git@github.com:i5ting/lazyclone.git
lazyclone
Cloning into 'lazyclone'...
remote: Counting objects: 28, done.
remote: Compressing objects: 100% (21/21), done.
remote: Total 28 (delta 13), reused 17 (delta 6), pack-reused 0
Receiving objects: 100% (28/28), done.
Resolving deltas: 100% (13/13), done.
Checking connectivity... done.
Now using node v0.10.38 (npm v2.9.1)
Now using node v4.4.5 (npm v2.15.5)
```

get current path

```
$ pwd
/Users/sang/test/gitclone/lazyclone
```
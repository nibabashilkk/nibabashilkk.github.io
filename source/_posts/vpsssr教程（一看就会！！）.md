---
title: vps+ssr教程（一看就会！！）
tags:
  - 原创
  - 服务器
  - 科学上网
id: '210'
categories:
  - - 科学上网
date: 2022-10-14 21:57:11
---

注意：本教程及根据本教程搭建的梯子只供学习和查阅资料使用，小刘不建议也不鼓励使用梯子进行任何违法行为，所有使用该教程产生的违法行为使用者自行承担。

由于vultr服务器基本都有优惠而且稳定性还算可以，本次就以vultr为例进行搭建。

**第一步：购买服务器并选择系统**

自行去vultr官网（网址：https://www.vultr.com/?ref=9273977-8H）注册。

之后到产品那购买服务器。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665722996-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-12-132956-300x151.png)

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755503-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x215.png)

系统最好选centos7，也就是四个选项里的最后一个。别问我问什么这么选（ps 没钱，这样基本上最便宜）。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755558-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x157.png)

买最低的配置就行了，自己用的话基本够用。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755599-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x167.png)

把下面的自动备份选成off，要不然每月还要多收一美元。选完后直接“Deploy now”。

之后进入付钱环节，最低充值10美元，建议用支付宝支付，快捷且之后退款快。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755625-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x158.png)

名字什么的随便写，由于现在人民币贬值了，10美元换成人民币要71还多，亏死。付完钱等待服务器创建完成即可。

**第二步：傻瓜式安装ssr服务器。**

创建好服务器，看它的具体信息。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755650-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x239.png)

有你自己的ip和服务器账号和密码。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755677-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x205.png)

点击这个电脑标志就可以连接你的服务器了。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755706-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-300x66.png)

把你root账号和密码输进去，密码你输进去是不会显示的，所以尽量不要输错。

进入终端后执行下列命令，傻瓜式安装服务器。

```
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/ssr.sh && chmod +x ssr.sh && bash ssr.sh
```

根据命令交互界面一步步安装，不知道什么意思全部选默认即可。

安装结束会有个配置信息。

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755737-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-91x300.png)

根据每一项填到你客户端ssr里面就行。

**第三步：配置客户端**

![](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/1665755776-%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE-2022-10-14-215046-287x300.png)

客户端里面这些选项全部替换成第二部安装结束配置信息里面的。客户端下载地址可以去我博客查看。

至此，已全部搭建完成.感兴趣的小伙伴可以自己尝试一下。觉得小刘教程不错的话欢迎关注我的公众号。
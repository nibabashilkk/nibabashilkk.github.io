---
title: windows获取之前保存的WiFi密码
tags:
  - WiFi密码
  - windows
id: '411'
categories:
  - - 微信文章
date: 2022-11-01 19:38:20
---

今天上班摸鱼无意间发现了一串小而精的代码。

```
@echo offtitle 批处理查看所有连接过的WiFi名称和密码echo. & echo 请用管理员权限运行此批处理，否则可能无法获取到密码echo.for /f "tokens=3*" %%i in ('netsh wlan show profiles ^ findstr "所有用户配置文件"') do (call :GetPass %%i %%j)pausegoto :eof :GetPassecho,WiFi : %*setlocal enabledelayedexpansionfor /f "delims=" %%a in ('netsh wlan show profile name^="%*" key^=clear ^ findstr "关键内容"') do (set var=%%aset var1=!var:关键内容=密码!set var2=!var1: =!set var3=!var2:^:= : !echo,!var3!)echo,=========================endlocalgoto :eof
```

介绍说可以在windows下获得你之前所连接WiFi的名称和密码。

新建一个文本文档把代码复制进去并把编码改成ANSI格式。

![屏幕截图 2022-11-01 185711](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/屏幕截图 2022-11-01 185711.png)

之后把拓展名改成.bat，windows下的可执行脚本。

![屏幕截图 2022-11-01 185748](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/屏幕截图 2022-11-01 185748.png)

具体成效就不能演示了，现在用的电脑没有无线网卡（只能插网线）。感兴趣的可以试一试，下次忘了WiFi密码就不怕了。

​

#### 知其然更要知其所以然

​

对我来说，探究事物的原理是很有乐趣的。通过和网上其他获取存过的WiFi密码教程对比，发现了这段代码的“真正含义“。

前文已经说了，bat后缀的文件本质上是可执行脚本。所以上面那段代码其实就是我们正常获取密码的流程，只不过对输出做了一些处理。

由于家里的电脑没有网卡，不能亲自演示了，以下操作图片都是从网上找来的。

输入下列命令就能查看之前连过的WiFi。

```
netsh wlan show profiles
```

![37161e65a3a50fc850f77bf4ddf72296](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/37161e65a3a50fc850f77bf4ddf72296.jpg)

所有用户配置文件那一列显示的就是WiFi名称，输入下面命令进入到每个WiFi里，查看具体的配置参数。

```
netsh wlan show profiles name=(替换为需要查看密码的WiFi名) key=clear比如：netsh wlan show profiles name=MCPARK key=clear
```

![5a310cfdcff7ae066c08831e6c022880](https://cdn.staticaly.com/gh/nibabashilkk/tc1/main/5a310cfdcff7ae066c08831e6c022880.jpg)

关键内容就对应着你的WiFi密码。

有没有发现这些命令在最上面代码里都有，上面代码其实就是匹配所有的wifi名称，循环遍历每一个WiFi的“关键内容”，也就是你的密码。
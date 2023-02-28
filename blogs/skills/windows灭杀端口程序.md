---
title: Windows灭杀端口程序
date: 2023-02-27
cover: https://pic.imgdb.cn/item/63fe0104f144a0100745956a.jpg
author: Yxw
tags:
 - java
 - skills
categories:
 -  每日技巧
---

::: tip 介绍
一招解决端口占用问题的烦恼<br>
:::

<!-- more -->


## 缘起

> 上周在机房使用eclipse运行tomcat时，程序提示“当前xxx端口号已被占用”，于是乎默默调出了任务管理器，费老大劲儿找到对应的`java`进程，结束任务。



不知道大家在使用**IDE**工具写**web**代码时，是否会遇到类似的情况，莫名其妙就提示当前端口号已被占用，往往出现此类问题的原因可能是 **程序运行途中强行关闭程序** | **连接`vpn`进行开发时，电脑息屏时间过长网络断开后导致程序中断** |  **正常关闭程序还是出现端口号莫名被占用（离大谱）** 





**问题图示**

![ppCuO6s.png](https://s1.ax1x.com/2023/02/27/ppCuO6s.png)



## 解决过程



> 一般遇到端口号被占用的情况，我习惯于打开任务管理器（**Ctrl + Shift + Esc**） --> 详细信息 --> 寻找对应进程 --> 结束进程。
>
> 反思是否存在问题：
>
> 通常情况下，运行什么程序提示端口被占用，那么大概率被占用端口是你所运行的程序进程占用的。比如我运行`java`程序，提示8888端口被占用，那么大概率我的系统中8888端口是另一个`java`程序占用的，故在任务管理查找相应进程时，我会寻找`java`进程进行结束处理。
>
> However，是否存在一种情况，被占用的端口不是你当前运行的程序呢？当然有可能，`Mysql`默认占用端口是3306，但你`java`运行web程序时非要采用3306端口，那结果必然冲突。若遇到一个无法预测的程序占用了端口，再采用任务管理器的方式结束进程是不是就很麻烦了呢？（关键是任务管理器不提供查找对应端口的搜索功能）
>
> 略微思考，不妨退而求其次，我换个端口运行总行吧！这是个好办法，但端口都占到我们家门口了，一味地退让也不是办法，不如揪出幕后凶手，直击要害。



## 解决方案

处理这类问题，首先想到了在**Linux**环境下，关闭`java`程序所采用的方式：查找对应端口程序信息 --> 杀死进程。

### Linux命令

**查找对应端口程序信息**

```Linux
lsof -i 端口号
```



**杀死对应进程**

```Linux
kill -9 PID信息
```



联想到`Linux`系统下对于进程控制的精准操作，自然也希望`Windows`环境下也可以有类似的命令方式。果不其然，一番搜索后，找到了`Windows`下的命令（注：需启动`cmd`窗口进行操作）。



### Windows命令

**查找对应端口程序信息**

```Windows
netstat -ano|findstr 端口号
```



**杀死对应进程**

```Windows
taskkill /f /pid PID信息
```



> 在`taskkill`命令中， **/f** 表示**强制关闭**





**图示**

①打开`cmd`命令窗口后，查找对应的端口信息

![ppP8iz8.png](https://s1.ax1x.com/2023/02/28/ppP8iz8.png)



②记住查询到的`PID`信息，通过`taskkill`命令强制关闭占用该端口号的进程

![ppP8Yw9.png](https://s1.ax1x.com/2023/02/28/ppP8Yw9.png)





## 简化封装



> 通过以上两条命令我们完美解决了在`Windows`环境下端口占用的问题，解决日常问题足矣。虽然只有两条命令，我们完全可以记住它们，但人总是懒惰的，有没有类似可视化界面进行操作，从而规避掉人工记忆命令呢？
>
> 我们不妨通过`java`对`cmd`命令的封装，再利用控制台输入的方式进行简化操作，从而规避人工输入命令的方式解决问题。
>
> 那么核心问题便是：如何使用Java执行`cmd`命令呢？



**核心代码**



```java
try {
            // 执行cmd命令（核心功能）
            Process pro = Runtime.
                    getRuntime().
                    exec("cmd /c netstat -ano|findstr 8888");

            // 定义读取信息的流对象
            BufferedReader br = new BufferedReader(new InputStreamReader(pro.
                    getInputStream(),
                    "gb2312"));
    
            String msg;
            StringBuffer info = new StringBuffer();
    
            // 读取数据
            while ((msg = br.readLine()) != null) {
                info.append(msg + "\n");
            }
    
            // 判断是否查到数据
            if (info.toString().equals("")) {
                System.out.println("没有查到相关数据，可能是您的端口号输入错误 或 当前端口没有被占用，请重新查找");
            } else {
                // 输出结果
                System.out.println(info.toString());
            }
} catch (IOException e) {
     e.printStackTrace();
}
```



**代码流程介绍**



> 使用Runtime的静态方法**`getRuntime()`**，获取到Runtime类后，调用**`exec()`**方法执行对应的`cmd`命令。再使用BufferedReader对象接收执行`cmd`命令后的返回结果，通过while循环读取信息。
>
> 代码中间定义StringBuffer可变字符串，是为后面是否输出对应结果进行判断作铺垫。
>
> 定义BufferedReader时，构造器中传参 **`gb2312`** 是为了定义读取字符流时以什么样的字符集进行读取。由于`cmd`命令窗口中默认的字符集是gb2312，若不添加该参数，则输出结果会出现乱码。



有了核心代码后，我们就可以用Java编写一个小工具来代替人工输入命令的操作啦。最终打成一个jar包，使用 **`java  -jar`** 命令运行即可！（文末赋工具链接）



**效果图示**

![ppPaV1I.png](https://s1.ax1x.com/2023/02/28/ppPaV1I.png)



## 代码下载

① Gitee平台下载源代码

[代码在这里呀](https://gitee.com/java_yxw/port-toolp)

② 直接下载Jar包，开箱即用

[Jar包下载点这里](https://wwbk.lanzoum.com/i2BSM0ouxttg)



## 总结

遇到端口被占用的问题不用慌，总的来说有三种解决方案：

① 打开任务管理器，寻找对应进程，结束任务

​		缺点：人工查找慢，遇到不确定的程序哭笑不得

② 直接更换端口

​		优点：见效快，很方便

​		缺点：一次两次没问题，但如果遇到关一次程序就废一个端口的情况，个人认为该方式过于憋屈！

③ 采用cmd命令方式结束程序

​		优点：迅速定位问题，见效快，命令输入，酷酷的感觉！

​		缺点：需要大脑记忆命令，emm，个人认为就两行命令，问题不大，况且可采用编程语言进行封装，还是比较方便的。








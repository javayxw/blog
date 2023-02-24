---
title: Mark Down 语法
date: 2023-02-19
cover: https://pic.imgdb.cn/item/63f71faef144a0100744a9d4.jpg
author: W.Yan
tags:
 - markdown
categories:
 -  技术笔记

---

::: tip 介绍
mark down部分书写语法<br>
:::

<!-- more -->

# Mark Down 备忘录

## 1.标题格式

```text
# 一级标题

## 二级标题
```

## 2.段落

```text
段落和段落之间要隔一行。

就像这样。
```

## 3.分割线

```text
三条横线 (或更多的横线) 表示分割线。

---

```

三条横线 (或更多的横线) 表示分割线。

---

## 4.格式修改

```text
**重点加粗**

*斜体*

~~删除线~~

==高亮==


\~\~删除线的内容\~\~
```

**重点加粗**

*斜体*

~~删除线~~

==高亮==

\~\~删除线的内容\~\~

## 5.快捷键

### （1）加粗

选中文本之后，按下 `Ctrl + B` 可以给选中文本**加粗**。

### （2）斜体

同理 `Ctrl + I` 可以让选中文本变为*斜体*。

### （3）缩进

要进行**缩进** （书写嵌套列表），你可以使用 VS Code 的快捷键 `Ctrl + [` 和 `Ctrl + ]`。

这个快捷键可以将代码向左或向右进行缩进。

### （4） 自动表格对齐

`Shift + Alt + F`

### （5）下划线  

快捷键Ctrl+U

## 6.列表

```text
* 无序列表
  * 嵌套无序列表
  * 嵌套无序列表
* 无序列表
* 无序列表

1. 有序列表 1
   1. 嵌套有序列表 1
   2. 嵌套有序列表 2
2. 有序列表 2
3. 有序列表 3

- [x] 已经完成的事 1
- [x] 已经完成的事 2
- [x] 已经完成的事 3
- [ ] 仍未完成的事 4
- [ ] 仍未完成的事 5
```

* 无序列表
  * 嵌套无序列表
  * 嵌套无序列表
* 无序列表
* 无序列表

1. 有序列表 1
   1. 嵌套有序列表 1
   2. 嵌套有序列表 2
2. 有序列表 2
3. 有序列表 3

- [x] 已经完成的事 1
- [x] 已经完成的事 2
- [x] 已经完成的事 3
- [ ] 仍未完成的事 4
- [ ] 仍未完成的事 5

## 7.引用和代码

```text
(1)引用文本：

> 引用别人说的话
> 就这样写
> By. OrangeX4

这是 `行内代码` 语法。

(2)代码块语法：

''' python
print("Hello，World!")
'''

注意要将 ' 替换成 `。

(3)代码行数的显示：

''' javascript {.line-numbers}
function add(x，y) {
  return x + y
}
'''

注意要将 ' 替换成 `。
```

(1)引用文本：

> 引用别人说的话
> 就这样写
> By. OrangeX4

这是 `行内代码` 语法。

(2)代码块语法：

`` python
print("Hello，World!")

三个~键然后写语言打代码

注意要将 ' 替换成 `。

##  8.超链接

```text
[超链接名称](链接地址)

![图片提示语](图片地址)

例如，可以使用网址和图床：

[OrangeX4's Blog](https://orangex4.cool/)

![OrangeX's Avatar](https://orangex4.cool/images/icons/profile.jpg)

也可以在本地用相对地址：

[Other](other.md)

![OrangeX's Avatar](images/profile.jpg)
```

[OrangeX4's Blog](https://orangex4.cool/)

![OrangeX's Avatar](https://orangex4.cool/images/icons/profile.jpg)

## 9.表格

```text
| 表头 | 表头 |
| ---- | ---- |
| 内容 | 内容 |
| 内容 | 内容 |
```

| 表头 | 表头 |
| ---- | ---- |
| 内容 | 内容 |
| 内容 | 内容 |

| 表头 | 表头 |
| ---- | ---- |
| 内容 | 内容 |

## 10.字体颜色改变

### (1)  开启方式

打开文件  ->  偏好设置  ->   拓展语法   ->    公式拓展    ->    重启Typora

### (2) 方式源码

```ruby
$\textcolor{GreenYellow}{GreenYellow} $

$\textcolor{Yellow}{Yellow}$

$\textcolor{Goldenrod}{Goldenrod} $

$\textcolor{Dandelion}{Dandelion}$

$\textcolor{Apricot}{Apricot} $

$\textcolor{Peach}{Peach}$

$\textcolor{Melon}{Melon} $

$\textcolor{YellowOrange}{YellowOrange}$

$\textcolor{Orange}{Orange} $

$\textcolor{BurntOrange}{BurntOrange}$

$\textcolor{Bittersweet}{Bittersweet}$

$\textcolor{RedOrange}{RedOrange} $

$\textcolor{Mahogany}{Mahogany}$

$\textcolor{Maroon}{Maroon} $

$\textcolor{BrickRed}{BrickRed}$

$\textcolor{Red}{Red} $

$\textcolor{OrangeRed}{OrangeRed}$

$\textcolor{RubineRed}{RubineRed}$

$\textcolor{WildStrawberry}{WildStrawberry}$

$\textcolor{Salmon}{Salmon}$

$\textcolor{CarnationPink}{CarnationPink}$

$\textcolor{Magenta}{Magenta} $

$\textcolor{VioletRed}{VioletRed}$

$\textcolor{Rhodamine}{Rhodamine} $

$\textcolor{Mulberry}{Mulberry}$

$\textcolor{RedViolet}{RedViolet} $

$\textcolor{Fuchsia}{Fuchsia}$

$\textcolor{Lavender}{Lavender} $

$\textcolor{Thistle}{Thistle}$

$\textcolor{Orchid}{Orchid} $

$\textcolor{DarkOrchid}{DarkOrchid}$

$\textcolor{Purple}{Purple} $

$\textcolor{Plum}{Plum}$

$\textcolor{Violet}{Violet} $

$\textcolor{RoyalPurple}{RoyalPurple}$

$\textcolor{BlueViolet}{BlueViolet}$

$\textcolor{Periwinkle}{Periwinkle}$

$\textcolor{CadetBlue}{CadetBlue}$

$\textcolor{CornflowerBlue}{CornflowerBlue}$

$\textcolor{MidnightBlue}{MidnightBlue}$

$\textcolor{NavyBlue}{NavyBlue} $

$\textcolor{RoyalBlue}{RoyalBlue}$

$\textcolor{Blue}{Blue} $

$\textcolor{Cerulean}{Cerulean}$

$\textcolor{Cyan}{Cyan} $

$\textcolor{ProcessBlue}{ProcessBlue}$

$\textcolor{SkyBlue}{SkyBlue} $

$\textcolor{Turquoise}{Turquoise}$

$\textcolor{TealBlue}{TealBlue} $

$\textcolor{Aquamarine}{Aquamarine}$

$\textcolor{BlueGreen}{BlueGreen} $

$\textcolor{Emerald}{Emerald}$

$\textcolor{JungleGreen}{JungleGreen}$

$\textcolor{SeaGreen}{SeaGreen} $

$\textcolor{Green}{Green}$

$\textcolor{ForestGreen}{ForestGreen}$

$\textcolor{PineGreen}{PineGreen} $

$\textcolor{LimeGreen}{LimeGreen}$

$\textcolor{YellowGreen}{YellowGreen}$

$\textcolor{SpringGreen}{SpringGreen}$

$\textcolor{OliveGreen}{OliveGreen}$

$\textcolor{RawSienna}{RawSienna} $

$\textcolor{Sepia}{Sepia}$

$\textcolor{Brown}{Brown} $

$\textcolor{Tan}{Tan}$

$\textcolor{Gray}{Gray} $

$\textcolor{Black}{Black}$
```

### (3) 效果展示

$\textcolor{GreenYellow}{GreenYellow} $

$\textcolor{Yellow}{Yellow}$

$\textcolor{Goldenrod}{Goldenrod} $

$\textcolor{Dandelion}{Dandelion}$

$\textcolor{Apricot}{Apricot} $

$\textcolor{Peach}{Peach}$

$\textcolor{Melon}{Melon} $

$\textcolor{YellowOrange}{YellowOrange}$

$\textcolor{Orange}{Orange} $

$\textcolor{BurntOrange}{BurntOrange}$

$\textcolor{Bittersweet}{Bittersweet}$

$\textcolor{RedOrange}{RedOrange} $

$\textcolor{Mahogany}{Mahogany}$

$\textcolor{Maroon}{Maroon} $

$\textcolor{BrickRed}{BrickRed}$

$\textcolor{Red}{Red} $

$\textcolor{OrangeRed}{OrangeRed}$

$\textcolor{RubineRed}{RubineRed}$

$\textcolor{WildStrawberry}{WildStrawberry}$

$\textcolor{Salmon}{Salmon}$

$\textcolor{CarnationPink}{CarnationPink}$

$\textcolor{Magenta}{Magenta} $

$\textcolor{VioletRed}{VioletRed}$

$\textcolor{Rhodamine}{Rhodamine} $

$\textcolor{Mulberry}{Mulberry}$

$\textcolor{RedViolet}{RedViolet} $

$\textcolor{Fuchsia}{Fuchsia}$

$\textcolor{Lavender}{Lavender} $

$\textcolor{Thistle}{Thistle}$

$\textcolor{Orchid}{Orchid} $

$\textcolor{DarkOrchid}{DarkOrchid}$

$\textcolor{Purple}{Purple} $

$\textcolor{Plum}{Plum}$

$\textcolor{Violet}{Violet} $

$\textcolor{RoyalPurple}{RoyalPurple}$

$\textcolor{BlueViolet}{BlueViolet}$

$\textcolor{Periwinkle}{Periwinkle}$

$\textcolor{CadetBlue}{CadetBlue}$

$\textcolor{CornflowerBlue}{CornflowerBlue}$

$\textcolor{MidnightBlue}{MidnightBlue}$

$\textcolor{NavyBlue}{NavyBlue} $

$\textcolor{RoyalBlue}{RoyalBlue}$

$\textcolor{Blue}{Blue} $

$\textcolor{Cerulean}{Cerulean}$

$\textcolor{Cyan}{Cyan} $

$\textcolor{ProcessBlue}{ProcessBlue}$

$\textcolor{SkyBlue}{SkyBlue} $

$\textcolor{Turquoise}{Turquoise}$

$\textcolor{TealBlue}{TealBlue} $

$\textcolor{Aquamarine}{Aquamarine}$

$\textcolor{BlueGreen}{BlueGreen} $

$\textcolor{Emerald}{Emerald}$

$\textcolor{JungleGreen}{JungleGreen}$

$\textcolor{SeaGreen}{SeaGreen} $

$\textcolor{Green}{Green}$

$\textcolor{ForestGreen}{ForestGreen}$

$\textcolor{PineGreen}{PineGreen} $

$\textcolor{LimeGreen}{LimeGreen}$

$\textcolor{YellowGreen}{YellowGreen}$

$\textcolor{SpringGreen}{SpringGreen}$

$\textcolor{OliveGreen}{OliveGreen}$

$\textcolor{RawSienna}{RawSienna} $

$\textcolor{Sepia}{Sepia}$

$\textcolor{Brown}{Brown} $

$\textcolor{Tan}{Tan}$

$\textcolor{Gray}{Gray} $

$\textcolor{Black}{Black}$

11.备注

11.1 不可以出现下列代码

![image-20230223151119703](C:\Users\86151\AppData\Roaming\Typora\typora-user-images\image-20230223151119703.png)

不然整篇笔记都会莫名其妙消失，非常恐怖！！！
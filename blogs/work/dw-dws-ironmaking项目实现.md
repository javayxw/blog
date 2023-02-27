---
title: dw-dws-ironmaking
date: 2023-02-24
cover: https://pic.imgdb.cn/item/63f71ef6f144a0100743a524.jpg
author: W.Yan
tags:
 - working
categories:
 -  工作日志
---

::: tip 项目介绍
炼铁工艺，包括对煤粉、焦炭、烧结、球团的高炉的炉温预测分析<br>
:::

<!-- more -->

## 项目需求

> 定时抽取需要的数据，建立高炉模型

## 项目构思

> 

## 项目疑问难点



## 项目代码实现

```
import java.util.Scanner;

public class Practice3 {
	public static void main(String[] args) {
		// Java实现判断闰年平年，并输出某月天数
		/**
		 * 闰年的判断条件是： 能被4整除但不被100整除 能被400整除
		 */
		// 接收键盘输入的数值
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入年份");
		int year = sc.nextInt();
		// 用isYear方法和键盘输入的数值进行判断
		if (isYear(year)) {
			System.out.println("是闰年");
		} else {
			System.out.println("是平年");
		}
		// 然后进行月份的输入
		System.out.println("请输入月份");
		int month = sc.nextInt();
		while (month > 12 || month < 0) {
			break;// 终止程序进行
		}
		int day;
		switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			day = 31;
			break;

		case 4:
		case 6:
		case 9:
		case 11:
			day = 30;
		default:
			if (isYear(year)) {// 闰年二月有二十九天
				day = 29;
			} else {
				day = 28;
			}
		}
		System.out.println("这个月有" + day + "天");
	
	}
	
	// 先搞一个方法进行判断是不是平面还是闰年
	public static boolean isYear(int y) {
		// 进行判断
		if (y % 4 == 0 && y % 100 != 0 || y % 200 == 0) {
			return true;
		} else {
			return false;
		}
	}

}
```


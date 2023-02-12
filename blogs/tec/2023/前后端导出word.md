---
title: 如何利用前端或后端导出word文档
date: 2023-02-12
cover: https://pic.imgdb.cn/item/63e8f8934757feff339f4819.png
tags:
    - Apache POI
    - docxtemplater
categories:
 -  技术笔记    
---




## 需求分析

> 出于毕设的一个核心功能，我踏入了“怎样导出word文档”技术实现的探寻之旅。简单来说，就是前端存在一个表单，例如：个人信息、家庭关系 …… 用户填写这样的表单信息后，点击某个按钮，会生成一个word文档供用户下载。word文档里是一张表格，其中对应的地方便是用户在前端所填的信息。



### 图示

![4cWJs0.png](https://z3.ax1x.com/2021/09/26/4cWJs0.png)



------



## 实现方式

> 通过资料的查询，找到了前后端两种实现方案，这里来记录一下



## ① 前端实现

### 1.1  采用技术

> Vue + docxtemplater + jszip-utils + pizzip + FileSaver
>
> docxtemplater ：word的模板插件
>
> jszip-utils + pizzip：前端解压缩，自动填充
>
> FileSaver：文件导出保存

### 1.2  原理解释

> 提前准备好需要导出的word模板（如：只有一个空表格），需要动态生成的位置，采用  {变量} 这样占位符的形式填写，docxtemplater 使用 JSON 数据格式作为输入，处理docx文件，最终达到我们所需的效果。

![4c5w0x.png](https://z3.ax1x.com/2021/09/26/4c5w0x.png)



### 1.3 插件安装

> 这里采用npm的方式来安装这四个插件，依次执行下面四条命令

```Node.js
npm install docxtemplater pizzip -S
```



```Node
npm install jszip-utils -S
```



```Node.js
npm install pizzip -S
```



```Node.js
npm install file-saver --save
```



### 1.4代码实现

> 引入所需的库

```javascript
import docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";
```



> 方法的具体实现

```javascript
 // 定义word模板中变量的赋值对象
let docxData = {
    	// 若表单填写了，则取表单填写的内容，反则赋空，避免生成word出现undefined
        remark: this.basicInfo.remark === undefined ? "" : this.basicInfo.remark,
        arrive: this.basicInfo.arrive === undefined ? "" : this.basicInfo.arrive,
        cause: this.basicInfo.cause === undefined ? "" : this.basicInfo.cause,
 };
// 读取并获得模板文件的二进制内容
JSZipUtils.getBinaryContent("ceshi.docx", function(error, content) {
    // ceshi.docx是模板。导出时，会根据此模板来导出对应的数据
    // 抛出异常
    if (error) {
        throw error;
    }
    // 创建一个PizZip实例，内容为模板的内容
    let zip = new PizZip(content);
    // 创建并加载docxtemplater实例对象
    let doc = new docxtemplater().loadZip(zip);

    // 设置模板变量的值
    doc.setData({
        ...docxData,
    });

    try {
        // 用模板变量的值替换所有模板变量
        doc.render();
    } catch (error) {
        // 抛出异常
        let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties,
        };
        console.log(JSON.stringify({ error: e }));
        throw error;
    }

    // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
    let out = doc.getZip().generate({
        type: "blob",
        mimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    // 将目标文件对象保存为目标类型的文件，并命名
    saveAs(out, "测试文件.docx");
});
```




**注意：模板文件的存放位置**

- 若使用**Vue-cli 3** 构建的项目，则将word模板文件放入**public文件夹下**即可，填写路径照上述代码所填


- 若使用**Vue-cli 2** 构建的项目，则将word模板文件放入**static文件夹下**即可，填写路径可用相对路径定位






-------

> 完成代码后，可能会遇到的问题

#### 图示

![4glUFH.png](https://z3.ax1x.com/2021/09/27/4glUFH.png)



> 出现此类状况一般有两种情况
>
> ① word模板文件没有放对位置，或代码中引用模板文件的路径不正确，或文件格式不正确
>
> ② 项目中引用了mock.js文件，由于其重写了XMLHttpRequest，导致插件寻找不到对应的方法




**解决方案**



> * 若是第一种情况，则找好对应的路径，修改即可。文件格式务必要使用docx结尾的后缀名模板
>
>   
>
> * 若是第二种情况，则可在main.js中找到 import mock.js 后，注释该行代码即可



![4gGfET.png](https://z3.ax1x.com/2021/09/27/4gGfET.png)



### 小结

> 使用前端的方式导出简单的word，docxtemplater不失为一个好的选择，但其有优势也有弊端
>
> 优点：
>
> * 使用方式简单
> * 使用word模板文件生成，避免繁杂地构建word内容
>
> 缺点：
>
> * 前端导出word，只适应数据量小的情况。如：导出当前页 ； 数据量增大后会卡死
> * docxtemplater的功能无疑是强大的，但免费的功能却只适应这种简单的模板，若欲解析html码，此类功能是需要收费的。
> * 引入过量的插件，可能会与别的插件产生冲突，可将此类功能交与后端处理





-------



## ② 后端实现

### 2.1 前言

> 倘若只是普通的word模板，前端的docxtemplater完全够用。奈何表单中存在富文本编辑器，我们知道，前端获取的富文本编辑器内容，是纯html代码。但又希望输出到word文档后，将其保留格式输出。docxtemplater这个功能是要收费的😭😭😭，网上查询大量的资料，也没有一个我想要的解决方案。直到在gitee上看到一个项目，解了我的燃眉之急。



### 2.2 原作者，上链接

> [原作者项目地址在这里](https://gitee.com/coreyjk/wordtools/tree/master)



### 2.3 主要框架及实现思路

> 后端框架：  [Apache POI](https://poi.apache.org/)
>
> Apache POI提供API给Java程序对Microsoft Office格式档案读和写的功能。



> 作者能够对富文本的html代码进行格式化解析，主要是封装的Html工具类，映射定义的word相关功能枚举类，再创建document添加元素，完成对富文本内容解析。虽然仅完成了一些标题、图片的解析，但完全足够使用了。🤳🤳🤳🤳

>导出的word依然是使用模板文件，区别于前端的模板文件，这里的模板文件中的变量使用 ${变量名}的方式命名

#### 图例

![4gjSHg.png](https://z3.ax1x.com/2021/09/27/4gjSHg.png)




**Html工具类**



![4gOZR0.png](https://z3.ax1x.com/2021/09/27/4gOZR0.png)




**word文档元素枚举**



![4gO1o9.png](https://z3.ax1x.com/2021/09/27/4gO1o9.png)




**word内容输出**

![4gXnfI.png](https://z3.ax1x.com/2021/09/27/4gXnfI.png)



### 总结

> 导出word的功能也仅仅是匆匆一用，并没有仔细研究，至于如何拓展更丰富的Html解析功能，后续大家可以一起探索一下，再次感谢原作者提供的代码。
>
> 其实在某些方面来说，使用后端确实比前端方便很多，各有利弊吧。😏


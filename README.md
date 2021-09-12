# 说明文档
A CLI to help you quickly build vue projects（学习自 Coderwhy老师）

如何安装？：

````
npm install lzrcli -g
````

### 一、创建项目

````
lzr create yourProjectName
````

执行命令后自动拉取项目模板、安装项目依赖、自动启动项目以及打开浏览器。

拉取的项目模板来自:

````
https://github.com/coderwhy/hy-vue-temp.git
````

vue项目模块已经帮你配置：

- 常用目录结构
- axios
- vue.config.js
- vuex
- vue-router

### 二、项目开发

项目开发提高三个功能：

- 创建Vue组件
- 创建Vue页面并配置路由
- 创建Vuex子模块

#### 1、创建Vue组件：

````
lzr addcpn yourComponentName #不指定路径默认保存到src/components下
lzr addcpn yourComponentName -d src/components/common #可以在-d后面指定放到具体文件夹
````



#### 2、创建Vue页面并配置路由

````
lzr addpage yourPageName #不指定路径默认保存到src/pages下
lzr addpage yourPageName -d src/views/home #可以在-d后面指定放到具体文件夹
````



#### 3、创建vuex子模块

````
lzr addstore YourVuexChildModuleName #不指定路径默认保存到src/store/modules下
lzr addstore YourVuexChildModuleName -d src/vuex/modules #可以在-d后面指定放到具体文件夹
````


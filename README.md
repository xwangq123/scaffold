# react-scaffold
一个基于 React/Redux 以及 Ant Design 的Web前端模板。

前端项目应该 fork 此库作为项目的代码库，记得修改 `package.json` 以及本 `README.md` 文件的内容。

## 开发

### 使用的库

环境基于 [create-react-app](https://github.com/facebookincubator/create-react-app) 搭建。

支持以下ES语法：
* 幂运算符：**  // 2 ** 3 = 2 * 2 * 2 = 8
* 数组展开符：...
* async/await 关键字
* 动态 import() 模块加载（以及模块代码分割） 

支持以下polyfill：
* Object.assign()
* fetch
* Promise
* [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)

### 目录结构

```
build     编译之后的静态文件目录
public    Web静态文件以及首页 index.html 文件的存放位置
src       开发源代码目录
```

### 命令

```
yarn start    在本机3000端口上运行开发用服务器并打开浏览器
yarn build    编译发布文件至 `build` 目录
yarn test     运行单元测试
```

### 访问后端

在 `package.json` 文件中有 `proxy` 属性的配置，所有从客户端发起的API请求会被自动代理到该地址，目前默认为 `http://localhost:8000` 。

### 代码风格

eslint 会在开发服务器启动时自动运行，请注意控制台中的警告并修正。未经修正的 eslint 警告无法通过CI流程。

项目会在 `git commit` 时自动运行 [prettier](https://github.com/prettier/prettier) 来对所有提交的代码进行强制风格设置，因此在提交时可能会略有延迟。

## 测试

* 测试使用 [jest](https://facebook.github.io/jest/) 框架；
* 使用 [enzyme](https://github.com/airbnb/enzyme) 测试React组件；
* 测试代码文件的后缀名应为 `.test.js`；
* 使用 `yarn test` 目录运行全部的单元测试。

## 部署

* 部署到正式环境的文件必须是 `yarn build` 后 `build` 目录内的产物。
* 有两种部署形式：
  * 与服务端产出物混合，部署在同一网站下；或：
  * 使用 nginx 之类的反向代理服务器，对前后端部署进行映射。

### 文件大小

* 服务端请启用 gzip 压缩以减少网络传输的大小。
* 可以使用 `yarn analyze` 来生成一份报告，以查看是哪个库占用了特别多的大小。"# scaffold" 

# webpack

## 目的

> 静态资源打包

![webpack](../assets/images/webpack.jpg)

## 设计思想

> 在自身提供打包构建能力的基础上通过各个构建节点的事件分发机制，使得用户在规定的loader和plugin规范下，通过订阅相应的事件完成差异的个性化构建。


### webpack
<mermaid>
graph TB
  filesys(文件系统) --配置文件--> chekcOptions(配置数据结构校验)
  subgraph webpack
    chekcOptions --配置数据--> defaultOptions(初始化默认值)
    defaultOptions --配置数据的context--> compiler(创建compiler)
    compiler --配置数据的infrastructureLogging--> nodeEnvironmentPlugin(创建并运行NodeEnvironmentPlugin)
    nodeEnvironmentPlugin --配置数据的plugins--> plugins(运行配置中的插件)
    plugins --> hookEnvironment(调用environment hook)
    hookEnvironment --> afterEnvironment(调用afterEnvironment hook)
    afterEnvironment --> webpackOptionsApply(根据配置运行对应的处理插件)
    webpackOptionsApply --> hasCb{是否有回掉函数}
    hasCb --是--> compilerWatch(执行watch)
    compilerWatch --> compilerRun(运行compiler)
    compilerRun --> return(返回compiler)
    hasCb --否--> return
  end
</mermaid>

### compiler.run
<mermaid>
graph TB
  subgraph compiler
    run(运行compiler) --> isRuning{是否在运行中}
    isRuning --是-返回运行中错误--> callBackErr(执行回调)
    isRuning --否--> hookBeforeRun(异步执行beforeRun hook)
    hookBeforeRun --> beforeRunErr{运行错误}
    beforeRunErr --是--> runingFalse(取消运行中状态)
    runingFalse --> hookFailed(调用failed钩子)
    hookFailed --> callBackErr(调用回调抛出错误)
    beforeRunErr --否--> hookRun(调用Run钩子)
    hookRun --> runErr{run钩子运行是否报错}
    runErr --是--> hookFailed
    runErr --否--> readRecords(读取records文件)
    readRecords --> readRecordsErr{读取records文件是否异常}
    readRecordsErr --是--> hookFailed
    readRecordsErr --否--> compile(调用compile执行编译)
    compile --> onCompiled(执行文件输出操作)
    onCompiled --> return(结束)
    callBackErr --> return
  end
</mermaid>


### 文件输出操作(onCompiled)

<mermaid>
onCompiled(开始)-->compilErr{是否编译错误}
compilErr --是--> hookFailed(调用failed钩子)
hookFailed --> callBackErr(调用回调抛出错误)
callBackErr --> return(结束)
compilErr --否--> hookShouldEmit(调用shouldEmit钩子)
hookShouldEmit --> shouldEmit{是否应该Emit输出}
shouldEmit --否--> 
</mermaid>


## 工作流程

<mermaid>
graph LR
config(配置loader plugin和输入输出等) --> compiler(compiler初始化webpack环境配置) 
compiler --> compilation(compilation开启一次构建)
compilation --热更新--> compilation
</mermaid>

## 可解决的问题

1. css预处理语言编译
2. css注入
3. js压缩混淆
4. js模块化构建
5. 代码编写风格统一
6. 代码简单错误排除
7. 静态资源缓存
8. 前后端联调
9. 单元测试问题
10. 功能测试问题

## 使用webpack以后引入的问题
  
1. 包大小过大的问题
2. 非编译文件如何注入的问题
3. 打包时间过长的问题
4. 实现效果快速验证问题


## 实现细节

1. [生命周期](./life_cycle.md)
2. [tapable](./tapable.md)
3. [hrm](./hrm.md)
4. [module、chunk和bundle](./module_chunk_bundle.md)
5. [插件开发](./plugins.md)
6. [loader开发](./loader.md)
7. [loader执行顺序](./loader.md)
8. [分包](./split.md)
9. [hash](./hash.md)
10. [tree shaking](./tree_shaking.md)
11. [UML](./uml.md)
12. [mainfest]()

## 常用插件

* [style-loader](https://www.npmjs.com/package/style-loader)：将js的css资源依赖插通过style标签插入到dom中。
* [css-loader](https://www.npmjs.com/package/style-loader)：解析js文件的css资源依赖。
* [file-loader](https://www.npmjs.com/package/style-loader)：解析文件依赖，将对应文件拷贝到输出目录，同时修改引用路径。
* [html-loader](https://www.npmjs.com/package/html-loader)：解析html文件依赖，将html文件解析为html字符串引入。
* [csv-loader](https://www.npmjs.com/package/csv-loader)：解析csv文件依赖，将html文件解析为html字符串引入。
* [xml-loader](https://www.npmjs.com/package/xml-loader)：解析html文件依赖，将html文件解析为html字符串引入。

* [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)：html模板解析，资源注入插件。
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)：目录清除插件。
* [mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)：css样式抽取插件，并注入link标签
* [webpack-manifest-plugin](https://www.npmjs.com/package/webpack-manifest-plugin)：提取mainfest映射插件。

## 问题

1. 太重。工作机制复杂，需要深入了解其工作机制才能够掌握其配置方式。
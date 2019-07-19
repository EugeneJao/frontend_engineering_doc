# [grunt](https://www.gruntjs.net)

## 目的
> 解决工具自动化问题。

## 设计思想
> 提供任务注册机制、统一插件入参规范。

<mermaid>
graph LR
grunt任务--配置参数-->deal
subgraph grunt插件
  filesys(文件系统) --文件-->filein
  filein(文件输入) --文件内容--> deal(处理逻辑)
  deal --文件内容--> fileout(文件输出)
  fileout --> filesys
end
</mermaid>

## 工作流程

<mermaid>
graph LR
initConfig(initConfig初始化插件参数) --> loadNpmTasks(loadNpmTasks加载插件)
loadNpmTasks --> registerTask(registerTask注册任务)
</mermaid>

## 实现细节

1. 通过[插件模板](https://github.com/gruntjs/grunt-init-gruntplugin)这种弱约束来呼吁使用gulp内部统一的API实现插件。
2. 顶层设计的缺陷，插件之间通信只能靠底层io读取文件系统文件实现。


## 常用插件(contrib为grunt官方出品)

* [grunt-browserify](https://www.npmjs.com/package/grunt-browserify)：用于将commonjs依赖规范工程转换为浏览器可运行代码。
* [grunt-contrib-clean](https://www.npmjs.com/package/grunt-contrib-clean)：删除文件或文件夹。
* [grunt-contrib-connect](https://www.npmjs.com/package/grunt-contrib-connect)：启动静态资源服务器。
* [grunt-contrib-copy](https://www.npmjs.com/package/grunt-contrib-copy)：拷贝文件。
* [grunt-contrib-htmlmin](https://www.npmjs.com/package/grunt-contrib-htmlmin)：压缩html文件。
* [grunt-contrib-jshint](https://www.npmjs.com/package/grunt-contrib-htmlmin)：js代码校验。
* [grunt-contrib-uglify](https://www.npmjs.com/package/grunt-contrib-uglify)：压缩和混淆js文件
* [grunt-eslint](https://www.npmjs.com/package/grunt-eslint)：es代码格式校验。
* [grunt-injector](https://www.npmjs.com/package/grunt-injector)：html资源注入，如css和js。
* [grunt-lesslint](https://www.npmjs.com/package/grunt-lesslint)：less代码格式化校验。
* [grunt-karma](https://www.npmjs.com/package/grunt-karma)：单元测试

## 问题

1. 无法统一对工具的处理性能做进一步的优化。
2. 插件间通信只能靠用户自己实现，难以扩展和优化。
3. 频繁访问文件系统io，性能较差。
4. 难以实现分包懒加载。
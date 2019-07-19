# [gulp](https://www.gulpjs.com.cn)

## 目的
> 为了解决grunt的问题。1.不易扩展问题，2.频繁io问题，3.插件没有通信规范问题。

## 设计思想
> 封装文件流的输入输出，统一内部插件的通信规范，将具体代码的转换处理交由各个插件负责。同时借用了unix的管道思想来实现插件间通信，提高处理效率。
<mermaid>
graph LR
filesys[文件系统] --文件--> src
subgraph gulp
src(src文件输入) --Vinyl_files_stream--> pipe(pipe管道)
pipe --Vinyl_files_stream--> plugins(插件)
plugins --Vinyl_files_stream--> pipe
pipe --Vinyl_files_stream--> dest(dest输出)
end
dest --文件-->filesys
</mermaid>


## gulp工作流程

<mermaid>
graph LR
task(task创建任务) --> src(获取文件)
src(src获取文件) --输出Vinyl_files_stream--> pipe
pipe --输出Vinyl_files_stream--> plugin1(插件1) 
plugin1(插件1) --输出Vinyl_files_stream--> pipe
pipe --输出Vinyl_files_stream--> plugin2(插件2) 
plugin2(插件2) --输出Vinyl_files_stream--> pipe
pipe --输出Vinyl_files_stream--> pluginn(插件n)
pluginn(插件n) --输出Vinyl_files_stream--> pipe
pipe --输出Vinyl_files_stream--> dest输出文件
</mermaid>

## 实现细节
1. [Vinyl files stream](https://github.com/gulpjs/vinyl) - 继承自nodejs的stream类
2. pipe - 实现nodejs的stream.Readable类的pipe接口
3. src支持[glob](https://github.com/isaacs/node-glob)语法


## 常用插件

* [gulp-connect](https://www.npmjs.com/package/gulp-connect)：用于创建静态资源服务器，供调试使用。
* [gulp-html-replace](https://www.npmjs.com/package/gulp-html-replace)：用于想html中插入指定的资源，如css、js等
* [gulp-htmllint](https://www.npmjs.com/package/gulp-htmllint)：用于校验html的编码格式
* [gulp-less](https://www.npmjs.com/package/gulp-less)：用于预处理less编译
* [gulp-requirejs](https://www.npmjs.com/package/gulp-requirejs)：继承了r.js，用于编译requirejs工程。
* [gulp-stylelint](https://www.npmjs.com/package/gulp-stylelint)：样式语言格式校验，包含css、less、sass等。
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)：用于代码混淆和压缩。
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)：用于图片压缩。
* [gulp-eslint](https://www.npmjs.com/package/gulp-eslint)：用于es代码格式检查。
* [gulp-jest](https://www.npmjs.com/package/gulp-jest)：用于单元测试。
* [gulp-browserify](https://www.npmjs.com/package/gulp-browserify)：用于将commonjs依赖规范工程转换为浏览器可运行代码。
* [gulp-umd](https://www.npmjs.com/package/gulp-umd)：用于模块导出，如果有指定的全局对象，则绑定在全局对象下。

## 问题

* 难以解决分包懒加载的问题。
# module、chunk、bundle

##  modules

> 简单来说webpack中的模块就是项目工程中的文件，包括js文件、图片文件、css文件、数据文件等等。可以通过es6的import、commonjs 的require、amd的define和require、css/sass/less的@import、样式中的url()、html中的<img src="">。
> webpack通过loader来支持和处理各个模块，目前webpack社区支持如下类型语言模块的支持

1. [CoffeeScript](http://coffeescript.org/)
2. [TypeScript](https://www.typescriptlang.org/)
3. [ESNext (Babel)](https://babeljs.io/)
4. [Sass](http://sass-lang.com/)
5. [Less](http://lesscss.org/)
6. [Stylus](http://stylus-lang.com/)

## chunk

> 是webpack在编译过程中的专有概念，实质是一个或多个module的集合，在webpack内部分为entry chunk和child chunk两个类型。

## bundle
    
> 就是最终的输出文件、一个bundle对应一个或多个chunk。


## 三者关系

@startuml
module "1" --* "n" chunk : 组成
chunk "1" --* "n" bundle : 组成
@enduml
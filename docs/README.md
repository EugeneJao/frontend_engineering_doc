# 前端工程化


## 概念

### 网络定义

1. 前端工程化是使用软件工程的技术和方法来进行前端项目的开发、维护和管理

### 什么叫工程

1. 示例： 建一个小灶，建一栋摩天大楼
2. 活动页
3. 公司官网主页
4. 大型中台，xxxx系统开发人数

### 需要解决的问题

1. 依赖管理 - 变量命名冲突
2. 代码压缩混淆
3. 浏览器静态资源请求优化-图片压缩，tree-shaking、css注入
4. 代码格式校验
5. 前后端联调支持
6. 按需加载支持
7. 开发环境调试支持
8. 代码错误定位
9. 文档生成
10. 单元测试
11. 自动化功能测试
12. 部署问题
13. 样式管理-预处理less、sass、stylus、autoprefixer
14. es新特性使用--代码转换

## 发展历史

### 鸿蒙时期

#### 时间跨度

  时间(requirejs大量使用的时间)

### 开发特点

1. 浏览器只能通过html标签做资源引用

#### 引用管理-模板语言、服务端渲染

1. java-freemaker、velocity、jsp

```ftl

<html>
<head>
  <title>Welcome!</title>
</head>
<body>
  <#-- Greet the user with his/her name -->
  <h1>Welcome ${user}!</h1>
  <p>We have these animals:
  <ul>[BR]
  <#list animals as animal>
    <li>${animal.name} for ${animal.price} Euros
  </#list>
  </ul>
</body>
</html>
```

```jsp

<html>
  <head>
          <title>第一个 JSP 程序</title>
  </head>
  <body>
          <%
                out.println("Hello World！");
          %>
  </body>
</html>

```

```vm

#macro(input $title $id)
<div>
  <label for="$id">$title</label>
  <input type="text" id="$id" name="$id"/>
</div>
#end
## 生成select表单元素区域的宏
#macro(select $title $id $items)
<div>
  <label for="$id">$title</label>
  <select id="$id" name="$id">
## VTL指令紧贴左侧才能确保结果的排版正常（不会有多余空格）
#foreach($key in $items.keySet())
    <option value="$key">$items.get($key)</option>
#end
  </select>
</div>
#end

```

2. php

```php
<!DOCTYPE html>
<html>
<body>

  <?php
  echo "我的第一段 PHP 脚本！";
  ?>

</body>
</html>
```


3. ruby on rails-rhtml

```rhtml
  <div class=""class="form">
    <%= error_messages_for 'user' %>
    <fieldset>
    <legend>请输入用户信息</legend>
      <% form_for :user do |form| %>
      Name: <%= form.text_field :username, :size => 30      %>
      Password: <%= form.password_field :password, :size => 30 %>
      ConfirmPassword: <%= form.password_field :password_confirmation, :size => 30 %>
      <%= submit_tag "注册", :class => "submit" %>
      <% end %>
    </fieldset>
  </div>
```

### 前nodejs时期

#### 时间跨度

2011.11.19(requirejs v1.0发布时间)-2016.04.04(grunt v1.0发布时间)

#### 开发特点

1. amd-requirejs
   
```javascript

define(['jquery'],function($){  //注意模块的写法  
    //1,define intenal variable area//变量定义区  
    var myModule = {}; //推荐方式  
    var moduleName = "work module 01";  
    var version = "1.0.0";  
      
    //2,define intenal funciton area//函数定义区  
    var loadTip = function(tipMsg, refConId){  
    };  
      
    //3,should be return/output a object[exports/API] if other module need  
    //如有需要暴露(返回)本模块API(相关定义的变量和函数)给外部其它模块使用  
    myModule.moduleName = moduleName;  
    myModule.version = version;  
    myModule.loadTip = loadTip;   
    return myModule;
});  

```

3. cmd-seajs

```javascript
define(function(require, exports){
    require.async(['aModule','bModule'],function(a,b){  // 异步加载多个模块，在加载完成时，执行回调
    a.func();
    b.func();
    });
    exports.varName01 = 'varValue';  // 对外提供 varName01 属性    
    exports.funName01 = function(p1,p2){};  // 对外提供 funName01 方法
});

```

4. 编辑器插件辅助开发-jslint、uglify、sass、less、stylus、babel、autoprefixer、iamgemin、htmlmin、csslint、htmllint

### nodejs时期

#### 时间

2016.04.04(grunt v1.0发布时间)-现在

#### 开发特点

1. commonjs

```javascript
//example.js
var n = 1;
function sayHello( name ){
    var name = name || "Tom";
    return "Hello~"+name
}
function addFn(val){
    var val = val.x+val.y;
    return val
}
module.exports ={
    n:n,
    sayHello:sayHello,
    addFn:addFn
}


// main.js
var example = require('./example.js');
var addNum = {
    "x":10,
    "y":5
}
console.log( example )//查看example输出的对外模块接口；
console.log( example.n )//1;
console.log( example.sayHello("Jack") )// "Hello~ Jack";
console.log( example.addFn(addNum) ) //15;

```

2. grunt
3. gulp
4. webpack

#### 后nodejs时期



## 网络环境

内网
<mermaid>
  graph LR
  browser(浏览器) --1.请求proxy列表--> firewall(防火墙)
  firewall --2.请求proxy列表--> wlan_gateway(网关)
  wlan_gateway --3.请求proxy列表--> pac(pac服务器)
  pac -.4.返回proxy列表.-> wlan_gateway
  browser --7.请求数据--> firewall
  firewall --8.请求数据--> wlan_gateway
  wlan_gateway --9.请求数据--> proxy(代理服务器)
  wlan_gateway --9.请求数据 --> neibour(局域网电脑)
  proxy --10.请求数据--> Internet(外部网络)
</mermaid>

外网
<mermaid>
graph LR
browser(浏览器) --1.请求数据--> firewall(防火墙)
firewall --2.请求数据--> pingannet_gateway(网关)
pingannet_gateway --3.请求数据--> Internet(外部网络)
pingannet_gateway --5.请求数据 --> neibour(局域网电脑)
</mermaid>

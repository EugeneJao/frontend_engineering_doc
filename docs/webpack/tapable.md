# tapable


## Waterfall
<mermaid>
graph LR
fn1(tapped function1) --returns--> fn2(tapped function 2)
fn2 --returns--> fn3(tapped function 3)
fn3 --returns--> fn4(...)
fn4 --returns-->fnn(tapped function n)
</mermaid>

## Bail
<mermaid>
graph LR
subgraph normalFlow
  fn1(tapped function1) -.-> fn2(tapped function 2)
  fn2 -.-> fn3(tapped function 3)
  fn3 -.-> fn4(...)
  fn4 -.-> fnn(tapped function n)
end
fn1 --returns--> returns{返回值是否为undefined}
returns --是--> fn2
fn2 --returns--> returns
returns --是--> fn3
fn3 --returns--> returns
returns --是--> fn4
fn4 --returns--> returns
returns --是-->fnn
fnn --> return(结束并返回结果)
returns --否--> return
</mermaid>

## Loop
<mermaid>
graph LR
subgraph normalFlow
  fn1(tapped function1) -.-> fn2(tapped function 2)
  fn2 -.-> fn3(tapped function 3)
  fn3 -.-> fn4(...)
  fn4 -.-> fnn(tapped function n)
end
fn1 --returns--> returns{返回值是否为undefined}
returns --是--> fn2
fn2 --returns--> returns
returns --是--> fn3
fn3 --returns--> returns
returns --是--> fn4
fn4 --returns--> returns
returns --是-->fnn
fnn --> fn1
returns --否--> done(结束)
</mermaid>


## Sync
<mermaid>
graph LR
  fn1(tapped function1) --> fn2(tapped function 2)
  fn2 --> fn3(tapped function 3)
  fn3 --> fn4(...)
  fn4 --> fnn(tapped function n)
  fnn --> done(结束可能返回结果)
</mermaid>

## AsyncSeries

<mermaid>
graph TB
  fn1(tapped function1) --> fn1Res{fn1执行成功}
  fn1Res --是--> fn1Cb(fn1执行成功回调)
  fn1Res --否--> throw(抛出错误)
  fn1Cb --> fn2(tapped function 2)
  fn2 --> fn2Res{fn2执行成功}
  fn2Res --是--> fn2Cb(fn2执行成功回调)
  fn2Res --否--> throw(抛出错误)
  fn2Cb --> fn3(tapped function 3)
  fn3 --> fn3Res{fn3执行成功}
  fn3Res --是--> fn3Cb(fn3执行成功回调)
  fn3Res --否--> throw(抛出错误)
  fn3Cb --> fn4(tapped function ...)
  fn4 --> fn4Res{fn4执行成功}
  fn4Res --是--> fn4Cb(fn4执行成功回调)
  fn4Res --否--> throw(抛出错误)
  fn4Cb --> fnn(tapped function n)
  fnn --> fnnRes{fnn执行成功}
  fnnRes --是--> fnnCb(fnn执行成功回调)
  fnnRes --否--> throw(抛出错误)
  fnnCb --> done(结束)
  throw --> done(结束)
</mermaid>

## AsyncParallel
<mermaid>
graph LR
  fn1(tapped function1) --> fn2(tapped function 2)
  fn2 --> fn3(tapped function 3)
  fn3 --> fn4(...)
  fn4 --> fnn(tapped function n)
  fnn --> lookup(扫描任务队列)
  subgraph js引擎异步机制
    lookup --> hasMicroTasks{是否有micro tasks}
    hasMicroTasks --是--> excMicroTask(执行micro task)
    excMicroTask --> taskCb(执行回调)
    taskCb --> lookup
    hasMicroTasks --否--> hasMacroTasks(是否有macro tasks)
    hasMacroTasks --是--> excMacroTask(执行macro task)
    excMacroTask --> taskCb
    hasMacroTasks --否--> allCBExc{所有fn的回调都执行完毕}
    allCBExc --否--> lookup
  end
  allCBExc --是--> done(结束)
</mermaid>

## tapable 使用流程
<mermaid>
graph TB
hook(new一个 Hook) --> tap(使用Hook的tap方法注册钩子)
hookmap(传入一个Hook的工厂函数-new一个HookMap) --> for(调用HookMap的for方法获取Hook)
for --> tap
tap --> call(调用Hook的call方法生成最终处理函数)
call --> exec(在合适的时机执行处理函数-入参如Hook实例化时所示)

</mermaid>

## hook生成逻辑
<mermaid>
graph TB
 factory(传入一个Hook的工厂函数)--> HookMap(new一个HookMap)
 HookMap--> for(通过HookMap的for方法执行Hook工厂函数)
 for --> hook(获得Hook实例)
 hook --> call(调用Hook的call方法)
 call --> createCompileDelegate(call方法会调用createCompileDelegate方法)
 createCompileDelegate --> lazyCompileHook(最终会返回一个lazyCompileHook的方法)
 lazyCompileHook --> exec(lazyCompileHook在某个恰当的机会执行)
 exec --> _createCall(执行时会调用_createCall)
 _createCall --> compile(调用compile返回一个执行函数-不同的hook子类有不同的compile实现)
</mermaid>

### SyncHook compile调用逻辑
<mermaid>
graph TB
SyncHookCodeFactory(SyncHook内部声明一个继承自HookCodeFactory的子类) --> factory(SyncHook内部new一个SyncHookCodeFactory工厂类实例)
factory --> compile(发生compile调用)
compile --> setup(调用工厂类示例的setup方法-提取SyncHook中taps属性中的执行函数fn- taps会在调用tap方法的时候被注入)
setup --> create(执行最终的hooks执行函数创建)
create --> init(初始化参数-基本没做啥-就是将入参args进行一次浅拷贝)
init --> newFunction(通过构造函数来创建最终执行函数-不同hook的函数字符串模板不同-函数形参即为new Hook所传的字符串数组内容)
</mermaid>


### HookCodeFactory

#### SyncHook compile最终返回的函数模板

```javascript
// !needContext
var _context;
// needContext
var _context = {};
var _x = this._x;
// interceptors.length > 0
var _taps = this.taps;
var _interceptors = this.interceptors;
var _tap${n-m} = _taps[${n-m}]
_interceptors[${n-m}].tap(_context, _tap${n-m})
var _fn${n-m} = _x[${n-m}]
_fn${n-m}(_context, _err${n-m} => {
  if(_err${n-m}) {
    throw _err${n-m}
  } else {
    var _tap${n-m + 1} = _taps[${n-m + 1}]
    _interceptors[${n-m + 1}].tap(_context, _tap${n-m + 1})
    var _fn${n-m + 1} = _x[${n-m + 1}]
    _fn${n-m + 1}(_context, _err${n-m + 1} => {
      if(_err${n-m + 1}) {
        throw _err${n-m + 1}
      } else {
        ...
      }
    });
  }
});


```

### AsyncSeriesHook compile

```javaScript
"use strict";
var _context = {};
var _x = this._x;
var _taps = this.taps;
var _interceptors = this.interceptors;
_interceptors[${idx}].call(_context, generator, generatorOptions)

function _next${n-m}() {
  var _tap${n-m+1} = _taps[${n-m+1}]
  _interceptors[${n-m+1}].tap(_context, _tap${n-m+1})
  var _fn${n-m+1} = _x[${n-m+1}]
  _fn${n-m+1}(_context, _err${n-m+1} => {
    if(_err${n-m+1}) {
      throw _err${n-m+1}
    } else {
      _next${n-m+1}()
    }
  });
}

...

function _next0() {
  var _tap1 = _taps[1]
  _interceptors[1].tap(_context, _tap1)
  var _fn1 = _x[1]
  _fn1(_context, _err1 => {
    if(_err1) {
      throw _err1
    } else {
      _next1()
    }
  });
}

var _tap1 = _taps[0]
  _interceptors[0].tap(_context, _tap0)
  var _fn0 = _x[0]
  _fn0(_context, _err0 => {
    if(_err0) {
      throw _err0
    } else {
      _next0()
    }
  });

```
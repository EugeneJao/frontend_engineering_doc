# webpack生命周期

## 实现

> webpack中是通过tapable来暴露各个生命周期的hook的，还可以通过tapable深层次定制自己所需的生命周期钩子。webpack内置的生命周期钩子如下：

## 分类

### compiler模块（编译配置初始化）

1. entryOption：在初始化完entry配置项后触发该钩子
2. afterPlugins：设置完初始插件之后，执行插件。
3. afterResolvers：resolver（resolve属性） 安装完成之后，执行插件
4. environment：environment 准备好之后，执行插件。

![生命周期](../assets/images/webpack_lifecycle.jpg);




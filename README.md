# online_doc
> 基于vuepress的文档工具

## 使用方法

```bash
#先确保安装好nodejs和npm
#确保npm的prefix（全局包安装路径）已经设置到环境变量中
#通过以下指令可以查询npm的prefix（全局包安装路径）
npm config get prefix

#全局安装yarn
npm i yarn -g

#通过yarn安装项目依赖包
yarn install

#通过以下指令在开发环境运行文档
npm run docs:dev

#通过下命令编译生产部署包
npm run docs:build

```

## 目录结构

```text
online_doc
  |- docs // 源码目录
    |- .vuepress // vuepress配置文件目录
      |- components // vuepress-theme-cool主题vue组件扩展文件夹
        |- mermaid.vue // mermaid组件扩展定义文件
      |- config.js // vuepress运行配置文件
    |- demo // 示例文件目录
    |- README.md // 主页文件
  |- node_modules // node依赖包目录
  |- .gitignore // git检查忽略定义文件
  |- package.json // npm包依赖配置文件
  |- yarn.lock // yarn项目依赖包版本锁定文件

```
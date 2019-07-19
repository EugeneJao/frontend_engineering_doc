module.exports = {
  base: '',
  title: '前端工程化',
  description: '前端工程化概念、作用、发展历史和未来展望',
  theme: 'cool',
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-katex"));
      md.use(require("markdown-it-plantuml"))
    }
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '示例',
        link: '/demo/'
      },
      {
        tetx: 'gulp',
        link: '/gulp/'
      },
      {
        tetx: 'grunt',
        link: '/grunt/'
      },
      {
        tetx: 'webpack',
        link: '/webpack/'
      },
    ],
    sidebar: [
      {
        title: '首页',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '示例',
        collapsable: false,
        children: [
          '/demo/',
          '/demo/md_base',
          '/demo/graph',
          '/demo/charts',
          '/demo/math'
        ]
      },
      {
        title: 'grunt',
        collapsable: false,
        children: [
          '/grunt/'
        ]
      },
      {
        title: 'gulp',
        collapsable: false,
        children: [
          '/gulp/'
        ]
      },
      {
        title: 'webpack',
        collapsable: false,
        children: [
          '/webpack/'
        ]
      },
    ],
  }
};

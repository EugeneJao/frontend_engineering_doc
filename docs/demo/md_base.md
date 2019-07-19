# markdown基本语法

## 链接

> 语法

以如下的文件结构为例
```text
.
├─ README.md
├─ foo
│  ├─ README.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ README.md
   ├─ three.md
   └─ four.md
```
```markdown
[Home](/) <!-- 跳转到根部的 README.md -->
[foo](/foo/) <!-- 跳转到 foo 文件夹的 index.html -->
[foo heading anchor](/foo/#heading) <!-- 跳转到 foo/index.html 的特定 anchor 位置 -->
[foo - one](/foo/one.html) <!-- 具体文件可以使用 .html 结尾 -->
[foo - two](/foo/two.md) <!-- 也可以用 .md -->
```

> 效果

[Home](/)
[foo](/foo/)
[foo heading anchor](/foo/#heading)
[foo - one](/foo/one.html)
[foo - two](/foo/two.md)

## 表格

> 语法

```markdown
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

> 效果

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

## Emoji表情

> 语法

```markdown

:tada: :100:

```

> 效果

:tada: :100:

## 目录

> 语法

```markdown

[[toc]]

```

> 效果

[[toc]]

## 自定义容器

> 语法

```markdown

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

```

> 效果

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## 代码块

> 语法

````markdown
```js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

> 效果

``` js
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### 代码块中的行高亮

> 语法

````markdown

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

````

> 效果

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## 导入代码段

> 语法

```markdown

<<< @/node_modules/arr-diff/index.js{16}

```

> 效果

<<< @/node_modules/arr-diff/index.js{16}

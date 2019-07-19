# 统计图

## 柱状图

> 示例代码

```html

<bar-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></bar-chart>
<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>

```

> 示例

<bar-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></bar-chart>
<column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>

## 饼图

> 示例代码

```html

<pie-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></pie-chart>

```

> 示例

<pie-chart :data="[['Assignments', 10], ['Midterm', 35], ['Final', 55]]"></pie-chart>

## 面积图

> 示例代码

```html

<area-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></area-chart>

```

> 示例

<area-chart :data="{'2017-01-01': 11, '2017-01-02': 6}"></area-chart>

## 散点图

> 示例代码

```html

<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>

```

> 示例

<scatter-chart :data="[[174.0, 80.0], [176.5, 82.3]]" xtitle="Size" ytitle="Population"></scatter-chart>

## 折线图

> 示例代码

```html

<line-chart :data=" [{name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},{name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}]" />

```

> 示例

<line-chart :data=" [{name: 'Workout', data: {'2017-01-01': 3, '2017-01-02': 4}},{name: 'Call parents', data: {'2017-01-01': 5, '2017-01-02': 3}}]" />
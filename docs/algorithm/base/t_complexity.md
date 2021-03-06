---
mathjax:
  presets: '\def\lr#1#2#3{\left#1#2\right#3}'
---

## 时间复杂度
相同大小的不同输入值仍可能造成算法的运行时间不同，因此我们通常使用算法的最坏情况复杂度，记为 T(n) ，定义为任何大小的输入 n 所需的最大运行时间。

## 大 O 表示法
>用一个大O，在其括号()中，用另一个函数来描述原来的函数的数量级的渐进上界

时间复杂度常用大 O 符号表述，不包括这个函数的低阶项和首项系数。使用这种方式时，时间复杂度可被称为是渐近的，亦即考察输入值大小趋近无穷时的情况。

例如: $$T(n) = 4n^2 - 2n + 2 = O(n^2)$$ 

## 常见的时间复杂度
### 常数 
$$O(1)$$
```js
a++;
```

### 对数 
$$O(\log n)$$
```js
let count = 1;
while(count < n)
{
  count = count*2;
}

```
### 线性
$$O(n)$$
```js
for(let i = 0; i < n; i++) {
  ...
}
```

### 平方
$$O(n^2)$$
```js
for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++) {
    ...
  }
}
```

### 指数
$$O(2^n)$$

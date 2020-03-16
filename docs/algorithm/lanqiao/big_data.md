## 大数运算
由于编程语言提供的基本数值数据类型表示的数值范围有限，不能满足较大规模的高精度数值计算，因此需要利用其他方法实现高精度数值的计算，于是产生了大数运算。大数运算主要有加、减、乘三种方法。

在编程处理这类问题时，一般采用数组或者 arraylist 表示每位数字
### 阶乘
BASIC-30	阶乘计算
### 加法
BASIC-29	高精度加法
### 进制转换
BASIC-11 十六进制转十进制  
BASIC-10	十进制转十六进制  
BASIC-12	十六进制转八进制  


## BigInteger、BigDecimal
java.math.BigInteger就是用来表示任意大小的整数。BigInteger内部用一个int[]数组来模拟一个非常大的整数。
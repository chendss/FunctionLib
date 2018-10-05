# 函数库项目

## JavaScript

### debug

-   `log` 打印函数

### Object - objectTools

-   `deepCopy` 深度复制 js 的对象
-   `chainObject` 链式对象生成函数
-   `isNaN` 判断是否为 NaN
-   `type` 判断元素的正确类型
-   `typeZh` 判断元素的正确类型 返回值是中文
-   `checkParameter` 检查传入的参数是否有空值
-   `shallowCopy` 浅度复制对象
-   `isEqualArray` 判断两个数组是否相等
-   `isEqualObject` 判断两个对象是否相等
-   `isEqual` 判断两个元素是否相等

### Array - arrayTools

-   `anyToArray` 将任意参数变成数组
-   `chunk` 分割数组
-   `concatFront` 将数组合并目标数组前
-   `intersection` 返回两个数组的交集
-   `isIntersection` 判断两个数组是否有交集
-   `isSetEquality` 判断两个集合是否相等
-   `flattenDeep` 扁平化数组

### String - stringTools

-   `findCount` 获得字符串里关键字的数量

### Time - time

-   `runTime` 计算同步函数执行时间
-   `toRelativeTime` 返回友好时间 （xx 之前、刚）

### Dom 操作 - dom

-   `q` 根据选择器获得一个匹配的 dom 对象
-   `qs` 根据选择器获得所有匹配的 dom 对象
-   `bindClick` 绑定该选择器匹配的所有 DOM 对象的 click 事件
-   `bindInput` 绑定该选择器匹配的所有 DOM 对象的 input 事件

### http 相关工具 - httpTools

-   `param` 将对象转化成 url 查询字符串

### 业务需求（难以分类） - business

-   `rangSymbol` 范围转文字（[0,5] 5x 以下）

### 校验 - check

-   `checkCard` 校验身份证是否合法

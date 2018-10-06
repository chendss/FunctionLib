# 函数库项目

## JavaScript

### debug

-   `log` 打印函数

### 参数相关处理 - paramsTools

-   `isEqualAll` 批量判断第一个值是否与其他参数相等
-   `isFalse` 判断是否为假值
-   `checkParameter` 检查传入的参数是否有空值
-   `paramsIncludesAll` 判断其他参数是否[都]在第一个参数（数组）里
-   `paramsIncludes` 判断其他参数是否在第一个参数（数组）里,只要满足一个即可

### Object - objectTools

-   `deepCopy` 深度复制 js 的对象
-   `chainObject` 链式对象生成函数
-   `chainObjectMultiple` 链式对象生成 多个键赋值
-   `chainValue` 链式取得对象的值
-   `chainValueList` 取得链式对象的值 存在数组里或者单个值
-   `isNaN` 判断是否为 NaN
-   `type` 判断元素的正确类型
-   `typeZh` 判断元素的正确类型 返回值是中文
-   `checkParameter` 检查传入的参数是否有空值
-   `shallowCopy` 浅度复制对象
-   `isEqual` 判断两个元素是否相等
-   `deepMerge` 合并多个元素，兼容数组与对象

### Array - arrayTools

-   `anyToArray` 将任意参数变成数组
-   `chunk` 分割数组
-   `compact` 过滤数组里的假值
-   `concatFront` 将数组合并目标数组前
-   `intersection` 返回两个数组的交集
-   `isIntersection` 判断两个数组是否有交集
-   `isSetEquality` 判断两个集合是否相等
-   `flattenDeep` 扁平化数组
-   `arrayDefault` 生成一个带默认值的数组
-   `len` 返回数组长度，如果不是数组则返回 0

### String - stringTools

-   `findCount` 获得字符串里关键字的数量
-   `format` 类似 py 的 format 函数
-   `shift` 将关键字插入字符串前面

### Time - time

-   `runTime` 计算同步函数执行时间
-   `toRelativeTime` 返回友好时间 （xx 之前、刚）
-   `nowTime` 返回当前时间 eg: '2018-10-06'
-   `localeTime` utc 时间转本地时间

### Dom 操作 - dom

-   `q` 根据选择器获得一个匹配的 dom 对象
-   `qs` 根据选择器获得所有匹配的 dom 对象
-   `bindClick` 绑定该选择器匹配的所有 DOM 对象的 click 事件
-   `bindInput` 绑定该选择器匹配的所有 DOM 对象的 input 事件
-   `windowScrollTop` 获得滚动条位置

### http 相关工具 - httpTools

-   `param` 将对象转化成 url 查询字符串

### 业务需求（难以分类） - business

-   `rangSymbol` 范围转文字（[0,5] 5x 以下）

### 校验 - check

-   `checkCard` 校验身份证是否合法
-   `checkPhone` 检查手机号是否合法
-   `checkEmail` 检查邮箱是否合法
-   `regularDict` 不是一个函数，是个字典，含有库里能验证的类型

### 数学业务库 - mathTools

-   `isSection` 判断是否在这个区间内

### 函数调用相关 - function

-   `asyncCall` 同步调用判断函数，全部为 true 时返回 ture

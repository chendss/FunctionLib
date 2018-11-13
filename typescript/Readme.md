# 函数库项目

## JavaScript

### debug

-   `log` 打印函数

### 参数相关处理 - paramsTools

-   `isEqualAll` 批量判断第一个值是否与其他参数相等
-   `isFalse` 判断是否为假值
-   `checkParameter` 检查传入的参数是否有空值
-   `paramsEvery` 判断其他参数是否[都]在第一个参数（数组）里
-   `paramsSome` 判断其他参数是否在第一个参数（数组）里,只要满足一个即可
-   `three` 三元表达式的函数形式

### Object - objectTools

-   `deepCopy` 深度复制 js 的对象
-   `shallowCopy` 浅度复制对象
-   `chainObject` 链式对象生成函数
-   `chainObjectMultiple` 链式对象生成器 多个键赋值
-   `chainValue` 链式取得对象的值
-   `chainValueList` 取得链式对象的值 存在数组里或者单个值
-   `isNaN` 判断是否为 NaN
-   `type` 判断元素的正确类型
-   `typeZh` 判断元素的正确类型 返回值是中文
-   `isEqual` 判断两个元素是否相等
-   `deepMerge` 合并多个元素，兼容数组与对象
-   `migration` 将第二个对象的值迁移到第一个对象（不改变第一个对象的引用）

### Array - arrayTools

-   `castArray` 将任意参数变成数组
-   `chunk` 分割数组
-   `compact` 过滤数组里的假值
-   `concatFront` 将数组合并目标数组前
-   `sampleSize` 从数组 获得 n 个随机元素
-   `intersection` 返回两个数组的交集
-   `isIntersection` 判断两个数组是否有交集
-   `isSetEquality` 判断两个集合是否相等
-   `flattenDeep` 将 array 递归为一维数组
-   `arrayDefault` 生成一个带默认值的数组
-   `range` 生成一个数字数组(其实是 arrayDefault 的特别版)
-   `len` 回元素的长度 数组，对象的键个数，字符串长度
-   `includesPro` includes 加强版，兼容对象数组
-   `findAll` 寻找数组中所有符合条件的元素
-   `nth` 获取 array 数组的第 n 个元素。如果 n 为负数，则返回从数组结尾开始的第 n 个元素。

### String - stringTools

-   `findCount` 获得字符串里关键字的数量
-   `format` 类似 py 的 format 函数
-   `shift` 将关键字插入字符串前面
-   `replaceAll` 替换所有查询字符串

### Time - time

-   `runTime` 计算同步函数执行时间
-   `toRelativeTime` 返回友好时间 （xx 之前、刚）
-   `nowTime` 返回当前时间 eg: '2018-10-06'
-   `localeTime` utc 时间转本地时间
-   `toDate` 转化成 Date 类型
-   `intervalTime` 计算时间间隔
-   `countDown` 倒计时函数

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
-   `addZero` 对不满 10 的数字补 0
-   `toObjArray` 字符串数组转对象数组 text-value
-   `formDataStructure` 成一个表单数据，含有两个值，一个是表单键-值，一个是表单键-展示文本
-   `rulesCreate` 表单验证规则生成器 适用ele
-   `rulesMerge` 表单验证合并 适用ele

### 校验 - check

-   `checkCard` 校验身份证是否合法
-   `checkPhone` 检查手机号是否合法
-   `checkEmail` 检查邮箱是否合法
-   `regularDict` 不是一个函数，是个字典，含有预定义的正则

### 数学业务库 - mathTools

-   `isSection` 判断是否在这个区间内

### 函数调用相关 - function

-   `asyncCall` 同步调用判断函数，全部为 true 时返回 ture

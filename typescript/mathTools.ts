/**
 * 判断是否在这个区间内
 *
 * @param {number} source 源数据
 * @param {Array<number>} section 区间
 * @returns {boolean}
 */
export const isSection = function(
  source: number,
  section: Array<number>
): boolean {
  let min = section[0]
  let max = section[1]
  if (source >= min && source <= max) {
    return true
  } else {
    return false
  }
}

/**
 * 计算数字数组的和
 *
 * @param {Array<number>} array
 * @returns {number}
 */
export const sum = function(array: Array<number>): number {
  let result = 0
  for (let n of array) {
    result += n
  }
  return result
}

/**
 * 计算数字数组的乘积
 *
 * @param {Array<number>} array
 * @returns {number}
 */
export const accumulate = function(array: Array<number>): number {
  let result = 1
  array.forEach(n => {
    result = result * n
  })
  return result
}

/**
 * 阶乘的实现
 *
 * @param {number} number
 * @returns
 */
export const factorial = function(number: number) {
  let result = [1]
  for (var i = 2; i <= number; ++i) {
    let c = 0 //c代表进位
    for (let j = 0; j < result.length || c !== 0; ++j) {
      c += (result[j] || 0) * i
      result[j] = c % 10 //分别求出个位、十位、百位……的数
      c = Math.floor(c / 10)
    }
  }
  return result.reverse().join('')
}

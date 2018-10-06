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

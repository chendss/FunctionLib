/**
 * 根据选择器获得一个匹配的dom对象
 *
 * @param {string} selector css选择器
 * @returns {HTMLElement} DOM对象
 */
export const q = function(selector: string): HTMLElement {
    return document.querySelector(selector) as HTMLElement
}

/**
 * 根据选择器获得所有匹配的dom对象
 *
 * @param {string} selector
 * @returns {NodeListOf<Element>}
 */
export const qs = function(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector)
}

/**
 * 绑定该选择器匹配的所有 DOM对象的click事件
 *
 * @param {string} selector css选择器
 * @param {(e: Event) => void} handle click回调函数
 */
export const bindClick = function(
    selector: string,
    handle: (e: Event) => void
) {
    const queries = qs(selector)
    queries.forEach(q => q.addEventListener("click", handle, false))
}

/**
 * 绑定该选择器匹配的所有 DOM对象的input事件
 *
 * @param {string} selector css选择器
 * @param {(e: Event) => void} handle click回调函数
 */
export const bindInput = function(
    selector: string,
    handle: (e: Event) => void
) {
    const queries = qs(selector)
    queries.forEach(q => q.addEventListener("input", handle, false))
}

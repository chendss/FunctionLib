export const q = function (queryName: string): HTMLElement {
    return document.querySelector(queryName) as HTMLElement
}

export const qs = function (queryName: string): NodeListOf<Element> {
    return document.querySelectorAll(queryName)
}

export const bindClick = function (queryName: string, handle: (e: Event) => void) {
    const querys = qs(queryName)
    querys.forEach(q => q.addEventListener('click', handle, false))
}

export const bindInput = function (queryName: string, handle: (e: Event) => void) {
    const querys = qs(queryName)
    querys.forEach(q => q.addEventListener('input', handle, false))
}


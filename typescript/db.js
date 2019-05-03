export default class DB {
    /**
     * 清空指定键的storege数据
     *
     * @static
     * @param {...Array<string>} keyList
     * @memberof DB
     */
    static clear(...keyList) {
        if (keyList == null || keyList.length === 0) {
            localStorage.clear();
            sessionStorage.clear();
        }
        else {
            keyList.forEach(key => {
                localStorage.removeItem(key);
                sessionStorage.removeItem(key);
            });
        }
    }
    /**
     * 清空localStorage对应键
     *
     * @static
     * @param {...Array<string>} keyList
     * @memberof DB
     */
    static clearLocal(...keyList) {
        keyList.forEach(key => {
            DB.isLocal ? localStorage.removeItem(key) : sessionStorage.removeItem(key);
        });
    }
    /**
     * 清除除了数组提供键的值
     *
     * @static
     * @param {...Array<string>} keyList
     * @memberof DB
     */
    static clearExclude(...keyList) {
        let excludeList = [];
        excludeList = keyList.map(key => {
            return {
                key: key,
                body: DB.get(key)
            };
        });
        DB.clear();
        excludeList.forEach(item => DB.set(item.key, item.body));
    }
    /**
     * 存入缓存
     *
     * @static
     * @param {string} key
     * @param {IObject} obj
     * @param {(null | string)} [type=null]
     * @memberof DB
     */
    static set(key, obj, type = null) {
        let storage = JSON.stringify(obj);
        DB.isLocal = type == null ? DB.isLocal : type === 'local';
        if (DB.isLocal) {
            localStorage.removeItem(key);
            sessionStorage.removeItem(key);
            localStorage.setItem(key, storage);
        }
        else {
            sessionStorage.removeItem(key);
            sessionStorage.setItem(key, storage);
        }
    }
    /**
     * 从缓存取出
     *
     * @static
     * @param {string} key
     * @returns
     * @memberof DB
     */
    static get(key) {
        let storage = (DB.isLocal ? localStorage.getItem(key) : sessionStorage.getItem(key));
        return JSON.parse(storage);
    }
}
DB.isLocal = true;

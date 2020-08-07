/**
 * 将url参数转为json对象
 *
 * @param str
 * @returns {{}}
 */
const parseQueryString = str => {
    str = str.substring(1, str.length);
    let arr = [],
        length = 0,
        res = {};
    arr = str.split('&');
    length = arr.length;
    for (var i = 0; i < length; i++) {
        res[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
    return res;
}

export default parseQueryString;
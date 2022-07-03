"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookie = exports.getCookie = void 0;
function getCookie(name) {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : false;
}
exports.getCookie = getCookie;
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: '/' }, options);
    //@ts-ignore
    if (options.expires instanceof Date) {
        //@ts-ignore
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value !== null && value !== void 0 ? value : '');
    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey;
        //@ts-ignore
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
exports.setCookie = setCookie;
// export function deleteCookie(name) {
//     setCookie(name, '', {
//         'max-age': -1,
//     });
// }


export function getCookie(name:string):string|boolean {
    const matches = document.cookie.match(
        new RegExp(
            '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
        )
    );
    return matches ? decodeURIComponent(matches[1]) : false;
}

export function setCookie(name:string, value:string, options = {}) {
    options = {
        path: '/',
        ...options,
    };
    //@ts-ignore
    if (options.expires instanceof Date) {
        //@ts-ignore
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
        encodeURIComponent(name) + '=' + encodeURIComponent(value ?? '');

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

// export function deleteCookie(name) {
//     setCookie(name, '', {
//         'max-age': -1,
//     });
// }
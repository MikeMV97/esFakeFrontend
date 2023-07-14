export const createCookie = (name, value) => {
    let cookie = `${name}=${JSON.stringify(value)}`
    document.cookie = cookie;
}

export const readCookie = (name) => {
    let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
}

export const deleteCookie = (name) => {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
}
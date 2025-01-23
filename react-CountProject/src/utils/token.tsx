// 封装token 
const TOKENKEY = 'token_key' // 定义token的key
function setToken(token: string) {
    localStorage.setItem(TOKENKEY, token)
}
function getToken() {
    localStorage.getItem(TOKENKEY)
}
function clearToken() {
    localStorage.removeItem(TOKENKEY)
}
export {
    setToken,
    getToken,
    clearToken
}
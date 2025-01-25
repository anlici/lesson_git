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
// 清除token
function removeToken() {
    localStorage.removeItem(TOKENKEY) 
}
export {
    setToken,
    getToken,
    clearToken,
    removeToken
}
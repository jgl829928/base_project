// 公共js方法

// 获取session
export function getItem(name) {
  return window.sessionStorage.getItem(name)
}

// 存入session
export function setItem(name, value) {
  return window.sessionStorage.setItem(name, value)
}

// 删除session
export function delItem(name) {
  return window.sessionStorage.setItem(name, null)
}


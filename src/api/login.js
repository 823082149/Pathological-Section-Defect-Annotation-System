import request from '../request'

export function login(data) {
  var username = data.username
  var password = data.password

//TODO 向后端发送数据，获取结果

  if (data.username == username && data.password == password) {
    return request({
      url: '/user/login',
      method: 'post',
      data
    })
  } else {
    var ss = 0
    if (data.username != username && data.password != password) {
      ss = 1
    } else if(data.username != username) {
      ss = 2
    } else {
      ss = 3
    }
    return request({
      ss
    })
  }

  
}

export function getUserInfo(params) {
  return request({
    url: '/user/info',
    method: 'get',
    params
  })
}

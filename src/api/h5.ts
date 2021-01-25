import request from '@/utils/request'

enum Api {
    getWinnerList = '/prize_h5/getWinnerList',
    getProgramInfoList = '/program_h5/getProgramInfoList',
    programVote = '/program_h5/programVote',
    voteCount = '/program_h5/voteCount',
    wechatopenid = '/wechatopenid/index', // 构造微信auth2.0认证字符串
    gettoken = '/wechatopenid/gettoken', // 通过code换取网页授权access_token
    getuserinfo = '/wechatopenid/getuserinfo', // 拉取用户信息(需scope为 snsapi_userinfo)
}

// 登录
export function login(data) {
    return request({
        url: Api.getProgramInfoList,
        method: 'post',
        data
    })
}

// 用户信息 post 方法
export function getUserInfo(data) {
    return request({
        url: api.UserInfo,
        method: 'post',
        data,
        hideloading: true
    })
}

// 用户名称 get 方法
export function getUserName(params) {
    return request({
        url: api.UserName,
        method: 'get',
        params,
        hideloading: true
    })
}

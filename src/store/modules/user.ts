import {Module} from 'vuex'
import {YZ_OPENID} from '../mutation-types'

const state = {
    token: '',
    openid: localStorage.getItem(YZ_OPENID) || '', // 用户openid
}

export type UserState = typeof state

export const user: Module<UserState, any> = {
    namespaced: true,
    state,
    mutations: {
        SET_TOKEN: (state: UserState, token) => {
            state.token = token
        },
        SET_OPENID: (state: UserState, openid) => {
            state.openid = openid
        },
    }
}

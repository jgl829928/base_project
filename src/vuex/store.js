// store vuex使用状态存储


import Vue from 'vue'
import Vuex from 'vuex';
import router from '@/router';
import { getItem, delIem, setItem } from '@/utils/auth'

Vue.use(Vuex)

const state = {
    token: getItem('nebula_token'),
}

const mutations = {
    // 将路由存入vuex和session中
    SET_ROUTERS: (state, routers) => {
        setItem('routers', JSON.stringify(routers));
        state.menuList = routers;
    },
    // 将token存入vuex和session中
    SET_TOKEN(state, token) {
        if (token) {
            setItem('nebula_token', token);
            setItem('isLogin', true);
            state.token = token
        } else if (token == null) {
            delItem('nebula_token');
            delItem('isLogin');
            state.token = null
        }
    },
}

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
})

export default store;

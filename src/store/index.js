import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import counter from './modules/counter'
import user from './modules/user'

const store = new Vuex.Store({
    // 模块，模块中再处理具体的业务逻辑
    modules:{
        counter,
        user
    }
})

export default store
export default {
    namespaced: true,// 命名空间
    state:{
        name:'张三' // 初始值
    },
    getters:{
        getName(state){
            return state.name
        }
    },
    mutations:{
        setName(state,name){
            state.name = name
        }
    },
    actions:{
        asyncSetName({commit},name){
            setTimeout(() => {
                commit('setName',name)
            }, 1000);
        }
    }
}
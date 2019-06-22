export default {
    namespaced: true, // 命名空间
    state:{
        count:2 // 初始值
    },
    getters:{
        getCount(state){
            return state.count
        }
    },
    mutations:{
        add(state,num){
            state.count += num
        },
        minus(state,num){
            state.count -= num
        }
    },
    actions:{
        asyncAdd({commit},num){
            setTimeout(() => {
                commit('add',num)
            }, 2000);
        }
    }
}
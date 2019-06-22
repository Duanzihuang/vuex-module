<template>
    <div>
        <!-- 没有使用辅助函数 -->
        <!-- <button @click="minus">-</button>&nbsp;&nbsp;&nbsp;<button @click="add">+</button> -->

        <!-- 使用辅助函数 -->
        <button @click="jian(3)">-</button>&nbsp;&nbsp;&nbsp;<button @click="jia(1)">+</button>
    </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    methods:{
        /**
         * 没有使用辅助函数
        minus(){
            this.$store.commit('counter/minus',2)
        },
        add(){
            this.$store.dispatch('counter/asyncAdd',2)
        }
         */

        ...mapMutations('counter',{
            jian:'minus'
        }),
        ...mapActions('counter',{
            jia:'asyncAdd'
        })
    }
}
</script>

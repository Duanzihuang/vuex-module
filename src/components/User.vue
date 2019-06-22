<template>
    <div>
        <input type="text" v-model="name"/>
        <button @click="asyncSetName(name)">更新</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        /**
         * asyncSetName(){
         *      this.$store.dispatch('user/asyncSetName',name)
         * }
         */
        ...mapActions('user',['asyncSetName'])
    }
}
</script>

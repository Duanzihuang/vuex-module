<template>
  <div id="app">
    <p>
      count is {{getCount}}<br/>
      name is {{getName}}
    </p>
    <Counter />
    <User />
  </div>
</template>

<script>
import Counter from './components/Counter'
import User from './components/User'

import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
    Counter,
    User
  },
  computed:{
    ...mapGetters({
      getCount:['counter/getCount'],
      getName:['user/getName']
    })
  }
}
</script>

<style>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>


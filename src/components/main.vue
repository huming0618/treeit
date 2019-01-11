<style>
body {
    /* color: red;
    backgruond:#ccc; */
}
</style>

<template id="template-home">
  <div class="treeit__treeview" v-show="isShow">
      <Menu />
  </div>
</template>

<script>

import Menu from './menu.vue'

export default {
    name: 'Main',
    data: ()=>{
        return {
            isShow: true
        }
    },
    components: {
        Menu
    },
    props: {

    },
    methods: {
        show: function(){
            console.log('show');
            this.isShow = true;
        }
    }
}
</script>



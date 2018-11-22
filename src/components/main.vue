<style>

</style>

<template id="template-home">
  <div class="treeit__treeview" v-show="isShow">Started</div>
</template>

<script>
export default {
    name: 'Main',
    data: ()=>{
        return {
            isShow: false
        }
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



<style>

</style>

<template id="template-home">
    <div class="treeit__menu">
        <div class="circleMenu">
            <nav>
                <ul class="outer">
                    <li><span class="mainBtn"></span>
                        <ul class="inner">
                            <li><i class="el-icon-share" v-on:mousedown="click"></i></li>
                            <li><i class="el-icon-share"></i></li>
                            <li><i class="el-icon-share"></i></li>
                            <li><i class="el-icon-share"></i></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
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
        click(event){
            console.log('click.event', event)
            event.preventDefault()
            return false
        },
        show: function(){
            console.log('show');
            this.isShow = true;
        }
    }
}
</script>



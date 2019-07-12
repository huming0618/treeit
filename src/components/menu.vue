<style>

</style>

<template id="template-home">
    <div class="treeit__menu">
        <div class="circleMenu">
            <nav>
                <ul class="outer">
                    <li><span class="mainBtn"></span>
                        <ul class="inner">
                            <li><i class="el-icon-share" v-on:mousedown="saveSelection"></i></li>
                            <li><i class="el-icon-share"></i></li>
                            <li><i class="el-icon-share" v-on:mousedown="restoreSelection"></i></li>
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
            isShow: false,
            savedSel: null
        }
    },
    props: {

    },
    methods: {
        saveSelection(event){
            const rangy = window.__treeitPlugin.rangy
            const omitChecksum  = true
            const selData = rangy.serializeSelection(rangy.getSelection(), omitChecksum)
            console.log('selection：：serializeSelection', selData)
            this.savedSel = selData
            //rangy.saveSelectionCookie()
            event.preventDefault()
            return false
        },
        restoreSelection(event){    
            console.log('to restore', this.savedSel)
            const rangy = window.__treeitPlugin.rangy
            rangy.deserializeSelection(this.savedSel)
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



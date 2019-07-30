// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import Vuetify from "vuetify/lib"
import './style/treeit.scss'

import Vue from 'vue'
import main from './components/main.vue'

// import rangy from 'rangy'
import rangy from 'rangy/lib/rangy-serializer'

const treeit = window.__treeitPlugin = {}

// Vue.use(ElementUI)
Vue.use(Vuetify)
console.log('===== Test =====')


window.onload = ()=>{
    var mainComponent = Vue.extend(main)
    var mainDiv = new mainComponent({
        propsData: { type: 'primary' }
    })

    mainDiv.$mount()

    document.body.appendChild(mainDiv.$el)

    rangy.init()
    
    treeit.rangy = rangy

    // try {
    //     rangy.restoreSelectionFromCookie()
    // }
    // catch(e){
    //     console.error('fail to restore the selection from cookie: ', e)
    // }

    document.addEventListener("selectionchange", function() {
        const sel = rangy.getSelection()
        const html = sel.toHtml()
     
        console.log('Selection.', sel)
        const omitChecksum  = true 
        // const selData = rangy.serializeSelection(rangy.getSelection(), omitChecksum)
        // rangy.saveSelectionCookie()
        //console.log('Selection changed.', html, selData)
        //mainDiv.show()
    })
}


// var divHTML = [
//     '<div class=-"teeit__treeview">',
        
//     '</div>'
// ]

// var treeView = document.createElement('div');
// treeView.className = "treeit__treeview";
// treeView.inner = divHTML;

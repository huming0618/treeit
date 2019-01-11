import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/treeit.scss'

import Vue from 'vue'
import main from './components/main.vue'

// import rangy from 'rangy'
import rangy from 'rangy/lib/rangy-serializer'

Vue.use(ElementUI)

console.log('===== Test =====')


window.onload = ()=>{
    var mainComponent = Vue.extend(main)
    var mainDiv = new mainComponent({
        propsData: { type: 'primary' }
    })

    mainDiv.$mount()

    document.body.appendChild(mainDiv.$el)

    rangy.init()
    rangy.restoreSelectionFromCookie()
    console.log('rangy', rangy)
    document.addEventListener("selectionchange", function() {
        const sel = rangy.getSelection()
        const html = sel.toHtml()
     
        console.log('Selection.', sel)
        const selData = rangy.serializeSelection(rangy.getSelection())
        rangy.saveSelectionCookie()
        console.log('Selection changed.', html, selData)
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

import Vue from 'vue'
import main from './components/main.vue'


var mainComponent = Vue.extend(main)
var mainDiv = new mainComponent({
    propsData: { type: 'primary' }
})

mainDiv.$mount();

document.body.appendChild(mainDiv.$el)

console.log('test.page', mainDiv);

document.addEventListener("selectionchange", function() {
    console.log('Selection changed.'); 
    mainDiv.show();
});

// var divHTML = [
//     '<div class=-"teeit__treeview">',
        
//     '</div>'
// ]

// var treeView = document.createElement('div');
// treeView.className = "treeit__treeview";
// treeView.inner = divHTML;

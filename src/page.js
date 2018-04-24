console.log('test.page');

document.addEventListener("selectionchange", function() {
    console.log('Selection changed.'); 
});

// var divHTML = [
//     '<div class=-"teeit__treeview">',
        
//     '</div>'
// ]

var treeView = document.createElement('div');
treeView.className = "teeit__treeview";
// treeView.inner = divHTML;

document.body.appendChild(treeView);
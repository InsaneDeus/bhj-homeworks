let editor = document.getElementById("editor");

if(localStorage.text !== undefined){
    editor.value = localStorage.text;
};

editor.addEventListener("keyup", function(){
    localStorage.text = editor.value;
});
let editor = document.getElementById("editor");

editor.value = localStorage.text;

editor.addEventListener("keyup", function(){
    localStorage.text = editor.value;
});
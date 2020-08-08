let send = document.getElementById("send");
let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.onsubmit = function(e){
    e.preventDefault();

    var input = this.elements.file;
    var file = input.files[0];

    if (file) {
        upload(file);
    }
};

function upload(file){
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress =function(e){
        progress.setAttribute('max', e.total);
        progress.value = e.loaded;
    };

    let formData = new FormData();
    formData.append("userfile", file);
    
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
    xhr.send(formData);
};
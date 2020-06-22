let modalMain = document.getElementById("modal_main").classList;
let modalSuccess = document.getElementById("modal_success").classList;
let success = document.getElementsByClassName("show-success");
let modalClose = document.getElementsByClassName("modal__close");

modalMain.add("modal_active");

for(let i = 0; i < modalClose.length; i++){
    modalClose[i].addEventListener("click", function() {
    if(modalMain.contains("modal_active")){
       modalMain.remove("modal_active");
    }

    else if(modalSuccess.contains("modal_active")){
       modalSuccess.remove("modal_active");
    };
});
};

success[0].addEventListener("click", function () {
    modalSuccess.add("modal_active");
});
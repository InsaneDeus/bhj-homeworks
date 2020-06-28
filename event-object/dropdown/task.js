let button = document.getElementsByClassName("dropdown__value");
let list = document.getElementsByClassName("dropdown__list");
let listItem = document.getElementsByClassName("dropdown__item");

for(let ii = 0; ii < button.length; ii++){
    button[ii].addEventListener("click", function() {
        if(list[ii].classList.contains("dropdown__list_active")){
            list[ii].classList.remove("dropdown__list_active");
        }
        else{
            list[ii].classList.add("dropdown__list_active");
            for(let i = 0; i < list[ii].querySelectorAll(".dropdown__item").length; i++){
                list[ii].querySelectorAll(".dropdown__item")[i].addEventListener("click", function(e) {
                    e.preventDefault();
                    list[ii].classList.remove("dropdown__list_active");
                    button[ii].textContent = list[ii].querySelectorAll(".dropdown__item")[i].textContent;
                });
            };
        };  
    });
};



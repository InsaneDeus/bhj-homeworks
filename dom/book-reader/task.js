let fontSize = document.getElementsByClassName("font-size");
let fontColor = document.getElementsByClassName("book__control_color")[0].querySelectorAll(".color");
let bgColor = document.getElementsByClassName("book__control_background")[0].querySelectorAll(".color");

let book = document.getElementsByClassName("book");

function options(param, active, value1, value2, valueName1, valueName2){
    for(let i = 0; i < param.length; i++){
        param[i].addEventListener("click", function(e){
            e.preventDefault();
            for(let j = 0; j < param.length; j++){
                param[j].classList.remove(active);
                book[0].classList.remove(value1, value2)
            }
            param[i].classList.add(active);
            if(param[i].classList.contains(valueName1)){
                book[0].classList.add(value1);
            }
            else if(param[i].classList.contains(valueName2)){
                book[0].classList.add(value2);
            }
        });
    };
};

options(fontSize, "font-size_active", "book_fs-small", "book_fs-big", "font-size_small", "font-size_big");
options(fontColor, "color_active", "book_color-gray", "book_color-whitesmoke", "color_gray", "color_whitesmoke");
options(bgColor, "color_active", "book_bg-gray", "book_bg-black", "color_gray", "color_black");
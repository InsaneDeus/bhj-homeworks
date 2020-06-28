let prev = document.getElementsByClassName("slider__arrow_prev");
let next = document.getElementsByClassName("slider__arrow_next");
let sliderItem = document.getElementsByClassName("slider__item");
let dot = document.getElementsByClassName("slider__dot");

function add(i){
    sliderItem[i].classList.add("slider__item_active");
    dot[i].classList.add("slider__dot_active");
};

function remove(i){
    sliderItem[i].classList.remove("slider__item_active");
    dot[i].classList.remove("slider__dot_active");
};

prev[0].addEventListener("click", function(){
    for(let i = 0; i < sliderItem.length; i++){
        if(sliderItem[i].classList.contains("slider__item_active")){
            remove(i);
            if(i === 0){
                i = sliderItem.length - 1;
            }
            else{
                i--
            };
            add(i);
        };
    };
});

next[0].addEventListener("click", function(){
    for(let i = 0; i < sliderItem.length; i++){
        if(sliderItem[i].classList.contains("slider__item_active")){
            remove(i);
            if(i === sliderItem.length - 1){
                i = 0;
            }
            else{
                i++
            };
            add(i);
        };
    };
});

for(let i = 0; i < dot.length; i++){
    dot[i].addEventListener("click", function(){
        for(let j = 0; j < dot.length; j++){
            if(dot[j].classList.contains("slider__dot_active")){
                remove(j);
            };
        };
        add(i);
    });
};
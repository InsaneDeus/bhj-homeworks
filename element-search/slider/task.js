let prev = document.getElementsByClassName("slider__arrow_prev");
let next = document.getElementsByClassName("slider__arrow_next")
let sliderItem = document.getElementsByClassName("slider__item");
let dot = document.getElementsByClassName("slider__dot");

prev[0].addEventListener("click", function(){
    for(let i = 0; i < sliderItem.length; i++){
        if(sliderItem[i].classList.contains("slider__item_active")){
            sliderItem[i].classList.remove("slider__item_active");
            dot[i].classList.remove("slider__dot_active");
            if(i === 0){
                i = sliderItem.length - 1;
            }
            else{
                i--
            };
            sliderItem[i].classList.add("slider__item_active");
            dot[i].classList.add("slider__dot_active");
        };
    };
});

next[0].addEventListener("click", function(){
    for(let i = 0; i < sliderItem.length; i++){
        if(sliderItem[i].classList.contains("slider__item_active")){
            sliderItem[i].classList.remove("slider__item_active");
            dot[i].classList.remove("slider__dot_active");
            if(i === sliderItem.length - 1){
                i = 0;
            }
            else{
                i++
            };
            sliderItem[i].classList.add("slider__item_active");
            dot[i].classList.add("slider__dot_active");
        };
    };
});

for(let i = 0; i < dot.length; i++){
    dot[i].addEventListener("click", function(){
        for(let ii = 0; ii < dot.length; ii++){
            if(dot[ii].classList.contains("slider__dot_active")){
                dot[ii].classList.remove("slider__dot_active");
                sliderItem[ii].classList.remove("slider__item_active");
            };
        };
        sliderItem[i].classList.add("slider__item_active");
        dot[i].classList.add("slider__dot_active");
    });
};
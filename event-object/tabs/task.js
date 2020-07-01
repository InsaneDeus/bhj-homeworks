let tab = document.getElementsByClassName("tab");
let tabContent = document.getElementsByClassName("tab__content");
let tabs = document.getElementsByClassName("tabs");

for(let i = 0; i < tab.length; i++){
    tab[i].addEventListener("click", function(){
        for(let j = 0; j < tabs.length; j++){
            if(tabs[j] === tab[i].closest(".tabs")){
                for(let ii = 0; ii < tabs[j].querySelectorAll(".tab").length; ii++){
                    tabs[j].querySelectorAll(".tab")[ii].classList.remove("tab_active");
                    tabs[j].querySelectorAll(".tab__content")[ii].classList.remove("tab__content_active");
                };
                tab[i].classList.add("tab_active");
                tabContent[i].classList.add("tab__content_active");
            };
        };
    });
};
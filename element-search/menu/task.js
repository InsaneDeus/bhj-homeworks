let menuLink = document.getElementsByClassName("menu__link");
let menuItem = document.getElementsByClassName("menu__item");
let menuSub = document.getElementsByClassName("menu_sub");
let menuMain = document.getElementsByClassName("menu_main");

for(let i = 0; i < menuItem.length; i++){
        menuLink[i].addEventListener("click" , function(e) {
            if(menuItem[i].querySelector(".menu_sub") != null){
                e.preventDefault();
                if(menuItem[i].querySelector(".menu_sub").classList.contains("menu_active")){
                    menuItem[i].querySelector(".menu_sub").classList.remove("menu_active");
                }
                else{
                for(let j = 0; j < menuMain.length; j++){
                    if(menuMain[j] === menuItem[i].closest(".menu_main")){
                        if(menuMain[j].querySelector(".menu_active") != null){
                            menuMain[j].querySelector(".menu_active").classList.remove("menu_active");
                        };
                    };
                };
                menuItem[i].querySelector(".menu_sub").classList.add("menu_active");
                };      
            };
        });
};

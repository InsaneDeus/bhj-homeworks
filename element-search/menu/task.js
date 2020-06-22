let menuLink = document.getElementsByClassName("menu__link");
let menuItem = document.getElementsByClassName("menu__item");
let menuSub = document.getElementsByClassName("menu_sub");
let menuMain = document.getElementsByClassName("menu_main");

for(let i = 0; i < menuItem.length; i++){
        menuLink[i].addEventListener("click" , function(e) {
            if(menuItem[i].querySelector(".menu_sub") != null){
                    for(let ii = 0; ii < menuMain.length; ii++){
                        if(menuMain[ii] === menuItem[i].closest(".menu_main")){
                            if(menuMain[ii].querySelector(".menu_active") != null){
                                menuMain[ii].querySelector(".menu_active").classList.remove("menu_active");
                            };
                        };
                    };
                    
                    menuItem[i].querySelector(".menu_sub").classList.add("menu_active");
                    e.preventDefault();  
                };   
        });
};

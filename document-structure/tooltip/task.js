const hasTooltip = document.getElementsByClassName("has-tooltip");
const body = document.getElementsByTagName("body");

let value = "";

body[0].insertAdjacentHTML("afterBegin", '<div class="tooltip"></div>');

for(let i = 0; i < hasTooltip.length; i++){
    hasTooltip[i].addEventListener("click", function(e){
        e.preventDefault();

        let tooltip = document.getElementsByClassName("tooltip");

        tooltip[0].style.position = "absolute";
        tooltip[0].style.left = hasTooltip[i].offsetLeft + "px";
        tooltip[0].style.top = hasTooltip[i].offsetTop + hasTooltip[i].offsetHeight + "px";

        if(tooltip[0].classList.contains("tooltip_active") && tooltip[0].textContent === hasTooltip[i].getAttribute("title")){
            tooltip[0].classList.remove("tooltip_active");
        }
        else{
            tooltip[0].classList.add("tooltip_active");
            value = hasTooltip[i].getAttribute("title");
        }

        tooltip[0].textContent = value;
        
    });
};
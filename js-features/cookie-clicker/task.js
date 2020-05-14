let num = document.getElementById("clicker__counter");
let cookieJs = document.getElementById("cookie");
let speedCheck = document.getElementById("click_on_second");

let clickBefore = 0;

cookieJs.onclick = function(){
    num.textContent = parseInt(num.textContent) + 1;
    cookieJs.width = 190;
    setTimeout(() => {
        cookieJs.width = 200;
    }, 50);
};



let speed = setInterval(() => {
    speedCheck.textContent = parseInt(num.textContent) - clickBefore;
    clickBefore = parseInt(num.textContent);
}, 1000);
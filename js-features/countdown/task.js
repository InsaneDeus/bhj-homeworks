const timerJs = document.getElementById("timer");
let timerInterval = setInterval(() => {
    timerJs.textContent -= 1; 
    if(timerJs.textContent === "0"){
        alert("Вы победили в конкурсе");
        clearInterval(timerInterval);
    }; 
}, 1000);


//#1

    let hours = document.getElementById("hh");
    let minutes = document.getElementById("mm");
    let second = document.getElementById("ss");

    let superTimer = setInterval(() => {
        if(second.textContent === "00"){
            if(minutes.textContent === "00"){
                if(hours.textContent === "00"){
                    alert("Вы победили в конкурсе");
                    clearInterval(superTimer)
                };
                hours.textContent--;
                minutes.textContent = 60;
                if(hours.textContent < 10){
                    hours.textContent = "0" + hours.textContent;
                };
            };
            minutes.textContent--;
            second.textContent = 59;
            if(minutes.textContent < 10){
                minutes.textContent = "0" + minutes.textContent;
            };
        }
        else{
            second.textContent--;
        };
        if(second.textContent < 10){
            second.textContent = "0" + second.textContent;
        };
    }, 1000);

//#2

const test = document.getElementById("test");
let testInterval = setInterval(() => {
    test.textContent -= 1; 
    if(test.textContent === "0"){
        document.location.assign("https://github.com/netology-code/mq-diploma/raw/master/sources/surface_desktop.psd");
        clearInterval(testInterval);
    }; 
}, 1000);
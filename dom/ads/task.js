let rotator = document.getElementsByClassName("rotator");

for(let i = 0; i < rotator.length; i++){
    rotator[i].querySelector(".rotator__case_active").style.color = rotator[i].querySelector(".rotator__case_active").dataset.color;

    function options(value, removeElement){
        value.classList.add("rotator__case_active");
        removeElement.classList.remove("rotator__case_active")
        clearInterval(interval);
        interval = setInterval(next , Number.parseInt(rotator[i].querySelector(".rotator__case_active").dataset.speed));
    };

    function next(){
        if(rotator[i].querySelectorAll(".rotator__case")[rotator[i].querySelectorAll(".rotator__case").length - 1].classList.contains("rotator__case_active")){
            options(rotator[i].querySelector(".rotator__case"), rotator[i].querySelectorAll(".rotator__case")[rotator[i].querySelectorAll(".rotator__case").length - 1]);
            rotator[i].querySelector(".rotator__case").style.color = rotator[i].querySelector(".rotator__case").dataset.color;
        }
        else{
            options(rotator[i].querySelector(".rotator__case_active").nextElementSibling, rotator[i].querySelector(".rotator__case_active"));
            rotator[i].querySelector(".rotator__case_active").style.color = rotator[i].querySelector(".rotator__case_active").dataset.color;
        };
    };

    let interval = setInterval(next , Number.parseInt(rotator[i].querySelector(".rotator__case_active").dataset.speed));
};


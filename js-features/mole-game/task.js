let deadJs = document.getElementById("dead");
let lostJs = document.getElementById("lost");

function getHole(index){
    let indexHole = document.getElementById("hole" + index);
    indexHole.onclick = function(){
        if(indexHole.className.includes( "hole_has-mole" )){
        deadJs.textContent = parseInt(deadJs.textContent) + 1;
        if(deadJs.textContent === "10"){
            alert("Вы победили!");
            deadJs.textContent = 0;
            lostJs.textContent = 0;
        };
    }
    else{
        lostJs.textContent = parseInt(lostJs.textContent) + 1;
        if(lostJs.textContent === "5"){
            alert("Вы проиграли");
            deadJs.textContent = 0;
            lostJs.textContent = 0;
        };
    };
};
};

for(let i = 0; i < 9; i++){
    getHole(i + 1);
};
const interest = document.getElementsByClassName("interest");

for(let i = 0; i < interest.length; i++){
    interest[i].querySelector(".interest__check").addEventListener("click", function(){
        if(interest[i].querySelector(".interests_active")){
            let value = interest[i].querySelector(".interest__check").checked;

            for(let j = 0; j < interest[i].querySelector(".interests_active").querySelectorAll(".interest__check").length; j++){
                interest[i].querySelector(".interests_active").querySelectorAll(".interest__check")[j].checked = value;
            };
        }
    });
};

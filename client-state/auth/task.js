const signin = document.getElementsByClassName("signin")[0];
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");

if(localStorage.id){
    welcome.classList.add("welcome_active");
    userId.textContent = localStorage.id;
}
else{
    signin.classList.add("signin_active");

    signinBtn.addEventListener("click", function(e){
        e.preventDefault();

        let signinForm = document.getElementById("signin__form");

        let formData = new FormData();

        formData.append("login", signinForm.querySelectorAll(".control")[0].value);
        formData.append("password", signinForm.querySelectorAll(".control")[1].value);

        let xhr = new XMLHttpRequest();
        
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
        xhr.send(formData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4){
                let item = JSON.parse(xhr.responseText);
            
                let itemResult = Object.values(item);

                if(itemResult[0]){
                    localStorage.id = itemResult[1];

                    signin.classList.remove("signin_active");

                    welcome.classList.add("welcome_active");
                    userId.textContent = localStorage.id;
                }
                else{
                    alert("Неверный логин/пароль");
                };
            };
          };
    });
}



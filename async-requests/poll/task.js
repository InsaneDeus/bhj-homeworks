const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();

xhr.open( "GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        let item = JSON.parse(xhr.responseText);

        pollTitle.innerHTML = item.data.title;
        for(let i = 0; i < item.data.answers.length; i++){
            pollAnswers.insertAdjacentHTML("beforeend", '<button class="poll__answer">' + item.data.answers[i] + '</button>');

            let num = pollAnswers.querySelectorAll(".poll__answer").length - 1;

            pollAnswers.querySelectorAll(".poll__answer")[num].addEventListener("click", function(){
                alert("Спасибо, ваш голос засчитан!");
            });
        };
    };
  };
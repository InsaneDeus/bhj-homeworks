const chatWidget = document.getElementsByClassName("chat-widget");

chatWidget[0].addEventListener("click", function(){
    chatWidget[0].classList.add("chat-widget_active");
});

let massages = ["Дороу", "Драсте", "Васап", "Коничива", "Нихао", "Хола"];

const chatWidgetInput = document.getElementById("chat-widget__input");
const chatWidgetMessages = document.getElementById("chat-widget__messages");

chatWidgetInput.addEventListener("keydown", function(e) {
    let date = new Date();
    let time = date.getHours() + ":" + date.getMinutes();
    if (e.keyCode === 13 && chatWidgetInput.value != "") {
        chatWidgetMessages.innerHTML += '<div class="message message_client"><div class="message__time">' + time + '</div><div class="message__text">' + chatWidgetInput.value + '</div></div>';
        chatWidgetInput.value = "";
        chatWidgetMessages.innerHTML += '<div class="message"><div class="message__time">' + time + '</div><div class="message__text">' + massages[Math.floor(Math.random() * massages.length)] + '</div></div>'
    }
  });
const items = document.getElementById("items");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();

xhr.open( "GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        let item = JSON.parse(xhr.responseText);

        let itemResult = Object.values(item.response.Valute);

        for(let i = 0; i < itemResult.length; i++){
            items.innerHTML += '<div class="item"><div class="item__code">' + itemResult[i].CharCode + '</div><div class="item__value">' + itemResult[i].Value + '</div><div class="item__currency">руб.</div></div>'
        };

        loader.classList.remove("loader_active");
    };
  };

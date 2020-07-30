const product = document.getElementsByClassName("product");
const cartProducts = document.getElementsByClassName("cart__products");

for(let i = 0; i < product.length; i++){
    product[i].querySelectorAll(".product__quantity-control")[0].addEventListener("click", function(){
        if(product[i].querySelector(".product__quantity-value").textContent != 0){
            product[i].querySelector(".product__quantity-value").textContent--;
        };
    });

    product[i].querySelectorAll(".product__quantity-control")[1].addEventListener("click", function(){
        product[i].querySelector(".product__quantity-value").textContent++;
    });

   

    product[i].querySelector(".product__add").addEventListener("click", function(){
        let id = "item" + (i + 1);
        let valueJ = 0;

        function getValue(){
            for(let j = 0; j < cartProducts[0].querySelectorAll(".cart__product").length; j++){
                if(cartProducts[0].querySelectorAll(".cart__product")[j].dataset.id === id){
                    valueJ = j;
                    return true;
                }
            };
            return false;
        }

        if(getValue()){
            cartProducts[0].querySelectorAll(".cart__product")[valueJ].querySelector(".cart__product-count").textContent = parseInt(product[i].querySelector(".product__quantity-value").textContent) + parseInt(cartProducts[0].querySelectorAll(".cart__product")[valueJ].querySelector(".cart__product-count").textContent)
        }
        else{
            cartProducts[0].innerHTML += '<div class="cart__product" data-id="' + id + '"><img class="cart__product-image" src="' + product[i].querySelector(".product__image").getAttribute("src") + '"><div class="cart__product-count">' + product[i].querySelector(".product__quantity-value").textContent + '</div></div>';
        }
    });
};


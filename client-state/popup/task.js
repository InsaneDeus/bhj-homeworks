let subscribeModal = document.getElementById("subscribe-modal");
let modalClose = document.getElementsByClassName("modal__close")[0];

const getCookie = (name) => {
    const value = "; "+ document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts
        .pop()
        .split(";")
        .shift();
    };
};

if(getCookie('userValue') !== "false"){
    subscribeModal.classList.add("modal_active");
};

modalClose.addEventListener("click", function(){
    subscribeModal.classList.remove("modal_active");

    document.cookie = "userValue=false";
});


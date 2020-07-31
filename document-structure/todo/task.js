const button = document.getElementById("tasks__add");
const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");


button.addEventListener("click", function(e) {
    e.preventDefault();

    if(input.value !== ""){
       // taskList.innerHTML = taskList.innerHTML + '<div  class="task"><div class="task__title">' + input.value + '</div><a href="#"class="task__remove"> &times;</a></div>';

        taskList.insertAdjacentHTML("beforeend", '<div  class="task"><div class="task__title">' + input.value + '</div><a href="#"class="task__remove" onclick = ""> &times;</a></div>');

        let num = taskList.querySelectorAll(".task__remove").length - 1;

        taskList.querySelectorAll(".task__remove")[num].addEventListener("click", function(e){
            e.preventDefault();
        
            event.target.parentElement.remove();
        });

        input.value = "";
    };
    
});





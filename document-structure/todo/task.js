const button = document.getElementById("tasks__add");
const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

button.addEventListener("click", function(e) {
    e.preventDefault();

    if(input.value !== ""){
        taskList.innerHTML = taskList.innerHTML + '<div  class="task"><div class="task__title">' + input.value + '</div><a href="#"class="task__remove"> &times;</a></div>';

        for(let i = 0; i < taskList.querySelectorAll(".task__remove").length; i++){
            taskList.querySelectorAll(".task__remove")[i].addEventListener("click", function(){
                taskList.querySelectorAll(".task")[i].remove();
            });
        };
    };
    
});





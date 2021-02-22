var content = document.getElementById("newtask");
var getElemt = document.getElementById("todo-list");
function addTask(){

var new_content = content.value;
    var new_li = document.createElement("li"); 
    new_li.className += "list-group-item";
    
    var new_input = document.createElement("input")
    new_input.setAttribute("type", "checkbox");
    new_input.className += "form-check-input";    
    var new_task = document.createElement("div");
    new_task.appendChild(new_input);
    new_input.insertAdjacentHTML("afterend",new_content + "<button type=\"button\" class=\"btn btn-primary\" onclick=\"this.parentNode.parentNode.remove();\">Supprimer</button>");
    getElemt.appendChild(new_li);
    new_li.appendChild(new_task);
    alert("TASK ADDED !");
}
function getID(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
function saveTask(){
    /*construct
    loop for number of li element getElement
    
    create new object with : 
        
    
   for (let i = 0; i < array.length; i++) {
       var current_task = document.getElementsByTagName("li")[i];
       var 
       current_task.childNodes.value*/
}





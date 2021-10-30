let inputNewTask = document.getElementById("inputNewTask");
let buttonAdd = document.getElementById("buttonAdd");


let numberTask = document.getElementById("numberTask");
let isOrAre = document.getElementById("isOrAre");
let nameTask = document.getElementById("nameTask");

let sentence = document.getElementById("sentence");

buttonAdd.addEventListener("click", function(){
    inputNewTaskValue = inputNewTask.value;
    if (inputNewTaskValue.trim()!=0){
        let webTask = localStorage.getItem("localTask");
        if (webTask == null){
            taskObj = [];
        }
        else {
            taskObj = JSON.parse(webTask);
        }
        taskObj.push(inputNewTaskValue);
        localStorage.setItem("localTask", JSON.stringify(taskObj));
    }
   

    showTask();
})

function showTask(){
    let webTask = localStorage.getItem("localTask");    
    if (webTask == null){
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webTask);
    }
    let html = '';
    let allTaskAdded = document.getElementById("allTaskAdded");
    taskObj.forEach((item, index) => {
        html += ` <tr class="taskAdded">
                    <td><input id="checkboxTaskAdded" type="checkbox" onchange="ThisIsTheFunction(${index},this.checked)" /></td>
                    <td> <span id="nameTask"> ${item} </span> </td>
                    <td><button id="buttonDelete" onclick="deleteTask(${index})" type="button" class=" btn btn-danger"> Delete </button></td> 
                </tr>`
        
    });

    if (taskObj.length < 2 ){
       
            isOrAre.innerHTML = "is";
            numberTask.innerHTML = taskObj.length;
       
    } else if (taskObj.length > 1  ){
        isOrAre.innerHTML = "are";
        numberTask.innerHTML = taskObj.length;
    }
   
    allTaskAdded.innerHTML = html;
}

function deleteTask(index){
    let webTask = localStorage.getItem("localTask");
    let taskObj = JSON.parse(webTask);
    taskObj.splice(index, 1);
    localStorage.setItem("localTask", JSON.stringify(taskObj));
    showTask();
}



function ThisIsTheFunction(temp,temp2){
    if(temp2 == true) {
        if (taskObj.length < 2){
            isOrAre.innerHTML = "is";
            numberTask.innerHTML = taskObj.length -=1;
        } else {
            isOrAre.innerHTML = "are";
            numberTask.innerHTML = taskObj.length -=1;
        }
    }
    else {
        if (taskObj.length < 2){
            isOrAre.innerHTML = "is";
            numberTask.innerHTML = taskObj.length +=1  ;
        } else {
            isOrAre.innerHTML = "are";
            numberTask.innerHTML = taskObj.length +=1 ;
        }
    }
}









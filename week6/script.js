let toDoHTML = '<li class="listItem">Task</li>'
//let toDo = { id, content, completed}
let toDoList = [
    {
        id: Date.now(),
        content: 'Add a task to start your to do list!',
        completed: false
    }
]




window.addEventListener("load", () => { showToDoList(); });
document.getElementById("submit").addEventListener("click",() => { addTask(); });
document.getElementById("").addEventListener("click",() => { addTask(); });

function showToDoList() {
    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.innerHTML = "";
    renderToDoList(toDoList, toDoListElement);
}
function renderToDoList(toDos, parent) {
    toDos.forEach(toDo => {
        parent.appendChild(renderOneTask(toDo));
    });
}
function renderOneTask(toDo) {
    const item = document.createElement("li");

    item.innerHTML = toDo.content;
    if (toDo.completed == true) {
        item.classList.add("checked")
    }
    else if (toDo.completed == false) {
        item.classList.remove("checked");
    }

    return item;
}

function addTask() {
    console.log("addTask ran")
    let newTask = document.getElementById("newTask").value;
    if (newTask == "")
        return;
    else {
        toDoList.push({id: Date.now(), content: newTask, completed: false})
        document.getElementById("newTask").value = "";
        showToDoList();
    }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

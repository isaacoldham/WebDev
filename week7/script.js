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
document.getElementById("submit").addEventListener("click", () => { addTask(); });
document.getElementById("completeTasks").addEventListener("click", () => { filterComplete(); })
document.getElementById("incompleteTasks").addEventListener("click", () => { filterIncomplete(); })
document.getElementById("allTasks").addEventListener("click", () => { showToDoList(); })






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
    item.innerHTML = `<input class="check" type="checkbox" id="check${toDo.id}" onClick="check(this.id)">
                      ${toDo.content}
                      <input class="delete" type="button" id="del${toDo.id}" onClick="delTask(this.id)" value ="Remove">`;
    item.id = toDo.id;
    console.log(item);
    if (toDo.completed == true) {
        console.log("this is the check if")
        item.classList.add("checked");
        return item;
    } else {
        return item;
    }
}

function addTask() {
    let newTask = document.getElementById("newTask").value;
    if (newTask == "")
        return;
    else {
        toDoList.push({ id: Date.now(), content: newTask, completed: false })
        document.getElementById("newTask").value = "";

        showToDoList();
    }
}

function check(taskid) {
    let id = taskid.replace('check', '');
    item = document.getElementById(id);
    for (let key in toDoList) {
        if (toDoList[key].id == id) {
            if (toDoList[key].completed == false) {
                item.classList.add("checked");
                toDoList[key].completed = true;
            }
            else if (toDoList[key].completed == true) {
                item.classList.remove("checked");
                toDoList[key].completed = false;
                console.log('should be removed')
            }
        }
    }
}

function delTask(taskid) {
    let id = taskid.replace('del', '');
    item = document.getElementById(id);
    for (let key in toDoList) {
        if (toDoList[key].id == id) {
            toDoList.splice(key, 1);
            showToDoList();
        }
    }
}

function filterComplete() {
    const completed = true;
    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.innerHTML = "";
    filterToDoList(toDoList, toDoListElement, completed);
}
function filterToDoList(toDos, parent, completed) {
    toDos.forEach(toDo => {
        parent.appendChild(renderOneFilteredTask(toDo, completed));
    });
}
function renderOneFilteredTask(toDo, completed) {
    if (toDo.completed == completed) {
        const item = document.createElement("li");
        item.innerHTML = `<input class="check" type="checkbox" id="check${toDo.id}" onClick="check(this.id)">
                      ${toDo.content}
                      <input class="delete" type="button" id="del${toDo.id}" onClick="delTask(this.id)" value ="Remove">`;
        item.id = toDo.id;
        console.log(item);
        console.log(toDo.completed)
        console.log(completed)
        if (toDo.completed == true) {
            console.log("this is the check if")
            item.classList.add("checked");
            return item;
        } else {
            return item;
        }
    }
    else {
        console.log("this is the else")
        const item = document.createElement("li");
        item.style.display = "none";
        return item;
    }
}

function filterIncomplete() {
    const completed = false;
    const toDoListElement = document.getElementById("toDoList");
    toDoListElement.innerHTML = "";
    filterToDoList(toDoList, toDoListElement, completed);
}
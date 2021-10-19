let toDoHTML = '<li class="listItem">Task</li>'
let toDoList = [
{
    id: Date.now(),
    content: 'Add a task to start your to do list!',
    completed: false
},
{
    id: Date.now(),
    content: 'Testing',
    completed: true
},
{
    id: Date.now(),
    content: 'another test',
    completed: false
},
{
    id: Date.now(),
    content: 'Add a task to start your to do list!',
    completed: false
}
]




window.addEventListener("load", () => { showToDoList(); });

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
    item.cl
  
    return item;
  }
  

console.log(toDo)
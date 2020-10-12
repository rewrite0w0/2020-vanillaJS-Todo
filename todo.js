const todo_input = document.querySelector(".todo-input");
const todo_button = document.querySelector(".todo-button")
const todo_list = document.querySelector(".todo-list");
const todo_filter = document.querySelector(".todo-filter");

//event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todo_button.addEventListener("click", add);
todo_list.addEventListener("click", done);
todo_filter.addEventListener("click", filter);


//function
function add(event) {
    //prevent form from submitting
    // console.log("hello");
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo_input.value;
    saveLocalTodos(todo_input.value);
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    todo_input.value = "";

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = `<i class="fas fa-check"></i>`;
    doneBtn.classList.add("done-button");
    todoDiv.appendChild(doneBtn);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    delBtn.classList.add("del-button");
    todoDiv.appendChild(delBtn);

    todo_list.appendChild(todoDiv);
}


function done(event) {
    const item = event.target;
    // console.log(event.target);
    //Del Todo
    if (item.classList[0] === "del-button") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", () => {
            todo.remove();
        })
    }
    if (item.classList[0] === "done-button") {
        const todo = item.parentElement;
        todo.classList.toggle("done");
        // console.log(todo);
    }
}


function filter(event) {
    const todos = todo_list.childNodes;
    console.log(todos);
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "done":
                if (todo.classList.contains("done")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "not-done":
                if (!todo.classList.contains("done")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todo_input.value = "";

        const done_button = document.createElement("button");
        done_button.innerHTML = `<i class="fas fa-check"></i>`;
        done_button.classList.add("done-button");
        todoDiv.appendChild(done_button);

        const delete_button = document.createElement("button");
        delete_button.innerHTML = `<i class="fas fa-trash"></i>`;
        delete_button.classList.add("del-button");
        todoDiv.appendChild(delete_button);

        todo_list.appendChild(todoDiv);
    });
}
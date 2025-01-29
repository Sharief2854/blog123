let todos=[1,2,3,4];
let todoListTag=document.getElementById("todoList");
function displayTodos()
{
    let html="";
    for(let ind in todos)
    {
        html+=`
            <div class="todo">
                ${todos[ind]}
                <button style="float:right" onclick="deleteTodo(${ind});">Delete</button>
            </div>
        `
    }
    todoListTag.innerHTML=html;
}
displayTodos();
function addTodo(event)
{
    event.preventDefault();
    todos.push(form.todoitem.value)
    displayTodos();
}
function deleteTodo(ind)
{
    console.log(ind);
    let newTodos=todos.splice(ind,1);
    displayTodos();
    console.log(todos)
}
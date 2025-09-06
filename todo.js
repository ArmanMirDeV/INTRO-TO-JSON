const loadTodo = ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then((res) => res.json())
    .then((data)=> displayTodo(data) )
}

/* {
    "userId": 10,
    "id": 194,
    "title": "sed ut vero sit molestiae",
    "completed": false
} */



const displayTodo = (todos) => {
    // 1. Get the container 
    const todoContainer = document.getElementById("todo-container");
    todoContainer.innerHTML = '';
    //2. Get all element
    todos.forEach (todo => {
        console.log(todo)

        const todoCard = document.createElement("div");
        todoCard.innerHTML = `
        <div class= "todo-card"> 
        <p> ${todo.completed == true? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}  </p>
        <h4> ${todo.title} </h4>

        </div>
        `;
        todoContainer.append(todoCard)
    })
};

loadTodo()
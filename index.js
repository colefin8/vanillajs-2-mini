document.querySelector('form').addEventListener('submit', addTodo);

function addTodo (event){
    event.preventDefault();
    
    const listItem = document.createElement("li")
    listItem.innerText = document.getElementById("item").value;
    listItem.addEventListener('click', completeTodo);

    const button = document.createElement('button');
    button.innerText = "x";
    button.addEventListener('click', removeTodo);
    listItem.appendChild(button);

    const list = document.querySelector('ul');
    list.appendChild(listItem);

    document.getElementById('item').value = "";
}

function removeTodo(event){
    event.target.parentNode.remove();
}

function completeTodo(event){
    const checked = event.target.getAttribute('aria-checked')
    if (checked !== "true"){
        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", "false");
    }
}
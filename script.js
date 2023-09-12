const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const addItem = document.querySelector("#to");
const errorLabel = document.querySelector("label");

const taskHtml = ({ name, id }) => {
  return `<div class="col-12 row justify-content-between mt-3" style="    padding: 15px;
  border-radius: 20px;
  background-color: #ffffff2b;">
  
  <div class="col-9"><input class="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault"><b>${name}</b></div>
  <div class="col-2">
 
    <div class="btn btn-warning" onclick="deletTodofromTodos(${id});">delete</div>
  </div>
</div>
`;
};
let todos = [];

class Todo {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    const newTodo = new Todo(todos.length + 1, input.value);
    todos.push(newTodo);
    renderTodos();
    input.value = "";
    errorLabel.style.display = "none";
  } else {
    errorLabel.style.display = "inline";
  }
});

const renderTodos = () => {
  addItem.innerHTML = "";
  todos.forEach((todo) => {
    displayTodo(todo);
  });
};

const displayTodo = (todo) => {
  addItem.innerHTML += taskHtml(todo);
};

const deletTodofromTodos = (todoId) => {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodos();
};

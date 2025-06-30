function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.ariaValueMax.trim();

  if (task === "") {
    alert("isi tugas dulu!");
    return;
  }

  const li = document.createElement("li");

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

function deleteTodo(button) {
  button.parentElement.remove();
}

function toggleCheck(span) {
  span.parentElement.classList.toggle("checked");
}

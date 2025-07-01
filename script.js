function addTodo() {
  const input = document.getElementById("todo-input");
  const task = input.value.trim();

  if (task === "") {
    alert("isi tugas dulu!");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
  <span onclick="toggleCheck(this)">${task}</span>
  <button class="delete-btn" onclick="deleteTodo(this)">Hapus</buton>`;

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}

function deleteTodo(button) {
  button.parentElement.remove();
}

function toggleCheck(span) {
  span.parentElement.classList.toggle("checked");
}

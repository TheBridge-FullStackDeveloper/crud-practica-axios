// GET REQUEST
let users = [];
function getTodos() {
  // https://jsonplaceholder.typicode.com/todos
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      showOutput(response);
      users = response.data;
    })
    .catch((err) => console.error(err));
}
console.log(users);
// POST REQUEST
function addTodo() {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "ejercicios js",
      completed: false,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/27", {
      title: "ejercicios js",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/27")
    .then((res) => document.querySelector(".msg").innerHTML ="To do eliminado")
    .catch((err) => console.error(err));
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);

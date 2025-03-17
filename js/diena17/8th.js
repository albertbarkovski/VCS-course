const taskInput = document.getElementById("taskInput");
const btnEl = document.querySelector(".btn");
const taskList = document.querySelector(".taskList");

function addNewTask() {
  let input = taskInput.value.trim();

  if (input) {
    let li = document.createElement("li"); // Create a new <li>
    li.textContent = input; // Set text content

    li.addEventListener("click", function () {
      li.remove(); // Remove task on click
    });

    taskList.appendChild(li); // Add <li> to the list
    taskInput.value = ""; // Clear input field
  }
}

btnEl.addEventListener("click", addNewTask);

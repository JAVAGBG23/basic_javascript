// TASK MANAGER APP

// vi ska skapa en liten app där vi kan lägga till "tasks", markera en task som klar,
// visa alla tasks samt filtrera ut alla klara tasks.
// användaren gör val i en meny och vår app visar sedan korrekt val

// vår app ska bestå av två delar:
// 1. ett objekt som ska innehålla all logik
// 2. en funktion som ska hantera menyval

// vårt objekt ska ha följande properties:
// - array som innehåller alla tasks
// - funktion för att lägga till en ny task
// - funktion för att markera en task som klar
// - funktion för att visa alla tasks
// - funktion för att visa alla tasks som är klara

// vår menu() ska ta emot en input från en user och visa rätt val

let taskId = 1;

// OBJEKT
const taskManager = {
  tasks: [],
  addTask: function () {
    // vi vill ta emot beskrivningen på en task från en user
    const description = prompt("Please add a description for the task:");
    if (description.trim() === "") {
      alert("Task description can not be empty!");
      this.addTask();
    }

    const task = {
      id: taskId++,
      description: description,
      completed: false,
    };

    this.tasks.push(task);
    alert("Task added successfully!");
    menu();
  },
  listAllTasks: function () {
    if (this.tasks.length === 0) {
      alert("No tasks available!");
      menu();
    }

    let message = "";
    this.tasks.forEach((task) => {
      message += `Id: ${task.id}, Description: ${
        task.description
      }, Completed: ${task.completed ? "Yes" : "No"}\n`;
    });
    alert(message);
    menu();
  },
};

// MENU FUNCTION
function menu() {
  const choice = parseInt(
    prompt(
      "Select from the menu:\n1) Add a new task\n2) Complete a task\n3) List all tasks\n4) List completed tasks\n5) Exit"
    )
  );

  switch (choice) {
    case 1:
      //console.log("Add a new task");
      taskManager.addTask();
      break;
    case 2:
      console.log("Complete a task");
      break;
    case 3:
      //console.log("List all tasks");
      taskManager.listAllTasks();
      break;
    case 4:
      console.log("List all completed tasks");
      break;
    case 5:
      alert("Goodbye!");
      return;
    default:
      alert("Invalid choice. Please enter a number between 1 - 5");
      menu();
      break;
  }
}

menu();

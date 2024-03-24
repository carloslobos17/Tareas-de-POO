class Task {
    constructor(description) {
      this.description = description;
      this.completed = false;
    }
  
    complete() {
      this.completed = true;
      console.log(`La tarea "${this.description}" ha sido completada.`);
    }
  
    toString() {
      return `Tarea: ${this.description} | Completada: ${this.completed ? 'Sí' : 'No'}`;
    }
  }

class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(description) {
      const newTask = new Task(description);
      this.tasks.push(newTask);
      console.log(`Se ha agregado una nueva tarea: "${description}"`);
    }
  
    completeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks[index].complete();
      } else {
        console.log('Índice de tarea inválido.');
      }
    }
  
    showTasks() {
      console.log('----- Lista de Tareas -----');
      this.tasks.forEach((task, index) => {
        console.log(`[${index + 1}] ${task.toString()}`);
      });
      console.log('-----------------------------');
    }
  }
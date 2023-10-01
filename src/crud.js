import { TodoFactory, ProjectFactory, NoteFactory } from './factories';
import { projects, notes, saveDataToLocal } from './data';

function updateTodoUI(todoId) {
  const todoElement = document.getElementById(`todo-${todoId}`);

  if (todoElement) {
    let todoItem = null;

    const project = projects.find(project =>
      project.todos.some(todo => todo.id === todoId)
    );
    if (project) {
      todoItem = project.todos.find(todo => todo.id === todoId);
    }

    if (todoItem) {
      if (todoItem.completed) {
        todoElement.classList.add('done');
      } else {
        todoElement.classList.remove('done');
      }
    }
  }
}

function addTodo(title, description, dueDate, priority, projectName = 'Default') {
  const todo = TodoFactory(title, description, dueDate, priority);

  projects.forEach((project) => {
    if (project.name === projectName) {
      project.todos.push(todo);
    }
  });
  saveDataToLocal();
}

function updateTodo(todoId, title, description, dueDate, priority, projectName) {
  projects.forEach((project) => {
    if (projectName === project.name) {
      project.todos.forEach((todo) => {
        if (todo.id === todoId) {
          todo.title = title;
          todo.description = description;
          todo.dueDate = dueDate;
          todo.priority = priority;
          todo.projectId = project.id;
        }
      });
    }
  });
  saveDataToLocal();
}

function removeTodo(todoId, projectId) {
  projects.forEach((project) => {
    if (project.id === projectId) {
      project.todos.forEach((todo, index) => {
        if (todoId === todo.id) {
          project.todos.splice(index, 1);
        }
      });
    }
  });

  saveDataToLocal();
}

function toggleTodoStatus(projectId, todoId) {
  const projectData = projects.find((project) => project.id === projectId);

  if (projectData) {
    const todoData = projectData.todos.find((todo) => todo.id === todoId);

    if (todoData) {
      todoData.completed = !todoData.completed;
      updateTodoUI(todoId);
    }
  }

  saveDataToLocal();
}

function addProject(name) {
  projects.push(ProjectFactory(name));
  saveDataToLocal();
}

function addNote(title, details) {
  const note = NoteFactory(title, details);
  notes.push(note);
  saveDataToLocal();
}

function findTodoById(todoId) {
  let todoItem = null;

  projects.forEach((project) => {
    project.todos.forEach((todo) => {
      if (todo.id === todoId) {
        todoItem = todo;
      }
    });
  });

  return todoItem;
}



export {
  addTodo, addProject, addNote, removeTodo, toggleTodoStatus, findTodoById, updateTodo,
};

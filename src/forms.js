import { projects } from './data';
import {
  addTodo, addProject, addNote, findTodoById, updateTodo,
} from './crud';
import {
  displayProjects,
  displayTodos,
  toggleProjectDisplay,
} from './displayTodo';

function modal() {
  const modal = document.createElement('dialog');
  modal.classList.add('modal__forms');

  const buttonsDiv = document.createElement('div');
  buttonsDiv.classList.add('modal__forms__buttons-container');

  const todoBtn = document.createElement('button');
  todoBtn.textContent = 'To Do';
  const projectBtn = document.createElement('button');
  projectBtn.textContent = 'Project';
  const noteBtn = document.createElement('button');
  noteBtn.textContent = 'Note';

  const formDiv = document.createElement('div');
  formDiv.classList.add('modal__forms__form-container');
  todoBtn.addEventListener('click', () => {
    emptyDiv(formDiv);
    formDiv.appendChild(createTodoForm());
  });
  projectBtn.addEventListener('click', () => {
    emptyDiv(formDiv);
    formDiv.appendChild(createProjectForm());
  });
  noteBtn.addEventListener('click', () => {
    emptyDiv(formDiv);
    formDiv.appendChild(createNoteForm());
  });

  buttonsDiv.appendChild(todoBtn);
  buttonsDiv.appendChild(projectBtn);
  buttonsDiv.appendChild(noteBtn);
  modal.appendChild(buttonsDiv);
  modal.appendChild(formDiv);
  content.appendChild(modal);

  openModal(modal);
}

function openModal(node) {
  node.showModal();
}

function closeModal() {
  const modal = document.querySelector('dialog');
  modal.remove();
}

function emptyDiv(node) {
  if (node) {
    node.innerHTML = '';
  }
}

function getProjectNames() {
  return projects.map((project) => project.name);
}

function getProjectNameById(projectId) {
  let projectName = null;

  projects.forEach((project) => {
    if (project.id === projectId) {
      projectName = project.name;
    }
  });
  return projectName;
}

function createTodoForm() {
  const todoForm = document.createElement('form');
  todoForm.method = 'dialog';
  todoForm.classList.add('modal__forms__todoForm');
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'todoTitle');
  titleInput.setAttribute('required', 'true');
  titleInput.placeholder = 'Title';

  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('name', 'todoDescription');
  descriptionInput.placeholder = 'Enter details';

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('name', 'todoDueDate');
  dueDateInput.setAttribute('required', 'true');

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  const priorityInput = document.createElement('select');
  priorityInput.setAttribute('name', 'todoPriority');
  const priorityOptions = ['High', 'Medium', 'Low'];
  priorityInput.setAttribute('required', 'true');

  for (const option of priorityOptions) {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    priorityInput.appendChild(optionElement);
  }

  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project:';
  const projectInput = document.createElement('select');
  const projectOptions = getProjectNames();

  for (const option of projectOptions) {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    projectInput.appendChild(optionElement);
  }

  projectInput.setAttribute('name', 'todoProject');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Add Todo';

  todoForm.appendChild(titleInput);
  todoForm.appendChild(descriptionInput);
  todoForm.appendChild(dueDateLabel);
  todoForm.appendChild(dueDateInput);
  todoForm.appendChild(priorityLabel);
  todoForm.appendChild(priorityInput);
  todoForm.appendChild(projectLabel);
  todoForm.appendChild(projectInput);
  todoForm.appendChild(submitButton);

  todoForm.addEventListener('submit', todoFormHandler);

  return todoForm;
}

function createProjectForm() {
  const projectForm = document.createElement('form');
  projectForm.classList.add('modal__forms__projectForm');

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'projectTitle');
  titleInput.placeholder = 'Title';

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Create Project';

  projectForm.appendChild(titleInput);
  projectForm.appendChild(submitButton);

  projectForm.addEventListener('submit', projectFormHandler);

  return projectForm;
}

function createNoteForm() {
  const noteForm = document.createElement('form');
  noteForm.classList.add('modal__forms__noteForm');

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'noteTitle');
  titleInput.setAttribute('required', 'true');
  titleInput.placeholder = 'Title';

  const detailsTextarea = document.createElement('textarea');
  detailsTextarea.setAttribute('name', 'noteDetails');
  detailsTextarea.setAttribute('rows', '4');
  detailsTextarea.setAttribute('required', 'true');
  detailsTextarea.placeholder = 'Details';

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Add Note';

  noteForm.appendChild(titleInput);
  noteForm.appendChild(detailsTextarea);
  noteForm.appendChild(submitButton);

  noteForm.addEventListener('submit', noteFormHandler);

  return noteForm;
}

function todoFormHandler(event) {
  event.preventDefault();
  const title = event.target.todoTitle.value;
  const description = event.target.todoDescription.value;
  const dueDate = event.target.todoDueDate.value;
  const priority = event.target.todoPriority.value;
  const projectName = event.target.todoProject.value;

  addTodo(title, description, dueDate, priority, projectName);
  displayTodos(projectName);

  event.target.reset();
  closeModal();
}

function projectFormHandler(event) {
  event.preventDefault();
  const title = event.target.projectTitle.value;
  addProject(title);
  displayProjects();
  event.target.reset();
  closeModal();
}

function noteFormHandler(event) {
  event.preventDefault();
  const title = event.target.noteTitle.value;
  const details = event.target.noteDetail.value;
  addNote(title, details);
  event.target.reset();
  closeModal();
}

function editForm(todoId) {
  const editModal = document.createElement('dialog');
  editModal.classList.add('modal__edit');

  const editForm = document.createElement('form');
  editForm.method = 'dialog';

  const todo = findTodoById(todoId);

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'todoTitle');
  titleInput.setAttribute('required', 'true');
  titleInput.value = todo.title;

  const descriptionInput = document.createElement('input');
  descriptionInput.setAttribute('type', 'text');
  descriptionInput.setAttribute('name', 'todoDescription');
  descriptionInput.value = todo.description;

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date:';
  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('type', 'date');
  dueDateInput.setAttribute('name', 'todoDueDate');
  dueDateInput.setAttribute('required', 'true');

  const priorityInput = document.createElement('select');
  priorityInput.setAttribute('name', 'todoPriority');
  const priorityOptions = ['High', 'Medium', 'Low'];
  priorityInput.setAttribute('required', 'true');

  for (const option of priorityOptions) {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    if (option === todo.priority) {
      optionElement.selected = true;
    }
    priorityInput.appendChild(optionElement);
  }

  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project:';
  const projectInput = document.createElement('select');
  const projectOptions = getProjectNames();

  for (const option of projectOptions) {
    const optionElement = document.createElement('option');
    optionElement.textContent = option;
    if (option === getProjectNameById(todo.projectId)) {
      optionElement.selected = true;
    }
    projectInput.appendChild(optionElement);
  }
  projectInput.setAttribute('name', 'todoProject');

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'Save changes';

  editForm.appendChild(titleInput);
  editForm.appendChild(descriptionInput);
  editForm.appendChild(dueDateInput);
  editForm.appendChild(priorityInput);
  editForm.appendChild(projectInput);
  editForm.appendChild(submitButton);

  editForm.addEventListener('submit', (event) => {
    editHandler(event, todo.id);
  });

  editModal.appendChild(editForm);
  document.querySelector('#content').appendChild(editModal);
  openModal(editModal);
}

function editHandler(event, todoId) {
  event.preventDefault();
  const title = event.target.todoTitle.value;
  const description = event.target.todoDescription.value;
  const dueDate = event.target.todoDueDate.value;
  const priority = event.target.todoPriority.value;
  const projectName = event.target.todoProject.value;

  updateTodo(todoId, title, description, dueDate, priority, projectName);
  displayTodos(projectName);

  closeModal();
}

export {
  modal, openModal, closeModal, editForm,
};

import { addTodo, addProject } from "./crud"

function modal(){
    const modal = document.createElement("dialog")

    const todoBtn = document.createElement("button")
    todoBtn.textContent = "To Do"
    const projectBtn = document.createElement("button")
    projectBtn.textContent = "Project"
    const noteBtn = document.createElement("button")
    noteBtn.textContent = "Note"

    const formDiv = document.createElement("div")
    todoBtn.addEventListener("click", () => {
        emptyDiv(formDiv)
        formDiv.appendChild(createTodoForm())
    })
    projectBtn.addEventListener("click", () => {
        emptyDiv(formDiv)
        formDiv.appendChild(createProjectForm())
    })
    noteBtn.addEventListener("click", () => {
        emptyDiv(formDiv)
        formDiv.appendChild(createNoteForm())
    })

    modal.appendChild(todoBtn)
    modal.appendChild(projectBtn)
    modal.appendChild(noteBtn)
    modal.appendChild(formDiv)
    content.appendChild(modal)

    openModal(modal)
}

function openModal(node){
    node.showModal()
}

function closeModal(node){
    node.remove()
}

function emptyDiv(node) {
    if (node) {
      node.innerHTML = '';
    }
  }


function createTodoForm() {
    const todoForm = document.createElement('form');
    todoForm.method = "dialog"
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'todoTitle');
  
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('name', 'todoDescription');
  
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('name', 'todoDueDate');
  
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    const priorityInput = document.createElement('select');
    priorityInput.setAttribute('name', 'todoPriority');
    const priorityOptions = ['High', 'Medium', 'Low'];
  
    for (const option of priorityOptions) {
      const optionElement = document.createElement('option');
      optionElement.textContent = option;
      priorityInput.appendChild(optionElement);
    }
  
    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project:';
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.setAttribute('name', 'todoProject');
  
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add Todo';
  
    // Append input fields and button to the form
    todoForm.appendChild(titleLabel);
    todoForm.appendChild(titleInput);
    todoForm.appendChild(descriptionLabel);
    todoForm.appendChild(descriptionInput);
    todoForm.appendChild(dueDateLabel);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(priorityLabel);
    todoForm.appendChild(priorityInput);
    todoForm.appendChild(projectLabel);
    todoForm.appendChild(projectInput);
    todoForm.appendChild(submitButton);

    todoForm.addEventListener("submit", todoFormHandler)
  
    return todoForm;
  }
  
  // Function to create a Project form
  function createProjectForm() {
    const projectForm = document.createElement('form');
  
    // Create an input field for project title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Project Title:';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'projectTitle');
  
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Create Project';
  
    // Append input field and button to the form
    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(submitButton);

    projectForm.addEventListener("submit", projectFormHandler)
  
    return projectForm;
  }

  function createNoteForm() {
    const noteForm = document.createElement('form');
  
    // Create an input field for note title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Note Title:';
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'noteTitle');
  
    // Create a textarea for note details
    const detailsLabel = document.createElement('label');
    detailsLabel.textContent = 'Note Details:';
    const detailsTextarea = document.createElement('textarea');
    detailsTextarea.setAttribute('name', 'noteDetails');
    detailsTextarea.setAttribute('rows', '4'); // Adjust rows as needed
  
    // Create a submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Add Note';
    
  
    // Append input fields and button to the form
    noteForm.appendChild(titleLabel);
    noteForm.appendChild(titleInput);
    noteForm.appendChild(detailsLabel);
    noteForm.appendChild(detailsTextarea);
    noteForm.appendChild(submitButton);

    
  
    return noteForm;
  }

function todoFormHandler(event){
    event.preventDefault()
    const title = event.target.todoTitle.value;
    const description = event.target.todoDescription.value;
    const dueDate = event.target.todoDueDate.value;
    const priority = event.target.todoPriority.value;
    const project = event.target.todoProject.value;
  
    addTodo(title, description, dueDate,priority, 1)

    event.target.reset();
}

function projectFormHandler(event){
  event.preventDefault()
  const title = event.target.projectTitle.value;
  addProject(title)
  event.target.reset();
}

export default modal;
  
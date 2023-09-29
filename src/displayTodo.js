import TrashIcon from "./assets/delete.png"
import EditIcon from "./assets/edit.png"
import {projects, notes} from "./data";
import { openModal, closeModal, editForm } from "./forms";
import { toggleTodoStatus, removeTodo} from "./crud";
import formatDate from "./date";

let projectsDisplayed = false;

function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    } else {
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  }

function detailsModal(details){
    const content = document.querySelector("#content")

    const modal = document.createElement("dialog")
    modal.classList.add("details__modal")

    const text = document.createElement("p")
    text.textContent = details
    modal.appendChild(text)

    const closeButton = document.createElement("button")
    closeButton.textContent = "X"
    closeButton.classList.add("details__close-button")
    closeButton.addEventListener("click", closeModal)


    modal.appendChild(closeButton)
    content.appendChild(modal)
    openModal(modal)
}

function displayTodos(projectName) {
    const todoDisplay = document.querySelector(".todoDisplay");
    emptyDiv(todoDisplay);

    projects.forEach(project => {
        if (project.name === projectName) {
            project.todos.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("todo-card");
                card.classList.add(item.priority.toLowerCase())
                card.id = `todo-${item.id}`;
                card.setAttribute('data-priority', item.priority.toLowerCase());

                // Create a label element to wrap the content and checkbox
                const label = document.createElement("label");
                const content = `
                    <h1>${item.title}</h1>
                    <p>In ${formatDate(item.dueDate)}</p>
                `;

                const detailsButton = document.createElement("button");
                detailsButton.textContent = "Details";
                detailsButton.classList.add("details-button")
                detailsButton.addEventListener("click", () => detailsModal(item.description));

                const completeCheckbox = document.createElement("input");
                completeCheckbox.type = "checkbox";
                completeCheckbox.classList.add("todo-checkbox");
                completeCheckbox.id = `checkbox-${item.id}`;

                label.htmlFor = `checkbox-${item.id}`;
                label.addEventListener("change", (event) => {
                    completeCheckbox.checked = !completeCheckbox.checked;
                    toggleTodoStatus(project.id, item.id);
                });

                const editButton = document.createElement("button");
                editButton.classList.add("edit-button");
                const editIcon = new Image();
                editIcon.src = EditIcon
                editButton.appendChild(editIcon)
                editButton.addEventListener("click", () => editForm(item.id));
                

                const deleteButton = document.createElement("button")
                deleteButton.classList.add("delete-button");
                const deleteIcon = new Image()
                deleteIcon.src = TrashIcon

                deleteButton.addEventListener("click", (event) => {
                    event.stopPropagation();
                    removeTodo(item.id, project.id);
                    card.remove();
                });

                deleteButton.appendChild(deleteIcon);


                label.appendChild(completeCheckbox);
                label.innerHTML += content;
                label.appendChild(detailsButton);
                label.appendChild(editButton);
                label.appendChild(deleteButton)
                

                card.appendChild(label);

                todoDisplay.appendChild(card);
            });
        }
    });
}


function toggleProjectDisplay(){
    projectsDisplayed = !projectsDisplayed
    if (projectsDisplayed){
        displayProjects()
    } else {
        emptyDiv(document.querySelector(".sidebar__projects"))
    }
}

function displayProjects(){
    const projectsDiv = document.querySelector(".sidebar__projects")
    emptyDiv(projectsDiv)
    projects.forEach(project => {
        if (project.id === 1){
            return;
        }
        const projectName = document.createElement("div")
        projectName.textContent = project.name
        projectsDiv.appendChild(projectName)
        projectName.addEventListener("click", () => displayTodos(project.name))
    })
}

function displayNotes(){
    const todoDisplay = document.querySelector(".todoDisplay")
    emptyDiv(todoDisplay)

    notes.forEach(note => {
        const noteCard = document.createElement("div")
        noteCard.classList.add("note-card")
        
        const content = `
            <h1>${note.title}</h1>
            <p>${note.details}</p>
        `

        noteCard.innerHTML = content

        todoDisplay.appendChild(noteCard)
    })
}

function emptyDiv(node){
    node.innerHTML = ""
}

function updateTodoUI(todoId) {
    const todoElement = document.getElementById(`todo-${todoId}`);
  
    if (todoElement) {
      let todoItem = null;
  
      const project = projects.find(project => project.todos.some(todo => todo.id === todoId));
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
    else {
        console.log("Not Found")
    }
}



export {toggleProjectDisplay, displayTodos, displayNotes, displayProjects, updateTodoUI}
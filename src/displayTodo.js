import TrashIcon from "./assets/delete.png"
import {projects, notes} from "./data";
import { openModal, closeModal } from "./forms";
import { toggleTodoStatus, removeTodo} from "./crud";

let projectsDisplayed = false;

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
                card.dataset.todoId = item.id;

                // Create a label element to wrap the content and checkbox
                const label = document.createElement("label");

                const content = `
                    <h1>${item.title}</h1>
                    <p>${item.dueDate}</p>
                `;

                const detailsButton = document.createElement("button");
                detailsButton.textContent = "Details";
                detailsButton.addEventListener("click", () => detailsModal(item.description));

                const completeCheckbox = document.createElement("input");
                completeCheckbox.type = "checkbox";
                completeCheckbox.classList.add("todo-checkbox");
                completeCheckbox.id = `checkbox-${item.id}`;
                label.htmlFor = `checkbox-${item.id}`;
                label.addEventListener("click", () => {
                    completeCheckbox.checked = !completeCheckbox.checked;
                    toggleTodoStatus(project.id, item.id);
                });

                const deleteButton = document.createElement("button")
                deleteButton.classList.add("delete-button");
                const deleteIcon = new Image()
                deleteIcon.src = TrashIcon

                deleteButton.addEventListener("click", () => {
                    removeTodo(item.id, project.id);
                    card.remove();
                });

                deleteButton.appendChild(deleteIcon);


                label.appendChild(completeCheckbox);
                label.innerHTML += content;
                label.appendChild(detailsButton);
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
        emptyDiv(document.querySelector(".projectsDiv"))
    }
}

function displayProjects(){
    const projectsDiv = document.querySelector(".projectsDiv")
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
    const todoElements = document.querySelectorAll(".todo-card");

    todoElements.forEach(todoElement => {
        const id = todoElement.dataset.todoId // Assuming you have a data attribute to store the todo id
        if (id === todoId) {
            const checkbox = todoElement.querySelector(".todo-checkbox");
            const isCompleted = checkbox.checked;

            if (isCompleted) {
                todoElement.classList.add('done'); // Add a CSS class for styling
            } else {
                todoElement.classList.remove('done'); // Remove the "done" styling
            }
        }
    });
}

export {toggleProjectDisplay, displayTodos, displayNotes, displayProjects, updateTodoUI}
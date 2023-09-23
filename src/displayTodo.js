import {projects, notes} from "./data";
import { openModal, closeModal } from "./forms";

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

function displayTodos(projectName){
    const todoDisplay = document.querySelector(".todoDisplay")
    emptyDiv(todoDisplay)
    projects.forEach(project => {
        if (project.name=== projectName){
            project["todos"].forEach(item => {
                const card = document.createElement("div")
                card.classList.add("todo-card")

                const content = `
                    <input type="checkbox">
                    <h1>${item.title}</h1>
                    <p>${item.dueDate}</p>
                `

                const detailsButton = document.createElement("button")
                detailsButton.textContent = "Details"
                detailsButton.addEventListener("click", () => detailsModal(item.description))
            
                card.innerHTML = content
                card.appendChild(detailsButton)

                todoDisplay.appendChild(card)
            })
        }
    })
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

export {toggleProjectDisplay, displayTodos, displayNotes, displayProjects}
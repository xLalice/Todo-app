import Logo from "./assets/logo.png";
import {modal} from "./forms";
import {displayTodos, toggleProjectDisplay, displayNotes, displayProjects} from "./displayTodo";

const content = document.querySelector("#content")

function setNav(){
    const nav = document.createElement("nav")
    const myLogo = new Image()
    myLogo.src = Logo;
    nav.appendChild(myLogo)
    content.appendChild(nav)
}

function setSidebar(){
    const sidebar = document.createElement("div")
    sidebar.classList.add("sidebar")
    
    const home = document.createElement("div")
    home.classList.add("sidebar__item")
    home.textContent = "Home"
    home.addEventListener("click", () => displayTodos("Default"))
    const projects = document.createElement("div")
    projects.classList.add("sidebar__item")
    projects.textContent = "Projects"
    projects.addEventListener("click", toggleProjectDisplay)
    const projectsDiv = document.createElement("div")
    projectsDiv.classList.add("projectsDiv")


    const notes = document.createElement("div")
    notes.classList.add("sidebar__item")
    notes.textContent = "Notes"
    notes.addEventListener("click", displayNotes)


    const addButton = document.createElement("button")
    addButton.classList.add("addButton")
    addButton.textContent = "+"
    addButton.addEventListener("click", modal)

    sidebar.appendChild(home)
    sidebar.appendChild(projects)
    sidebar.appendChild(projectsDiv)
    sidebar.appendChild(notes)
    sidebar.appendChild(addButton)
    

    content.appendChild(sidebar)
}

function setTodoDisplay(){
    const todoDisplay = document.createElement("div")
    todoDisplay.classList.add("todoDisplay")

    content.appendChild(todoDisplay)
}



function firstLoad(){
    setNav()
    setSidebar()
    setTodoDisplay()
    displayTodos("Default")
    displayProjects()
}

export {firstLoad};
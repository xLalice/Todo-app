import projects from "./data";

let projectsDisplayed = false;

function displayTodos(projectId = 1){
    const todoDisplay = document.querySelector(".todoDisplay")
    emptyDiv(todoDisplay)
    projects.forEach(project => {
        if (project.id === projectId){
            project["todos"].forEach(item => {
                const card = document.createElement("div")
                card.classList.add("todo-card")

                const content = `
                    <input type="checkbox">
                    <h1>${item.title}</h1>
                    <p>${item.description}</p>
                    <p>${item.dueDate}</p>
                `

                card.innerHTML = content

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
    projects.forEach(project => {
        if (project.id === 1){
            return;
        }
        const projectName = document.createElement("div")
        projectName.textContent = project.name
        projectsDiv.appendChild(projectName)
        projectName.addEventListener("click", () => displayTodos(project.id))
    })
}

function emptyDiv(node){
    node.innerHTML = ""
}

export {toggleProjectDisplay, displayTodos}
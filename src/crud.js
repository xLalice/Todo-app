import { TodoFactory, ProjectFactory } from "./factories";
import projects from "./data";

function addTodo(title,description,dueDate,priority, projectId = 1){
    const todo = TodoFactory(title, description, dueDate, priority)

    projects.forEach(project => {
        if (project.id === projectId){
            project["todos"].push(todo)
            console.log(project)
        }
    })
}

function removeTodo(todoId, projectId){
    projects.forEach(project => {
        if (project.id === projectId){
            project["todos"].forEach((todo, index) => {
                if (todoId === todo.id){
                    project["todos"].splice(index, 1)
                }
            })
        }
        
    })
    
}

function addProject(name){
    projects.push(ProjectFactory(name))
    console.table(projects)
}

export {addTodo, addProject, removeTodo}
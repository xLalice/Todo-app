import { TodoFactory, ProjectFactory } from "./factories";
import projects from "./data";

function addTodo(todo, project = 1){
    projects.forEach(project => {
        if (project.id === projectId){
            elem["todos"].push(todo)
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
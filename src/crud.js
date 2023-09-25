import { TodoFactory, ProjectFactory, NoteFactory } from "./factories";
import {projects, notes} from "./data";
import { updateTodoUI } from "./displayTodo";

function addTodo(title,description,dueDate,priority, projectId = 1){
    const todo = TodoFactory(title, description, dueDate, priority)

    projects.forEach(project => {
        if (project.id === projectId){
            project["todos"].push(todo)
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

function toggleTodoStatus(projectId, todoId) {
    const project = projects.find(project => project.id === projectId);

    if (project) {
        const todo = project.todos.find(todo => todo.id === todoId);

        if (todo) {
            todo.completed = !todo.completed;
            updateTodoUI(todoId); 
            console.log(todo)
            return todo.completed;
        }
    }
    return false;
}

function addProject(name){
    projects.push(ProjectFactory(name))
}

function addNote(title, details){
    const note = NoteFactory(title, details)
    notes.push(note)
}



export {addTodo, addProject, addNote, removeTodo, toggleTodoStatus}
function TodoFactory(title, description, dueDate, priority, projectId){
    const uniqueId = generateUniqueId()
    return {
        id: uniqueId,
        title,
        description,
        dueDate,
        priority,
        projectId,
        completed: false
    }
}

function ProjectFactory(name){
    return {
        id: generateUniqueId(),
        name,
        todos: []
    }
}

function NoteFactory(title, details){
    return {
        id: generateUniqueId(),
        title,
        details
    }
}

function generateUniqueId() {
    const randomPart = Math.random().toString(36).substr(2, 9);
  
    const timestampPart = new Date().getTime().toString(36);
  
    const uniqueId = timestampPart + randomPart;
  
    return uniqueId;
}

export {TodoFactory, ProjectFactory, NoteFactory}
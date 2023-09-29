import { TodoFactory } from "./factories";

let projects = [
    {
        id: 1,
        name: "Default",
        todos: [
            TodoFactory("Workout", "Chest and arms", "2023-09-25", "High", 1),
            TodoFactory("Cardio", "30 minutes on the treadmill", "2023-09-26", "Medium", 1),
            TodoFactory("Stretching", "10 minutes of stretching", "2023-09-27", "Low", 1)
        ]
    },
    {
        id: 2,
        name: "Home Improvement",
        todos: [
            TodoFactory("Paint the living room", "Buy paint and brushes", "2023-10-05", "High", 2),
            TodoFactory("Fix the leaky faucet", "Turn off the water supply", "2023-10-10", "Medium", 2),
            TodoFactory("Clean the gutters", "Use a ladder and gloves", "2023-10-15", "Low", 2)
        ]
    },
    {
        id: 3,
        name: "Work Projects",
        todos: [
            TodoFactory("Client Presentation", "Prepare slides and data", "2023-09-30", "High", 3),
            TodoFactory("Code Review", "Check for bugs and performance", "2023-10-03", "Medium", 3),
            TodoFactory("Team Meeting", "Discuss project progress", "2023-10-06", "Low", 3)
        ]
    }
];

let notes = [
    {
        title: "Note 1",
        details: "This is the first dummy note. It has some details."
    },
    {
        title: "Note 2",
        details: "The second dummy note has different details than the first one."
    },
    {
        title: "Note 3",
        details: "This is another note with some additional details."
    }
]

function saveDataToLocal(){
    if (typeof Storage !== 'undefined') {
        localStorage.setItem('projects', JSON.stringify(projects))
        localStorage.setItem('notes', JSON.stringify(notes))
    } else {
        console.log('No Local Storage')
    }
}

function loadDataFromLocal(){
    if (typeof Storage !== 'undefined') {
        const savedProjects = localStorage.getItem('projects');
        const savedNotes = localStorage.getItem('notes');

        if (savedProjects){
            projects = JSON.parse(savedProjects);
        }

        if (savedNotes){
            notes = JSON.parse(savedNotes);
        }
    } else {
        console.log('No Local Storage')
    }
}

export {projects, notes, saveDataToLocal, loadDataFromLocal};
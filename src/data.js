import { TodoFactory } from "./factories";

const projects = [
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
            TodoFactory("Code Review", "Check for bugs and performance", "2023-10-03", "Medium"), 3,
            TodoFactory("Team Meeting", "Discuss project progress", "2023-10-06", "Low", 3)
        ]
    }
];


export default projects;
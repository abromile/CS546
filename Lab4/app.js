const todoItems = require("./todo");


// CREATE TASK

let createdTask = todoItems.createTask("My First Task", "This is the first thing I need to do today");

createdTask.then((newTask) => {
    console.log(newTask);
});
    
console.log("IS THIS WORKING?");
    
// GET TASK
    
let taskPromise = todoItems.getTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");

taskPromise.then((task) => {
    console.log(task);
})
    
// UPDATE TASK
    
//let taskPromise = todoItems.getTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");

let updateTask = taskPromise.then((task) => {
    console.log(task);
    
    task.completed = true;
    
    return todoItems.updateTask(task);    
});

updateTask.then((updatedTask) => {
    console.log(updatedTask);
});
    
// REMOVE TASK

let removeTask = todoItems.removeTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");

let tryToGetTask = removeTask.then(() => {
    return todoItems.getTask("9714a17c-f228-49e9-a772-9086f5ff8bfb");
});

tryToGetTask.then(() => {}, (error) => {
    // Should error out
    console.error(error);
})
const todo = require("./todo");
const storage = require("./storage");
const uuid = require("node-uuid");

let newTask = todo.createTask("Lab 2", "Finish lab 2");
console.log(newTask);
let newTask2 = todo.createTask("Testing", "Test lab 2");
console.log(newTask2);
let newTask3 = todo.createTask("Lab 3", "Finish lab 3");
console.log(newTask3);
todo.completeTask(newTask);
console.log(newTask);

// That got me the following output, seems okay
//{ id: 'b77f7cfe-1b14-462c-aeaf-3c75cca9b03e',
//  title: 'Lab 2',
//  description: 'Finish lab 2',
//  completed: false,
//  timeCompleted: null }
//{ id: '17961138-d7fb-4f87-b86e-b7521819d1a0',
//  title: 'Testing',
//  description: 'Test lab 2',
//  completed: false,
//  timeCompleted: null }
//{ id: '8fc28c5d-086b-4edc-8c0d-f68bf8b60cbb',
//  title: 'Lab 3',
//  description: 'Finish lab 3',
//  completed: false,
//  timeCompleted: null }
//{ id: 'b77f7cfe-1b14-462c-aeaf-3c75cca9b03e',
//  title: 'Lab 2',
//  description: 'Finish lab 2',
//  completed: true,
//  timeCompleted: 2016-06-01T20:45:28.530Z }

// Trying to pass newTask.id to todo.completeTask got me this:
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\todo.js:24
//            throw "Must have a valid task object.";
//            ^
//Must have a valid task object.

// let newTask4 = todo.createTask(12, "twelve"); got me:
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\todo.js:7
//            throw "Must have a valid title.";
//            ^
//Must have a valid title.

//let newTask4 = todo.createTask("twelve", 12); got me:
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\todo.js:10
//            throw "Must have a valid description.";
//            ^
//Must have a valid description.

//let newTask4 = todo.createTask(); got me:
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\todo.js:7
//            throw "Must have a valid title.";
//            ^
//Must have a valid title.

//let newTask4 = todo.createTask("title"); got me:
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\todo.js:10
//            throw "Must have a valid description.";
//            ^
//Must have a valid description.



let stor1 = storage.set(123, "foo");
console.log(stor1);
console.log(storage.get(123));
let stor2 = storage.set(456, "bar");
console.log(stor2);
console.log(storage.get(456));
let stor3 = storage.set(123456, "foobar");
console.log(stor3);
console.log(storage.get(123456));
let stor4 = storage.set(1, "oops");
console.log(stor4);
console.log(storage.get(1));

storage.unset(1);
console.log(stor4); // not working

let rewrite = storage.set(123, "fooo");
console.log(rewrite);

//foo
//foo
//bar
//bar
//foobar
//foobar
//oops
//oops
//oops
//fooo

//let stor5 = storage.set();
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:9
//            throw "ID cannot be undefined.";
//            ^
//ID cannot be undefined.

//let stor5 = storage.set("id");
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:12
//            throw "Data cannot be undefined.";
//            ^
//Data cannot be undefined.

//storage.get();
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:32
//            throw "ID cannot be undefined.";
//            ^
//ID cannot be undefined.

//storage.get(343242);
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:35
//            throw "ID does not exist.";
//            ^
//ID does not exist.

//storage.unset();
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:21
//            throw "ID cannot be undefined.";
//            ^
//ID cannot be undefined.

//storage.unset(3423);
//C:\Users\Class2017\Desktop\Programming\cs546\Lab 2\storage.js:24
//            throw "ID does not exist.";
//            ^
//ID does not exist.









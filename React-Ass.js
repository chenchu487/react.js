
// // PART – 1 : Variables & Datatypes

// // 1. Create 3 variables using var, let, const.

// var a = 10;
// let b = "Hello";
// const c = true;

// // 2. Print datatype of: "123", 123, true, undefined, null, [1,2], {a:1}

// console.log(typeof "123");       
// console.log(typeof 123);         
// console.log(typeof true);        
// console.log(typeof undefined);   
// console.log(typeof null);        
// console.log(typeof [1,2]);       
// console.log(typeof {a:1});    


// // PART 2 : Operators

// // 3. Apply arithmetic operators on a=10, b=3.

// let x = 10, y = 3;


// console.log(x + y); // 10 + 3 = 13
// console.log(x - y); // 10 - 3 = 7
// console.log(x * y); // 10 * 3 = 30
// console.log(x / y); // 10 / 3 = 3.333
// console.log(x % y); // 10 % 3 = 1 
// console.log(x ** y); // 10 ** 3 = 10*10*10=1000

// // console.log(x++); // post increment 
// //console.log(--y); // pre decrement
// console.log(++x); // pre increment

// // 4. Compare: 5=="5", 5==="5", 5!="5", 5!==5

// console.log(5 == "5");     // true
// console.log(5 === "5");    // false
// console.log(5 != "5");     // false
// console.log(5 !== 5);      // false

// // 5. Evaluate: (true && false) || (!false)

// console.log((true && false) || (!false)); // true

// // PART 3 : Conditions

// // 6. Ask user age → print license eligibility.

// let age = 18;
// if (age >= 18){
//     console.log("Eligible for license"); // Eligible for license

// }
// else{
//     console.log("Not eligible for license");  
// }

// // 7. Traffic light program using switch.

// let signal = "red";

// switch(signal){
//     case "red":
//         console.log("Stop");  // Stop
//         break;
//     case "yellow":
//         console.log("Get Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid signal");
// } 

// // PART 4 : Loops

// // 8. Print 1–10 using for, while, do-while.

// // for loop

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// // While loop 

// let W = 1;
// while (W <= 10){
//     console.log(W);
//     W++;
// }

// // Do-While loop

// let D = 1;
// do {
//     console.log(D);
//     D++;
// } while (D <= 10);


// // 9. Print each character of "javascript".

// let str = "javascript";

// for (let char of str){
//     console.log(char);
// }

// // 10. Loop through an object using for...in.

// let obj = { name: "John", age: 30, city: "BNG" };

// for (let Loop in obj){
//     console.log(Loop ," : " + obj[Loop]);
// }

// // PART 5 : Functions

// // 11. Write named, anonymous, arrow function.

// function add(a, b) {
//     return a + b;
// }

// const sub = function(a, b) {
//     return a - b;
// };

// const mul = (a, b) => a * b;

// // 12. Function with default parameter.

// function greet(name = "Guest") {
//     console.log("Hello", name);
// }
// greet();
// greet("Ram");


// // PART 6 : Higher Order Function

// // 13. add(a,b) and sub(a,b) – call sub inside add.
// function subtract(a, b) {
//     return a - b;
// }

// function addition(a, b) {
//     console.log("Using subtract inside add:", subtract(a, b));
//     return a + b;
// }

// console.log(addition(10, 5));

// // PART 7 : Generator

// // 14. Generator yielding 4 messages; print next().value.

// function* messages() {
//     yield "Message 1";
//     yield "Message 2";
//     yield "Message 3";
//     yield "Message 4";
// }

// const gen = messages();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// // PART 8 : Arrays

// //  15. Fruits array – print first, last, and loop.

// let fruits = ["Apple", "Banana", "Mango"];

// console.log("First:", fruits[0]);
// console.log("Last:", fruits[fruits.length - 1]);

// fruits.forEach(fruit => console.log(fruit));


// // PART 9 : Objects

// // 16. Fruits categorized by colors.

// let fruitColors = {
//     red: ["Apple", "Cherry"],
//     yellow: ["Banana"],
//     green: ["Grapes", "Guava"]
// };

// for (let color in fruitColors) {
//     console.log(color, ":", fruitColors[color]);
// }

// // PART 10 : ES6 

// // 17. Spread operator merging two arrays. 

// let arr1 = [1,2];
// let arr2 = [3,4];
// let merged = [...arr1, ...arr2];
// console.log(merged);


// // 18. Rest operator function sum(a,b,...rest). 

// function sum(a, b, ...rest) {
//     let total = a + b;
//     for (let val of rest) total += val;
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// // 19. Destructure first 3 marks

// let marks = [90, 80, 70, 60 , 50];
// let [m1, m2, m3] = marks;
// console.log(m1, m2, m3);




// To - Do App : 


const todoInput = document.querySelector('.To-do-Input');
const todoAddButton = document.querySelector('.To-do-Add-Button');
const todoList = document.querySelector('.To-do-List');
const clearButton = document.querySelector('.To-do-Clear-Button');
let ul = document.querySelector("ul")

// Add Task

function addTask() {
    if (todoInput.value === "") {
        alert("You have To add task first!")

    } else {
        let taskText = document.createElement('li');
        taskText.classList.add("To-do-Item");
        taskText.innerHTML = `${todoInput.value} <span class="delete-btn">×</span>`;


        taskText.addEventListener("click", () => {
            taskText.classList.toggle("Checked");


        });

        taskText.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            taskText.remove();
        });



        todoList.appendChild(taskText);
        todoInput.value = "";

    }

}

todoAddButton.addEventListener("click", () => {
    addTask();
});


// Clear Tasks 

function clearAllTasks() {

    if (todoList.innerHTML === "") {
        alert("The list is already empty!");
        return;
    }

    let getUser = confirm("Are you sure you want to clear all tasks?");

    if (getUser) {
        todoList.innerHTML = "";
    }
}


clearButton.addEventListener("click", clearAllTasks);


// Calculator 

const display = document.getElementById("calc-display");
const buttons = document.querySelectorAll(".btn");
const historyList = document.getElementById("history-list");
const historyIcon = document.querySelector(".history-icon");

let currentExpression = "";

function updateDisplay(value) {
    display.value = value;
}



// Add calculation to history
function addToHistory(expression, result) {
    let li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;

    // Click on history item → load back into calculator
    li.addEventListener("click", () => {
        display.value = result;
        currentExpression = result.toString();

        historyList.classList.remove("show"); // Hide history
    });

    historyList.prepend(li); // Add at top
}

// Show & Hide History on icon click
historyIcon.addEventListener("click", () => {
    historyList.classList.toggle("show");
});

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const key = btn.getAttribute("data-key");

        if (key === "C") {
            // Clear all
            currentExpression = "";
            updateDisplay("");
        } else if (key === "DEL") {
            // Delete last character
            currentExpression = currentExpression.slice(0, -1);
            updateDisplay(currentExpression);
        } else if (key === "=") {

            // Calculate result
            if (currentExpression.trim() === "") return;

            try {
                // Wrong Calculation Error MSG 
                const result = eval(currentExpression);


                addToHistory(currentExpression, result); //  add history

                currentExpression = result.toString();
                updateDisplay(currentExpression);
            } catch (error) {
                updateDisplay("Error");
                currentExpression = "";
            }
        } else {

            // Add number and operator 

            currentExpression += key;
            updateDisplay(currentExpression);
        }
    });
});













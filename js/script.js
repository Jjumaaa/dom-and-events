let h1 = document.getElementById("heading");
console.log(h1);
h1.innerText = "Introduction to DOM and events in JS";
h1.style.color = "red";

let course_list = ["variables", "functions", "arrays", "scope"];
let ul = document.getElementById("course-content");

course_list.forEach((topic) => {
    let li = `<li>${topic}</li>`;
    ul.innerHTML += li; 
});

let div = document.createElement("div"); // Create a new div element
div.setAttribute("id", "content"); // Set the id attribute
div.style.height = "150px"
div.style.width = "150px"
div.style.backgroundColor = "blue"
document.body.appendChild(div); 

div.addEventListener("click", (event) => {div.style.backgroundColor = "black";});

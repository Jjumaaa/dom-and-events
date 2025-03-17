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

let div = document.createElement("div");
div.setAttribute("id", "content");
div.style.height = "150px"
div.style.width = "150px"
div.style.backgroundColor = "blue"
document.body.appendChild(div); 

div.addEventListener("click", (event) => {div.style.backgroundColor = "black";});

// console.log(username);
// alert(username);

// function greetings ()(
// let username = document.getElementById('username').value
// alert(`Hello $()username)`)
// )

// greetings()

let form =document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    //console.log(event);

    let username = document.getElementById('username').value;
    console.log(username);
    let message = document.getElementById("message");
    message.setAttribute("class", "message");
    message.style.backgroundColor = "black";
    message.style.color = "white";
    message.innerText = `Hello ${username}`;
    // alert (`Hello ${username}`);


    const button= document.getElementById('button');
    button.addEventListener("click", function(){
        alert(" i was clicked")
    })

});
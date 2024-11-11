// let div = document.querySelector("div");
// console.dir(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// changing class name
// console.log(para.setAttribute("class", "newClass"));



// accessing styling of div in js - (Node.style)
// let div = document.querySelector("div");
// div.style.backgroundColor = "purple";
// div.style.color = "orange";
// div.style.fontSize = "25px";
// div.style.textAlign = "center";
// div.innerText = "Hello!";


// creating a button
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.cursor = "pointer";
// newBtn.style.backgroundColor = "red";
// newBtn.style.color = "white";
// console.log(newBtn);

// appending newBtn at the end of div(Node)
// let div = document.querySelector("div");
// div.append(newBtn);


// appending newBtn at the starting of div(Node)
// let div = document.querySelector("div");
// div.prepend(newBtn);

// appending newBtn before div(Node)
// let div = document.querySelector("div");
// div.before(newBtn);

// appending newBtn after div(Node)
// let div = document.querySelector("div");
// div.after(newBtn);

// appending newBtn after p(Node)
// let para = document.querySelector(".para");
// para.after(newBtn);


// creating heading element
// let heading = document.createElement("h1");
// heading.innerText = "heading created using JS";
// heading.style.backgroundColor = "red";
// heading.style.fontStyle = "italic";
// heading.style.color = "white";

// document.querySelector("body").prepend(heading);


// remove element-> node.remove()
// let para = document.querySelector("p");
// para.remove();

// heading.remove();



// Q1
let newBtn = document.createElement("button");
newBtn.innerText = "click me"
newBtn.style.backgroundColor = 'red';
newBtn.style.color = "white";
document.querySelector("body").prepend(newBtn);



// Q2
let para = document.querySelector("p");
para.getAttribute("class");
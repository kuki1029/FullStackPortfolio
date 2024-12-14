import './style.css'
import mainHTML from "./main.html";
import headerHTML from "./header.html";

// Insert the main pages into app
const app = document.querySelector("#app")
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector("#header")
console.log(header)
header.innerHTML = headerHTML


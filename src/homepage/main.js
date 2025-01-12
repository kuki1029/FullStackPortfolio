import './about/about.css'
import './project/projects.css'
import './contact/contact.css'
import './main.css'


import mainHTML from "./main.html";
import headerHTML from "./header/header.html";
import aboutHTML from "./about/about.html";
import projectsHTML from "./project/projects.html";
import contactHTML from "./contact/contact.html";


// Insert the main pages into app
const app = document.querySelector("#app")
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector("#header")
header.innerHTML = headerHTML
const about = app.querySelector("#about")
about.innerHTML = aboutHTML
const projects = app.querySelector("#projects")
projects.innerHTML = projectsHTML
const contact = app.querySelector("#contact")
contact.innerHTML = contactHTML


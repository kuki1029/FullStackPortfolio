import './style.css'
import './about.css'
import './projects.css'
import './contact.css'

import mainHTML from "./main.html";
import headerHTML from "./header.html";
import aboutHTML from "./about.html";
import projectsHTML from "./projects.html";
import contactHTML from "./contact.html";


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


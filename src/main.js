import './style.css'
import './about.css'

import mainHTML from "./main.html";
import headerHTML from "./header.html";
import aboutHTML from "./about.html";

// Insert the main pages into app
const app = document.querySelector("#app")
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector("#header")
header.innerHTML = headerHTML
const about = app.querySelector("#about")
about.innerHTML = aboutHTML


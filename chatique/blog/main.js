import './main.css'
import '../header/header.css'


import mainHTML from "./main.html";
import headerHTML from '../header/header.html'

// Insert the main pages into app
const app = document.querySelector("#app")
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector("#header")
header.innerHTML = headerHTML

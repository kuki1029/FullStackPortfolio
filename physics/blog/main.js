import './main.css'
import '../header/header.css'


import mainHTML from "./mainHTML.js";
import headerHTML from '../header/headerHTML.js'

// Insert the main pages into app
const app = document.querySelector("#app")
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector("#header")
header.innerHTML = headerHTML

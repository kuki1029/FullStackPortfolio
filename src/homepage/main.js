import './about/about.css'
import './project/projects.css'
import './contact/contact.css'
import './main.css'


import mainHTML from './mainHTML.js'
import headerHTML from './header/headerHTML.js';
import aboutHTML from './about/aboutHTML.js';
import projectsHTML from './project/projectsHTML.js';
import contactHTML from './contact/contactHTML.js';


// Insert the main pages into app
const app = document.querySelector('#app')
app.innerHTML = mainHTML

// Insert individual elements 
const header = app.querySelector('#header')
header.innerHTML = headerHTML
const about = app.querySelector('#about')
about.innerHTML = aboutHTML
const projects = app.querySelector('#projects')
projects.innerHTML = projectsHTML
const contact = app.querySelector('#contact')
contact.innerHTML = contactHTML


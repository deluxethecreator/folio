<script>

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

</script>

/* =============================
   HAMBURGER MENU
============================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click", ()=>{

nav.classList.toggle("active");

});

}


/* =============================
   HERO TYPING EFFECT
============================= */

const typing = document.getElementById("typing");

if(typing){

const text = "Olatunde — Frontend Developer";

let i = 0;

function typeEffect(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeEffect,70);

}

}

typeEffect();

}


/* =============================
   SCROLL REVEAL ANIMATION
============================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

reveals.forEach(el=>{

const top = el.getBoundingClientRect().top;

const windowHeight = window.innerHeight;

if(top < windowHeight - 120){

el.classList.add("active");

}

});

}

window.addEventListener("scroll", revealOnScroll);


/* =============================
   SMOOTH SCROLL LINKS
============================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior:"smooth"

});

});

});


/* =============================
   CURSOR GLOW EFFECT
============================= */

const cursor = document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});

}


/* =============================
   ACTIVE NAV LINK
============================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 200;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.href.includes(current)){

link.classList.add("active");

}

});

});


/* =============================
   CONTACT FORM VALIDATION
============================= */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

const inputs = form.querySelectorAll("input, textarea");

let valid = true;

inputs.forEach(input=>{

if(input.value.trim() === ""){

valid = false;

input.style.borderColor="red";

}

});

if(!valid){

e.preventDefault();

alert("Please fill all fields.");

}

});

}


/* =============================
   BACK TO TOP BUTTON
============================= */

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.classList.add("topBtn");

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
/* SOCIAL CLICK EFFECT */

document.querySelectorAll(".social")
.forEach(icon=>{

icon.addEventListener("click",()=>{

icon.style.boxShadow =
"0 0 60px #38bdf8";

setTimeout(()=>{

icon.style.boxShadow="";

},300);

});

});
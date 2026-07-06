const menu = document.getElementById("menu");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
    nav.classList.toggle("active");
};

const text = [
    "Full Stack Developer",
    "Web Designer",
    "JavaScript Developer",
    "UI Enthusiast"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typingEffect(){

    current = text[i];

    if(!isDeleting){
        document.getElementById("typing").textContent =
        current.substring(0,j++);

        if(j > current.length){
            isDeleting = true;
            setTimeout(typingEffect,1000);
            return;
        }
    }
    else{
        document.getElementById("typing").textContent =
        current.substring(0,j--);

        if(j < 0){
            isDeleting = false;
            i = (i+1)%text.length;
        }
    }

    setTimeout(typingEffect,isDeleting?60:120);
}

typingEffect();

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".section,.project,.card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

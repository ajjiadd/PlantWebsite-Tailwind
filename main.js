// Toggle button 
let navMenu = document.getElementById("nav-menu");
let navLink = document.querySelectorAll(".nav-link");
let hamburger = document.getElementById('hamburger');

hamburger.addEventListener("click", ()=>{
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
});

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        navMenu.classList.remove("left-[0]")
        hamburger.classList.remove("ri-close-large-line")
    })
})

// Show scroll up 

// Change background header 

// swiper 

// scroll sections active link

// Scroll Reveal Animation

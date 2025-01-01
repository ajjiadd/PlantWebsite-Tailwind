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

const scrollUp = ()=>{
    const scrollUpBtn = document.getElementById("scroll-up");
    
    if(this.scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
        } else {
            scrollUpBtn.classList.remove("bottom-4")
            scrollUpBtn.classList.add("-bottom-1/2")
        }
        
}

window.addEventListener("scroll", scrollUp);

// Change background header 

const scrollHeader = ()=>{
    const header = document.getElementById("navber");
    
    if(this.scrollY >= 50){
        header.classList.add("border-b", "border-yellow-500")
        } else {
            header.classList.remove("border-b", "border-yellow-500")
        }
        
}

window.addEventListener("scroll", scrollHeader);

// swiper 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay:{
        delay:3000,
        disbaleOnInteraction:false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

// scroll sections active link

const activeLink = ()=>{
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "home";

    sections.forEach(section =>{
        const sectionTop = section.offsetTop;

        if(this.scrollY >= sectionTop - 60){
            current = section.getAttribute("id")
        }
    });

    navLinks.forEach(item =>{
        item.classList.remove("active")

        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink);

// Scroll Reveal Animation
const sr = ScrollReveal({
    origin:"top",
    distance:"60px",
    duration:2500,
    delay:300,
    reset:true
})


sr.reveal(`.home__data, .about__top, .popular__top, .review__top, .review_swiper, .footer__icon, .footer__content, .copy_right`)
sr.reveal(`.home__image`,{delay:500, scale:0.5})

sr.reveal(`.service__card, .popular_card`,{interval:100})

sr.reveal(`.about__leaf`,{delay:1000, origin: "right"})
sr.reveal(`.about__item_1-content, .about__item_2-img`,{ origin: "right"})
sr.reveal(`.about__item_2-content, .about__item_1-img`,{ origin: "left"})
sr.reveal(`.review__leaf, .footer__floral`,{ delay:1000, origin: "left"})


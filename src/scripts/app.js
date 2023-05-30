'use strict';

const navSlide = () => {
    const burgerm = document.querySelector('.burgerm');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector(".body");
  
    if (burgerm) {
      burgerm.addEventListener('click', () => {
     
      nav.classList.toggle('nav-active');
      body.classList.toggle('scroll');
     
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
      });
      
      burgerm.classList.toggle('toggle')
    });
    }
    
  };
  
  const app = () => {
    navSlide();
  };
  
  app();

 

const themeTrigger = document.querySelector(".js-theme-trigger");
if(themeTrigger){
    themeTrigger.addEventListener("click", toggleTheme) ;
}


if (document.querySelector(".swiper")){
  const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".nextsl",
      prevEl: ".prev"
    },
    pagination: {
      el: ".pagination",
      clickable: true
    },
    autoplay: {
      enabled: true,
      delay: 5000
    },
   
  });
}

if (document.querySelector(".anim-first")){
    window.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const elements = [
      ".anim-first",
      ".anim-second",
      ".anim-third",
      ".anim-fourth",
    ];

    elements.forEach((element, index) => {
      gsap.to(element, {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
        delay: index * 1,
      });
    });
  });
}

if (document.querySelector(".js-animation")){
  const pageAnimation = document.querySelectorAll(".js-animation");

  for (let i = 0; i < pageAnimation.length; i++) {
      pageAnimation[i].addEventListener("click", function(e){
      
          e.preventDefault(); //désactiver le href du lien
      
          let newLocation = this.href;
      
          document.body.classList.add("page-animation");
          document.body.addEventListener("animationend", function(){
              window.location = newLocation;
          });
      });   
  }
}
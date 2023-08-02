'use strict';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
      prevEl: ".prevsl"
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

if (document.querySelector(".js-animation") && screen.width >= 1400){
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

if (document.getElementById("video_background")){

var video = document.getElementById("video_background");

if (window.matchMedia("(min-width: 1400px)").matches) {
  
    setTimeout(function() {
      video.play();
    }, 500);

}else{
    video.play();
}
}


if (window.matchMedia("(min-width: 1800px)").matches) {

  if (document.querySelector(".hellothere")){
    

   const elements = document.querySelectorAll(".hellothere")

    for (let i = 0; i < elements.length; i++) {
      
      gsap.to(elements[i],{
        duration: 1.2,
        translateY: 0,
        rotateZ: 0,
        ease: "power2.out",
        scrollTrigger:{
          trigger:elements[i],
          start:"top 80%",
          toggleActions: "play none none none"
        }
      })
      
    }
  }
}



const header = document.querySelector('header.sticky');

if ( header){
  var navbar = header.querySelector('nav');
}


function toggleNavVisibility() {
  
  
  const headerRect = header.getBoundingClientRect();

  if (headerRect.top === 0) {
    navbar.style.display = 'flex';
    document.body.classList.add('no-scroll'); 
  } else {
    navbar.style.display = 'none';
    document.body.classList.remove('no-scroll'); 
  }
}
  

if (navbar) {

  toggleNavVisibility();
  window.addEventListener('scroll', toggleNavVisibility);
  
}
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
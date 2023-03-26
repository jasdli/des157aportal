(function(){
    'user strict';
    console.log('reading js');
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
window.addEventListener('load', function () {
    'use strict';

    function animateSlider(element, direction){
        const sliderContent = document.querySelector(`${element} .a`);
        const sliderWidth = sliderContent.offsetWidth;
        const cloned = sliderContent.cloneNode(true);
        cloned.className = "b";
        document.querySelector(`${element} .slider`).appendChild(cloned);
        let root = document.querySelector(':root');
        const endLeftPos = `-${sliderWidth}px`;    
        root.style.setProperty('--sliderwidth', endLeftPos);
        document.querySelector(`${element} .slider`).classList.add(`${direction}`);
    }

    animateSlider('#one', 'left');
    animateSlider('#two', 'right');
    
});


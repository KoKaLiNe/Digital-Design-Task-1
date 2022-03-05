(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('topbutton-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('topbutton-show');
      }
    }
  
    var goTopBtn = document.querySelector('.topbutton');
  
    window.addEventListener('scroll', trackScroll);
  })();
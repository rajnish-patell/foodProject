
  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  // Array of different class names
  const sections = ['.classA', '.classB', '.classC']; // .classA for left to right, .classB for right to left, .classC for rotation
  
  sections.forEach(className => {
    document.querySelectorAll(className).forEach(section => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom", // Trigger when the top of the section hits the bottom of the viewport
          end: "bottom top",   // End when the bottom of the section hits the top of the viewport
          scrub: 1, 
        }
      });
  
      if (className === '.classA') {
        // Animate from left to right
        tl.to(section, {
          duration: 5, 
          x: 800, 
          ease: "none"
        });
      } else if (className === '.classB') {
        // Animate from right to left
        tl.to(section, {
          duration: 5, 
          x: -200, // Move left by 800 pixels
          ease: "none"
        });
      } else if (className === '.classC') {
        // Animate rotation
        tl.to(section, {
          duration: 10, 
          rotation: 360, 
          ease: "none"
        });
      }
    });
  });
  



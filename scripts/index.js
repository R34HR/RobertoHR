document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const navLinks = document.querySelectorAll(".nav-link");
  
  navLinks.forEach(link => {
      link.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse, { toggle: true });
      }
      });
  });
  });
  // Adds/removes a class animation name when a heading comes into view.
  const observer = new IntersectionObserver(entries, id => {
      entries.forEach(entry => {
        // const heading = entry.target.querySelector('#welcome_head');
        const heading = id;
    
        if (entry.isIntersecting) {
          heading.classList.add('lineUp');
          return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        heading.classList.remove('lineUp');
  
      });
    });
    
  observer.observe(document.querySelector('#welcome_title'), document.querySelector('#welcome_head'));
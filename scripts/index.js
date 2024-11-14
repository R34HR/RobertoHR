function myFunction(x) {
    const element1 = document.getElementById("row_1_sect_1");
    const element2 = document.getElementById("Personal_photo_box");
    const element3 = document.getElementById("Personal_intro_box");
    const element4 = document.getElementById("row_1_sect_4");

    if (x.matches) { // If media query matches
        element1.classList.remove("col-md-2"); // Remove mystyle class from DIV
        element1.classList.add("col-md-3"); // Add new class to DIV

        element2.classList.remove("col-md-4"); // Remove mystyle class from DIV
        element2.classList.add("col-md-3"); // Add new class to DIV

        element3.classList.remove("col-md-4"); // Remove mystyle class from DIV
        element3.classList.add("col-md-3"); // Add new class to DIV

        element4.classList.remove("col-md-2"); // Remove mystyle class from DIV
        element4.classList.add("col-md-3"); // Add new class to DIV
      } 
  }
  
  // Create a MediaQueryList object
  var x = window.matchMedia("(min-width: 300spx)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  })
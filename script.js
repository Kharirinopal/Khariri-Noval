window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollTop > 50) {
      navbar.classList.add("visible");
    } else {
      navbar.classList.remove("visible");
    }
  });
  
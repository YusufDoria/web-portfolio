$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        } 
    });

    const sections = document.querySelectorAll("section[id]");

    function navHighlighter() {
  
        // Get current scroll position
        let scrollY = window.pageYOffset;
        
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;
          sectionId = current.getAttribute("id");
          
          /*
          - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
          - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
          */
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
          } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
          }
        });
      }
      

    window.addEventListener("scroll", navHighlighter);
});

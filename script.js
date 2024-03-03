
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
          // If the element is visible
          if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('mycard-animation');
          }
        });
      });
      
      const viewbox = document.querySelectorAll('.mycard');
      viewbox.forEach(mycard => {
        observer.observe(mycard);
      });
});

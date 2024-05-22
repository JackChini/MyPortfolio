document.addEventListener('DOMContentLoaded', function () {

    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('section');

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('wheel', function (event) {
        if (window.innerWidth >= 768) {
            event.preventDefault();
            const delta = event.deltaY;
            const direction = delta > 0 ? 1 : -1;

            if (currentSectionIndex + direction >= 0 && currentSectionIndex + direction < sections.length) {
                currentSectionIndex += direction;
                scrollToSection(currentSectionIndex);
            }
        } else {
            event.preventDefault();
        }

    });


    let slideIndex = {};

    function showSlides(idTag) {
        if (!slideIndex[idTag]) {
            slideIndex[idTag] = 0;
        }
    
        let slides = document.querySelectorAll(`#${idTag} .project-slide`);
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = "rotateY(90deg)";
            slides[i].style.display = "none";
        }
    
        slideIndex[idTag]++;
        if (slideIndex[idTag] > slides.length) {
            slideIndex[idTag] = 1;
        }
    
        slides[slideIndex[idTag] - 1].style.display = "block";
        setTimeout(() => {
            slides[slideIndex[idTag] - 1].style.transform = "rotateY(0)";
        }, 10);
    
        setTimeout(() => showSlides(idTag), 3000);
    }
    

    showSlides("MyPassLockSlides");
    showSlides("TrackingMyPantrySlides");

    
});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
}
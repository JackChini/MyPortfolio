document.addEventListener('DOMContentLoaded', function() {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll('section');

    function scrollToSection(index) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    }

    document.addEventListener('wheel', function(event) {
        event.preventDefault();
        const delta = event.deltaY;
        const direction = delta > 0 ? 1 : -1;

        if (currentSectionIndex + direction >= 0 && currentSectionIndex + direction < sections.length) {
            currentSectionIndex += direction;
            scrollToSection(currentSectionIndex);
        }
    });
});

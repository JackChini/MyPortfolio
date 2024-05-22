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

    
/*
    const text = `public static void main(String[] args) {
        String name = "Giacomo Chini";
        int age = 24; //and counting...
        String profession = "Software Developer";
        String[] skills = {"Java", "Android", "Back-end Development", "SQL"};
        String hobbies = "Creating small apps and learning new technologies!";
        
        while(livingLife()){
            if(workingDay()){
                code(profession, skills);
                eat();
            }else{
                workOnPersonalProjects(hobbies);
                playBasketball();
                hangOut();
            }
    
            try {
                Thread.sleep(25200000);
            } catch (InterruptedException e) {
                logger.error("Sleep interrupted!");
            }
        }
    }`;
    
    const textContainer = document.getElementById('typed-text');
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 30); // Regola la velocità di scrittura
        }
    }
    
    typeText();
*/
const printSentence = (id, sentence, speed = 50) => {
    let index = 0;
    let element = document.getElementById(id);
    
    let timer = setInterval(function() {
      const char = sentence[index];
      
      if (char === '<') {
        index = sentence.indexOf('>', index);  // skip to greater-than
      }
      
      element.innerHTML = sentence.slice(0, index);
      
      if (++index === sentence.length) {
        clearInterval(timer);
      }
    }, speed);
  } // printSentence
  
  printSentence(
    'contentDiv',
        `       <span class="java-purple">public static void</span> main(String[] <span class="java-brown">args</span>) {
            <span class="java-purple">final</span> String <span class="java-brown">name</span> = <span class="java-blue">"Giacomo Chini"</span>;
            <span class="java-purple">int</span> <span class="java-brown">age</span> = 24; <span class="java-green">//and counting...</span>
            String <span class="java-brown">profession</span> = <span class="java-blue">"Software Developer"</span>;
            String[] <span class="java-brown">skills</span> = {<span class="java-blue">"Java"</span>, <span class="java-blue">"Android"</span>, <span class="java-blue">"Back-end Development"</span>, <span class="java-blue">"SQL"</span>};
            String <span class="java-brown">hobbies</span> = <span class="java-blue">"Creating small apps and learning new technologies!"</span>;
            
            <span class="java-purple">while</span>(<a class="java-function living-function">livingLife</a>()){
                <span class="java-purple">if</span>(<a class="java-function" href="#experiences" onclick="scrollToSection('experiences')">isWorkingDay</a>()){
                    <a class="java-function" href="#skills" onclick="scrollToSection('skills')">code</a>(<span class="java-brown">profession</span>, <span class="java-brown">skills</span>);
                    <a class="java-function eat-function">eat</a>();
                } <span class="java-purple">else</span> {
                    <a class="java-function" href="#projects" onclick="scrollToSection('projects')">workOnPersonalProjects</a>(<span class="java-brown">hobbies</span>);
                    <a class="java-function playBasketball-function">playBasketball</a>();
                    <a class="java-function" href="#contacts" onclick="scrollToSection('contacts')">hangOut</a>();
                }
            }
        }
}`,
    25
  );
});

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
    event.preventDefault();
}
document.addEventListener('DOMContentLoaded', function () {


    const sentences = [
      /*JAVA*/["java", `System.out.println(<span class="code-block-green">"Hi! I'm Giacomo Chini"</span>);
System.out.println(<span class="code-block-green">"Software Developer"</span>);`],
      /*PYTHON*/["python", `<span class="code-block-orange">print</span>(<span class="code-block-green">"Hi! I'm Giacomo Chini"</span>)
<span class="code-block-orange">print</span>(<span class="code-block-green">"Software Developer"</span>)`],
      /*Cpp*/["cpp", `std::cout &lt;&lt; <span class="code-block-green">"Hi! I'm Giacomo Chini"</span> &lt;&lt; std::endl;
std::cout &lt;&lt; <span class="code-block-green">"Software Developer"</span> &lt;&lt; std::endl;`],
      /*JAVASCRIPT*/["javascript", `<span class="code-block-pink">console</span>.<span class="code-block-red">log</span>(<span class="code-block-green">"Hi! I'm Giacomo Chini"</span>);
<span class="code-block-pink">console</span>.<span class="code-block-red">log</span>(<span class="code-block-green">"Software Developer"</span>);`],
      /*C*/["c", `<span class="code-block-orange">printf</span>(<span class="code-block-green">"Hi! I'm Giacomo Chini"</span>);
<span class="code-block-orange">printf</span>(<span class="code-block-green">"Software Developer"</span>);`]
    ];
    let timer;
    const typeInInput = (inputId, text, speed = 100, callback) => {
        let index = 0;
        let inputElement = document.getElementById(inputId);

        const type = () => {
            inputElement.value = text.slice(0, index) + '|';
            index++;

            if (index > text.length) {
                clearInterval(timer);
                inputElement.value = text;
                setTimeout(() => {
                    callback();
                }, 700);
            }
        };

        timer = setInterval(type, speed);
    };

    const printSentence = (id, sentence, speed = 50, callback) => {
        let index = 0;
        let element = document.getElementById(id);
        timer = setInterval(() => {
            const char = sentence[index];
            if (char === '<') {
                index = sentence.indexOf('>', index);
            }
            element.innerHTML = sentence.slice(0, index + 1);

            if (++index === sentence.length) {
                clearInterval(timer);
                setTimeout(() => {
                    callback();
                }, 3000);
            }
        }, speed);
    };

    const clearContent = (id, speed = 50, callback) => {
        let element = document.getElementById(id);
        let content = element.innerHTML;
        let index = content.length;

        timer = setInterval(() => {
            const char = content[index - 1];

            if (char === ';' && content[index - 4] === '&') {
                index -= 4;
            } else if (char === '>') {
                index = content.lastIndexOf('<', index - 1);
            } else {
                index--;
            }

            element.innerHTML = content.slice(0, index);

            if (index === 0) {
                clearInterval(timer);
                setTimeout(() => {
                    callback();
                }, 500);
            }
        }, speed);
    };

    const cycleSentences = (id, sentences, speed = 50) => {
        let current = 0;

        const nextSentence = () => {
            if (current < sentences.length) {
                let [language, sentence] = sentences[current];
                document.getElementById('code-language').textContent = language;
                printSentence(id, sentence, speed, () => {
                    clearContent(id, speed, () => {
                        current++;
                        nextSentence();
                    });
                });
            } else {
                current = 0;
                nextSentence();
            }
        };

        nextSentence();
    };


    function startSearch() {
        typeInInput('searchInput', 'Introduce myself', 100, () => {
            document.getElementById('search-button').innerHTML = '<div class="square"></div>';
            cycleSentences('contentDiv', sentences, 35, () => {
                document.getElementById('search-button').innerHTML = '<span class="material-symbols-outlined">arrow_upward_alt</span>';
                setTimeout(startSearch, 3000);
            });
        });
    }

    startSearch();

    /*
        const searchButton = document.getElementById('search-button');
    
        searchButton.addEventListener('click', () => {
            const square = document.getElementsByClassName('square');
            console.log("fgdfsgf");
            if (square) {
                
                clearInterval(timer); // Interrompi la funzione di scrittura
                document.getElementById('search-button').innerHTML = '<span class="material-symbols-outlined">arrow_upward_alt</span>';
            } else {
                // Fai ripartire la funzione di scrittura
                startSearch();
            }
        });
    */


    var navbarLinks = document.querySelectorAll(".navbar-nav a");
    navbarLinks.forEach(function (navbarLink) {
        navbarLink.addEventListener("click", function () {
            var navbarCollapse = document.querySelector(".navbar-collapse");
            navbarCollapse.classList.remove("show");
        });
    });


   

    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        event.preventDefault();
    }

    function calculateDuration(startDate, elementId) {
        
        let today = new Date(); // Data corrente

        let years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();

       // let totalMonths = years * 12 + months;

        let durationText="";
        if(years> 0){
            if(years == 1){
                durationText += `${years} year`;
            }else{
                durationText += `${years} years`;
            }
        }

        if(months> 0){
            if(years > 0){
                durationText+=" and ";
            }
            if(months == 1){
                durationText += `${months} month`;
            }else{
                durationText += `${months} months`;
            }
        }
        document.getElementById(elementId).textContent = durationText;
    }
    calculateDuration(new Date('Jul 1, 2024'), "sitech-software-duration");
    calculateDuration(new Date('Mar 1, 2022'), "full-sitech-duration");
});




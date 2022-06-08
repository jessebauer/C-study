function initAnimationToScroll() {
    const elementosAnimados = document.querySelectorAll('[data-anime]');
    console.log(elementosAnimados);

    const windowSeventyPercent = window.innerHeight * 0.7;

    function animeToScroll() {
        elementosAnimados.forEach(section => {
            const sectionHeightTop = section.getBoundingClientRect().top;

            const isElementoVisible = (sectionHeightTop - windowSeventyPercent) < 0;
            if (isElementoVisible) {
                section.classList.add('animate');
            }
        })
    }

    window.addEventListener('scroll', animeToScroll);
}

initAnimationToScroll();

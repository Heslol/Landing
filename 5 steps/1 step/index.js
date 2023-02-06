const slides = document.querySelectorAll('.slide');

const slideItem = Array.from(slides)

for(const slide of slides){
    slide.addEventListener('click', () => {
        if(!slide.classList.contains('active')){
            changeClass();
        }
        slide.classList.toggle('active');
    })
}
function changeClass() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
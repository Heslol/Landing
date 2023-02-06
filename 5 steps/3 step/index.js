const slides = document.querySelector('.main');

const slideItems = Array.from(slides.children); 

const nextBtn = document.querySelector('.btn-next')

const prevBtn = document.querySelector('.btn-prev')

slideItems.forEach( function (slide, index) {
   if(index !== 0) slide.classList.add('hidden');

   slide.dataset.index = index;

   slideItems[0].setAttribute('data-active', '');
   
   slide.addEventListener('click', () => {

       slide.classList.add('hidden');
       slide.removeAttribute('data-active'); 
     
        const nextSlideIndex = (index + 1 === slideItems.length) ? 0 : index + 1; 
    
        const nextSlide = slides.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '')
    });
});

nextBtn.onclick = function () {
    changeSlide('next')

}

prevBtn.onclick = function () {
    changeSlide('prev')
}

function changeSlide (direction) {

   const currentSlide = slides.querySelector('[data-active]');
   const currentSlideIndex = +currentSlide.dataset.index;
   currentSlide.classList.add('hidden');
   currentSlide.removeAttribute('data-active');

   let nextSlideIndex;

   if(direction === 'next') {
      nextSlideIndex = (currentSlideIndex + 1 === slideItems.length) ? 0 : currentSlideIndex + 1;
   } else if(direction === 'prev') {
      nextSlideIndex = currentSlideIndex === 0 ? (slideItems.length - 1) : currentSlideIndex - 1;
   }

   const nextSlide = slides.querySelector(`[data-index="${nextSlideIndex}"]`);

   nextSlide.classList.remove('hidden');

   nextSlide.setAttribute('data-active', '')
};


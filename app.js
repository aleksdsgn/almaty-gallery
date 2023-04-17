function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide');
  
  slides[activeSlide].classList.add('active');
  
  // используя цикл for..of
  for (const slide of slides) {
    slide.addEventListener('click', () => {
      clearActiveClasses();
      slide.classList.add('active');
    })
  }
  
  // используя метод forEach()
  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    })
  }
}

slidesPlugin(1);
const slides = document.querySelectorAll('.slide');

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
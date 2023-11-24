window.onload = function () {
  const nextBtn = document.querySelector('.arrow.next');
  const prevBtn = document.querySelector('.arrow.prev');

  nextBtn.onclick = nextSlide;
  prevBtn.onclick = prevSlide;

  const slides = document.querySelectorAll('.carousel .slide');
  let currentIndex = 0;

  gsap.set(slides, { opacity: 0 });
  gsap.to(slides[currentIndex], { opacity: 1 });
  function nextSlide() {
      slides[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].style.opacity = 1;
  }
  
  function prevSlide() {
      slides[currentIndex].style.opacity = 0;
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].style.opacity = 1;
  }

  setInterval(nextSlide, 1500);
};


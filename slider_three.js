document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".item-slider_believe-img");
  const containerSlider = document.querySelector(".container-slider_believe");
  const prevBtn = document.querySelector(".believe-prev_btn");
  const nextBtn = document.querySelector(".believe-next_btn");

  let currentIndex = 0;

  // Функция обновления слайдов
  function updateSlider() {
      const totalSlides = slides.length;
      const slideWidth = containerSlider.offsetWidth; // Ширина контейнера

      // Прокручиваем контейнер влево или вправо
      containerSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

      // Блокировка кнопок на крайних слайдах
      prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
      nextBtn.style.opacity = currentIndex === totalSlides - 1 ? "0.5" : "1";
      prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
      nextBtn.style.pointerEvents = currentIndex === totalSlides - 1 ? "none" : "auto";
  }

  // Обработчик кнопки "Вперед"
  nextBtn.addEventListener("click", function () {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateSlider();
      }
  });

  // Обработчик кнопки "Назад"
  prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
      }
  });

  // Устанавливаем первый слайд активным при загрузке
  updateSlider();
});
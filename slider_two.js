document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".item-slider_project");
  const containerSlider = document.querySelector(".container-slider_project");
  const prevBtn = document.querySelector(".project-prev_btn");
  const nextBtn = document.querySelector(".project-next_btn");

  let currentIndex = 0;

  // Отключаем прокрутку пальцем по оси X
  containerSlider.addEventListener('touchmove', function (e) {
      if (Math.abs(e.touches[0].clientY - e.touches[1].clientY) < Math.abs(e.touches[0].clientX - e.touches[1].clientX)) {
          e.preventDefault(); // Отключаем горизонтальную прокрутку
      }
  }, { passive: false });

  // Функция обновления слайдов
  function updateSlider() {
      const slideWidth = slides[0].offsetWidth; // Ширина одного слайда

      containerSlider.scrollTo({
          left: currentIndex * slideWidth,
          behavior: 'smooth' // Плавная анимация прокрутки
      });

      // Обновляем активный класс
      slides.forEach((slide, index) => {
          slide.classList.toggle("active", index === currentIndex);
      });

      // Блокировка кнопок на крайних слайдах
      prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
      nextBtn.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1";
      prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
      nextBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "auto";
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

  // Обработчик клика по слайду (делает его активным)
  slides.forEach((slide, index) => {
      slide.addEventListener("click", function () {
          currentIndex = index;
          updateSlider();
      });
  });

  // Устанавливаем первый слайд активным при загрузке
  updateSlider();
});

// убираем блок в другое место --------------------------------------------

const block = document.querySelector('.project-link');
const container2 = document.querySelector('.project-head');
const referenceBlock = document.querySelector('.container-slider_project');

// Функция для перемещения блока
function moveBlock() {
  if (window.innerWidth < 1023) {
    referenceBlock.insertAdjacentElement('afterend', block); // Вставляем после referenceBlock
  } else {
    container2.appendChild(block); // Возвращаем в container2
  }
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = moveBlock;
window.onresize = moveBlock;

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".item-slider");
//   const prevBtn = document.querySelector(".history-prev_btn");
//   const nextBtn = document.querySelector(".history-next_btn");

//   let currentIndex = 0;

//   // Функция обновления слайдов
//   function updateSlider() {
//     slides.forEach((slide, index) => {
//       slide.style.transform = `translateX(-${currentIndex * 100}%)`;
//       slide.classList.toggle("active", index === currentIndex);
//     });

//     // Блокировка кнопок на крайних слайдах
//     prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
//     nextBtn.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1";
//     prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
//     nextBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "auto";
//   }

//   // Обработчик кнопки "Вперед"
//   nextBtn.addEventListener("click", function () {
//     if (currentIndex < slides.length - 1) {
//       currentIndex++;
//       updateSlider();
//     }
//   });

//   // Обработчик кнопки "Назад"
//   prevBtn.addEventListener("click", function () {
//     if (currentIndex > 0) {
//       currentIndex--;
//       updateSlider();
//     }
//   });

//   // Обработчик клика по слайду (делает его активным)
//   slides.forEach((slide, index) => {
//     slide.addEventListener("click", function () {
//       currentIndex = index;
//       updateSlider();
//     });
//   });

//   // Устанавливаем первый слайд активным при загрузке
//   updateSlider();
// });


// -------------------

// document.addEventListener('DOMContentLoaded', function () {
//   const containerSlider = document.querySelector('.container-slider');
//   const prevBtn = document.querySelector('.history-prev_btn');
//   const nextBtn = document.querySelector('.history-next_btn');
//   const slideWidth = document.querySelector('.item-slider').offsetWidth; // Ширина одного слайда

//   // Функция для прокрутки влево
//   function scrollLeft() {
//       containerSlider.scrollBy({
//           left: -slideWidth, // Прокрутка на ширину одного слайда влево
//           behavior: 'smooth' // Плавная анимация
//       });
//   }

//   // Функция для прокрутки вправо
//   function scrollRight() {
//       containerSlider.scrollBy({
//           left: slideWidth, // Прокрутка на ширину одного слайда вправо
//           behavior: 'smooth' // Плавная анимация
//       });
//   }

//   // Добавляем обработчики событий на кнопки
//   prevBtn.addEventListener('click', scrollLeft);
//   nextBtn.addEventListener('click', scrollRight);
// });





// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".item-slider");
//   const containerSlider = document.querySelector(".container-slider");
//   const prevBtn = document.querySelector(".history-prev_btn");
//   const nextBtn = document.querySelector(".history-next_btn");

//   let currentIndex = 0;

//   // Функция обновления слайдов
//   function updateSlider() {
//       // Прокрутка контейнера слайдера
//       const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
//       containerSlider.scrollTo({
//           left: currentIndex * slideWidth,
//           behavior: 'smooth' // Плавная анимация прокрутки
//       });

//       // Обновляем активный класс
//       slides.forEach((slide, index) => {
//           slide.classList.toggle("active", index === currentIndex);
//       });

//       // Блокировка кнопок на крайних слайдах
//       prevBtn.style.opacity = currentIndex === 0 ? "0.5" : "1";
//       nextBtn.style.opacity = currentIndex === slides.length - 1 ? "0.5" : "1";
//       prevBtn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
//       nextBtn.style.pointerEvents = currentIndex === slides.length - 1 ? "none" : "auto";
//   }

//   // Обработчик кнопки "Вперед"
//   nextBtn.addEventListener("click", function () {
//       if (currentIndex < slides.length - 1) {
//           currentIndex++;
//           updateSlider();
//       }
//   });

//   // Обработчик кнопки "Назад"
//   prevBtn.addEventListener("click", function () {
//       if (currentIndex > 0) {
//           currentIndex--;
//           updateSlider();
//       }
//   });

//   // Обработчик клика по слайду (делает его активным)
//   slides.forEach((slide, index) => {
//       slide.addEventListener("click", function () {
//           currentIndex = index;
//           updateSlider();
//       });
//   });

//   // Устанавливаем первый слайд активным при загрузке
//   updateSlider();
// });

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".item-slider");
  const containerSlider = document.querySelector(".container-slider_history");
  const prevBtn = document.querySelector(".history-prev_btn");
  const nextBtn = document.querySelector(".history-next_btn");

  let currentIndex = 0;

  // Отключаем прокрутку пальцем по оси X
  containerSlider.addEventListener('touchmove', function (e) {
      if (Math.abs(e.touches[0].clientY - e.touches[1].clientY) < Math.abs(e.touches[0].clientX - e.touches[1].clientX)) {
          e.preventDefault(); // Отключаем горизонтальную прокрутку
      }
  }, { passive: false });

  // Функция обновления слайдов с задержкой
  function updateSlider() {
      const slideWidth = slides[0].offsetWidth; // Ширина одного слайда
      
      // Устанавливаем задержку перед прокруткой
      setTimeout(() => {
          containerSlider.scrollTo({
              left: currentIndex * slideWidth,
              behavior: 'smooth' // Плавная анимация прокрутки
          });
      }, 150); // Задержка 150 мс

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
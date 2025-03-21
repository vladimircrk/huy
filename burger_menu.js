//  burger-menu ---------------
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.body.classList.toggle('no-scroll'); // Добавляем/убираем класс
})

// Закрытие меню при клике на ссылки навигации
document.querySelectorAll('.header-menu_link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.burger').classList.remove('active'); // Убираем класс активности
        document.querySelector('.nav').classList.remove('open'); // Закрываем меню
        document.body.classList.remove('no-scroll'); // Убираем класс, чтобы прокрутка работала
    });
});


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Останавливаем стандартную отправку

      // Проверка валидности формы
      if (!form.checkValidity()) {
        alert("Пожалуйста, заполните обязательные поля корректно.");
        return;
      }

      // Здесь ты можешь отправить данные через fetch/ajax, если нужно

      alert("Заявка успешно отправлена!");

      // Очищаем поля формы
      form.reset();
    });
  });


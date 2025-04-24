
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); 

      if (!form.checkValidity()) {
        alert("Пожалуйста, заполните обязательные поля корректно.");
        return;
      }

      alert("Заявка успешно отправлена!");

      form.reset();
    });
  });


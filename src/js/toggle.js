document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.courses__cell-toggle');

  toggles.forEach(btn => {
    btn.addEventListener('click', function () {
      const description = btn.previousElementSibling;
      description.classList.toggle('visible');
      btn.textContent = description.classList.contains('visible') ? 'Скрыть' : 'Подробнее';
    });
  });
});
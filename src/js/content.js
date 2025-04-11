document.querySelectorAll('.reviews__more').forEach(button => {
button.addEventListener('click', () => {
    const content = button.closest('.reviews__block').querySelector('.reviews__content');
    content.classList.toggle('expanded');
    button.textContent = content.classList.contains('expanded') ? 'Скрыть' : 'Читать ещё';
});
});
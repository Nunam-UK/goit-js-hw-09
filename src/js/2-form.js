// Оголоси поза будь-якими функціями об’єкт formData з полями email та message, які спочатку мають порожні рядки як значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі через подію input. Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

window.addEventListener('DOMContentLoaded', onReload);

form.addEventListener('input', onInput); // Використовуй метод делегування для відстеження змін у формі через подію input.

function onInput(event) {
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); //Зберігай актуальні дані з полів email та message у formData та записуй цей об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для зберігання даних у сховищі.
}

function onReload(event) {
  if (localStorage.getItem('feedback-form-state') === null) {
    form.elements.email.value = '';
    form.elements.message.value = '';
  }

  if (localStorage.getItem('feedback-form-state') !== null) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
} // При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  if (form.elements.email.value === '' || form.elements.message.value === '') {
    alert('Fill please all fields');
  }

  if (form.elements.email.value !== '' && form.elements.message.value !== '') {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
    formData = {
      email: '',
      message: '',
    };
  }
} // Перед відправленням форми переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними значеннями, очисти локальне сховище, об’єкт formData і поля форми.

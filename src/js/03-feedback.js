import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formKey = 'feedback-form-state';
const { email, message } = form.elements;
const savedData = JSON.parse(localStorage.getItem(formKey)) || {};

email.value = savedData.email || '';
message.value = savedData.message || '';

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value && message.value) {
    console.log(savedData);
    localStorage.removeItem(formKey);
    form.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

form.addEventListener('input', throttle(() => {
  savedData.email = email.value;
  savedData.message = message.value;
  localStorage.setItem(formKey, JSON.stringify(savedData));
}, 500));
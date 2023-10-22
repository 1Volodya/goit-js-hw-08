import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function saveFormState() {
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackState));
}

function loadFormState() {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const feedbackState = JSON.parse(savedState);
    emailInput.value = feedbackState.email;
    messageInput.value = feedbackState.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const feedbackState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(feedbackState);

  emailInput.value = '';
  messageInput.value = '';
  localStorage.removeItem('feedback-form-state');
}

form.addEventListener('input', throttle(saveFormState, 500));

window.addEventListener('load', loadFormState);

form.addEventListener('submit', handleSubmit);

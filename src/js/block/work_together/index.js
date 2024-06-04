import { request } from '../../utils/api.js';
import { lightboxInstance } from '../../utils/basiclightbox.js';
import { validateInput, validateStrategy } from './formUtils.js';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', () => {
  const formEL = document.querySelector('#form-work-together');
  let lightbox = null;

  if (!formEL) return;

  const { email: emailEl, message: messageEl } = formEL.elements;

  emailEl.addEventListener('blur', () => validateStrategy(emailEl));
  messageEl.addEventListener('blur', () => validateStrategy(messageEl));

  formEL.addEventListener('submit', async (event) => {
    event.preventDefault();

    const isEmailValid = validateInput(emailEl).validated;
    const isMessageValid = validateInput(messageEl).validated;

    if (!isEmailValid || !isMessageValid) {
      return;
    }

    try {
      const response = await request({
        email: emailEl.value,
        message: messageEl.value,
      });

      if (response.data) {
        const { title, message } = response.data;

        if (!lightbox) {
          lightbox = lightboxInstance();
        }

        lightbox.element().querySelector('.modal-title').textContent = title;
        lightbox.element().querySelector('.modal-text').textContent = message;

        lightbox.show();
        formEL.reset();
        emailEl.classList.remove('--success');
        messageEl.classList.remove('--success');
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message
      });
    }
  })
})

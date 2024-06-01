import { request } from '../../utils/api.js';
import { lightboxInstance } from '../../utils/basiclightbox.js';
import iziToast from 'izitoast';

document.addEventListener('DOMContentLoaded', () => {
  const formEL = document.querySelector('#form-work-together');
  let lightbox = null;

  if (!formEL) return;

  formEL.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { email: emailEl, message: messageEl } = event.target.elements;

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
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: error.message
      });
    }
  })
})
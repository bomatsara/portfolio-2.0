import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import iziToast from 'izitoast';

import { getReviews } from '../../utils/api';

const ulEl = document.querySelector('.reviews');

getReviews()
  .then(data => {
    renderReviews(data);
    swiperInit();
  })
  .catch(error => {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
    document.querySelector('#section-reviews .swiper').innerHTML = 'Not found'
  });

function renderReviews(data) {
  const markup = data.reduce((string, item) => {
    return (string += `<li class="review swiper-slide">
                    <div class="review__text">${item.review}</div>
                    <div class="review__wrap">
                        <img class="review__img" src="${item.avatar_url}" alt="${item.author}"/>
                        <div class="review__author">${item.author}</div>
                    </div>
                </li>`);
  }, '');
  ulEl.insertAdjacentHTML('afterbegin', markup);
}

function swiperInit() {
  const swiper = new Swiper('.section-reviews .swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    modules: [Navigation],
    navigation: {
      nextEl: '.section-reviews .swiper-button-next',
      prevEl: '.section-reviews .swiper-button-prev',
    },
    mousewheel: true,
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
    },
  });
}

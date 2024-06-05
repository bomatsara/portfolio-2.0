document.addEventListener('click', element => {
  if (element.target.closest('.accordion')) {
    const accordion = element.target.closest('.accordion');

    if(accordion.classList.contains('is-open')) {
      accordion.classList.remove('is-open');
      return;
    }

    const accordionList = accordion.closest('.accordion_list');
    accordionList.querySelectorAll('.accordion').forEach(acc => {
      acc.classList.remove('is-open');
    });

    accordion.classList.add('is-open');
  }
});
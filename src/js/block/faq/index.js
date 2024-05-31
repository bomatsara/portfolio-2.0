document.querySelectorAll('.ac_trigger').forEach(el => {
  el.addEventListener('click', element => {
    const allAccordions = document.querySelectorAll('.ac');

    allAccordions.forEach(acc => {
      if (acc !== element.currentTarget.closest('.ac')) {
        acc.classList.remove('ac-click');
      }
    });

    element.currentTarget.closest('.ac').classList.toggle('ac-click');
  });
});

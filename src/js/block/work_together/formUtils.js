export function getErrorSpan(message) {
  return `<span class="--error">${message}</span>`;
}

export function validateInput(field) {
  const isOnlySpaces = /^\s*$/.test(field.value);

  if (isOnlySpaces) {
    return {
      validated: false,
      message: 'Field can not be empty'
    };
  }

  if (field.type === 'email') {
    const emailPattern = new RegExp(field.getAttribute('pattern'));
    if (!emailPattern.test(field.value)) {
      return {
        validated: false,
        message: 'Incorrect email'
      };
    }
  }

  return {
    validated: true
  }
}

export function validateStrategy(field) {
  const errorSpan = field.nextElementSibling;
  if (errorSpan && errorSpan.classList.contains('--error')) {
    errorSpan.remove();
  }

  field.classList.remove('--error', '--success');

  const { validated, message } = validateInput(field);

  if (validated) {
    field.classList.add('--success');
  } else {
    field.classList.add('--error');
    field.insertAdjacentHTML('afterend', getErrorSpan(message));
  }
}
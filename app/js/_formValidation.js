(function () {
  'use strict';

  /*==================================================================
    Focus input*/
  const input = document.querySelectorAll('.input__element');

  input.forEach((item) => {
    item.addEventListener('blur', function (itemInput) {
      if (itemInput.target.value.trim() != '') {
        itemInput.target.classList.add('has-val');
      } else {
        itemInput.target.classList.remove('has-val');
      }
    });
  });

  /*==================================================================
    Radio*/
  const radioButtons = document.querySelectorAll('.input__radio');
  const inputSelect = document.querySelectorAll('.input__select');

  radioButtons.forEach((inputRadio) => {
    inputRadio.addEventListener('change', (e) => {
      if (e.target.value === 'get-quote') {
        inputSelect.forEach((selector) => {
          selector.classList.remove('closed');
        });
      } else {
        inputSelect.forEach((selector) => {
          selector.classList.add('closed');
        });
      }
    });
  });

  /*==================================================================
    Validate*/
  let name = document.querySelector('input[name="name"]');
  let email = document.querySelector('input[name="email"]');
  let message = document.querySelector('textarea[name="message"]');
  const form = document.querySelector('.form__frame');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let check = true;
    if (name.value.trim() == '') {
      showValidate(name);
      check = false;
    }
    if (
      email.value
        .trim()
        .match(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
        ) == null
    ) {
      showValidate(email);
      check = false;
    }
    if (message.value.trim() == '') {
      showValidate(message);
      check = false;
    }

    if (check === true) {
      formSubmit();
      form.reset();
    } else {
      console.log('email not sent');
    }

    return check;
  });

  document
    .querySelectorAll('.validate-form .input__element')
    .forEach((input) => {
      input.addEventListener('focus', function () {
        hideValidate(input);
      });
    });

  function showValidate(input) {
    let thisAlert = input.parentNode;
    thisAlert.classList.add('alert-validate');
  }

  function hideValidate(input) {
    let thisAlert = input.parentNode;
    thisAlert.classList.remove('alert-validate');
  }
})();

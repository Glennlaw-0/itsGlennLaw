var form = document.getElementById('form__frame');

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append(
    'First Name',
    document.querySelector('input[name="firstName"]').value
  );
  formData.append(
    'Last Name',
    document.querySelector('input[name="lastName"]').value
  );
  formData.append('Email', document.querySelector('input[name="email"]').value);
  formData.append(
    'Subject',
    document.querySelector('input[name="subject"]').value
  );
  formData.append(
    'Message',
    document.querySelector('textarea[name="message"]').value
  );

  fetch('https://getform.io/f/46320a04-e535-47e0-9b7e-985894539c0a', {
    method: 'POST',
    body: formData,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  form.reset();
}

form.addEventListener('submit', formSubmit);

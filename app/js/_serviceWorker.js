function formSubmit() {
  const formData = new FormData();
  formData.append('Name', document.querySelector('input[name="name"]').value);
  formData.append('Email', document.querySelector('input[name="email"]').value);

  formData.append(
    'Message',
    document.querySelector('textarea[name="message"]').value
  );

  form.reset();

  fetch('https://getform.io/f/46320a04-e535-47e0-9b7e-985894539c0a', {
    method: 'POST',
    body: formData,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}

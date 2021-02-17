function formSubmit() {
  const formData = new FormData();
  formData.append('Name', document.querySelector('input[name="name"]').value);
  formData.append('Email', document.querySelector('input[name="email"]').value);

  if (document.getElementById('radio2').checked) {
    formData.append(
      'Service',
      document.getElementById('select__service').value
    );
    formData.append('Budget', document.getElementById('select__budget').value);
  }

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
}

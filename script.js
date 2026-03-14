document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const country = document.getElementById('country').value.trim();
  const comments = document.getElementById('comments').value.trim();

  if (fullName === '' || email === '' || country === '' || comments === '') {
    alert('Please fill in all fields before submitting the form.');
    return;
  }

  alert('Form submitted successfully!');
  document.getElementById('contactForm').reset();
});

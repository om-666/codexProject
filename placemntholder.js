const form = document.getElementById('myForm');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const phoneNumber=document.getElementById('phoneNumber').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNumber',phoneNumber);
  localStorage.setItem('message', message);
  

  result.innerHTML = `
    <h2>Thank You</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>phoneNumber: ${phoneNumber}</p>
    <p>Message: ${message}</p>
  `;

  form.reset();
  result.style.display = 'block';
});

window.addEventListener('DOMContentLoaded', () => {
  const name = localStorage.getItem('name');
  const email = localStorage.getItem('email');
  const phoneNumber=localStorage.getItem('phoneNumber');
  const YourDemand = localStorage.getItem('Your Demand:');
  

  if (name && email && message) {
    result.innerHTML = `
      <h2>Stored Contact Information</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>phoneNumber: ${phoneNumber}</p>

      <p>Your Demand: ${YourDemand}</p>
    `;
    result.style.display = 'block';
  }
});

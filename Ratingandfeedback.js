const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = form.elements['name'].value;
	const email = form.elements['email'].value;
	const rating = form.elements['rating'].value;
	const feedback = form.elements['feedback'].value;

	console.log('Name:', name);
	console.log('Email:', email);
	console.log('Rating:', rating);
	console.log('Feedback:', feedback);

	alert('Thank you for your feedback and rating!');
	form.reset();
});

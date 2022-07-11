console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form submit");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let picture = document.querySelector('#picture')

picture.addEventListener('mouseover', function(event) {
	alert("You're funny")
} )



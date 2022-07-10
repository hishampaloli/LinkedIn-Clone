const prev = document.getElementById('prev')
const next = document.getElementById('next')
const box = document.querySelector('.box')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

let count = 0

next.addEventListener('click', () => {
	count++
	if(count > 2) {
		count = 2
	}
	if(count === 1){
		box.style.left = `${-100}%`
		box1.style.left = `${0}%`
		console.log("786");
	}else if(count === 2){
		box1.style.left = `${-100}%`
		box2.style.left = `${0}%`
	}else{
		box.style.left = `${0}%`
		box1.style.left = `${100}%`
		box2.style.left = `${200}%`
	}
	
})

prev.addEventListener('click', () => {
	count--

	if(count < 0) {
		count = 0
	}
	
	if(count === 1){
		box.style.left = `${-100}%`
		box1.style.left = `${0}%`
		box2.style.left = `${-110}%`
	}else if(count === 2){
		box1.style.left = `${-200}%`
		box2.style.left = `${0}%`
	}else{
		box.style.left = `${0}%`
		box1.style.left = `${100}%`
		box2.style.left = `${200}%`
	}
})



//  nav //

const icon = document.querySelector('.icon');
const faMound = document.querySelector('.fa-mound');
const line  = document.querySelector('.line1')
const minShow = document.querySelector('.min-show');

icon.addEventListener('click', () => {
	minShow.classList.toggle('show');
	line.classList.toggle('show')
	faMound.classList.toggle('show')
})
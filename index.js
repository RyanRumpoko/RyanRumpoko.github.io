function goBack() {
	window.location = "index.html"
}

function getName() {
	let first = document.getElementById('firstName').value
	let last = document.getElementById('lastName').value

	localStorage.setItem('firstName', first)
	localStorage.setItem('lastName', last)
}

function inputName() {
	let changeName = document.getElementById('changeName')
	let firstName = localStorage.getItem('firstName')
	let lastName = localStorage.getItem('lastName')
	let hide = document.getElementById('button2')

	if (firstName === '' && lastName === '') {
		changeName.innerHTML = 'Guest'
	} else {
		changeName.innerHTML = `${firstName} ${lastName}`
	}
	hide.style.display = 'none'
	// console.log(first);
}

function submit() {
	let a = 0
	let b = 0
	let c = 0
	let q1a = document.getElementById('q1a')
	let q1b = document.getElementById('q1b')
	let q1c = document.getElementById('q1c')
	let q2a = document.getElementById('q2a')
	let q2b = document.getElementById('q2b')
	let q2c = document.getElementById('q2c')
	let q3a = document.getElementById('q3a')
	let q3b = document.getElementById('q3b')
	let q3c = document.getElementById('q3c')
	let q4a = document.getElementById('q4a')
	let q4b = document.getElementById('q4b')
	let q4c = document.getElementById('q4c')

	if (q1a.checked) {
		a++
	} else if (q1b.checked) {
		b++
	} else if (q1c.checked) {
		c++
	}

	if (q2a.checked) {
		a++
	} else if (q2b.checked) {
		b++
	} else if (q2c.checked) {
		c++
	}

	if (q3a.checked) {
		a++
	} else if (q3b.checked) {
		b++
	} else if (q3c.checked) {
		c++
	}

	if (q4a.checked) {
		a++
	} else if (q4b.checked) {
		b++
	} else if (q4c.checked) {
		c++
	}

	if (a > 1) {
		window.location = "nier.html"
	} else if (b > 1) {
		window.location = "tlou.html"
	} else if (c > 1) {
		window.location = "ffxv.html"
	} else {
		alert('Please answer all the question')
	}
}
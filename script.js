const days = document.getElementById('days'),
	hours = document.getElementById('hours'),
	minutes = document.getElementById('minutes'),
	seconds = document.getElementById('seconds'),
	countdown = document.getElementById('countdown'),
	loading__img = document.getElementById('loading'),
	year = document.getElementById('year');

window.addEventListener('load', showContent);

function showContent() {
	setTimeout(() => {
		loading__img.remove();
		countdown.style.display = 'flex';
	}, 1000);
}

const current__year = new Date().getFullYear();
const new__year = new Date(`January 01 ${current__year + 1} 00:00:00`);

year.innerHTML = current__year + 1;

//Update countdown
function updateCountdown() {
	const current__time = new Date();
	const diff = new__year - current__time;

	const d = Math.floor(diff / 1000 / 60 / 60 / 24);
	const h = Math.floor(diff / 1000 / 60 / 60) % 24;
	const m = Math.floor(diff / 1000 / 60) % 60;
	const s = Math.floor(diff / 1000) % 60;

	days.innerHTML = d;
	hours.innerHTML = h < 10 ? '0' + h : h;
	minutes.innerHTML = m < 10 ? '0' + m : m;
	seconds.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);

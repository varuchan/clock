
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalTime = document.querySelector('.digital');

function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const digital = `${hours}:${minutes}:${seconds}`

	const secondsDegrees = ((seconds / 60) * 360) + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//template string to apply rotation of div based on seconds hand degree
	const minutesDegrees = ((minutes / 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hoursDegrees = ((hours / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

	digitalTime.innerHTML = digital;
}

setInterval(setDate, 1000);
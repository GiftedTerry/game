let player = document.querySelector('.player');
let gameContainer = document.querySelector('.game-container');
let obstacles = [];
let score = 0;
let speed = 5;

document.addEventListener('keydown', (e) => {
	if (e.key === 'ArrowUp') {
		player.style.top = `${parseInt(player.style.top) - speed}px`;
	}
	if (e.key === 'ArrowDown') {
		player.style.top = `${parseInt(player.style.top) + speed}px`;
	}
	if (e.key === 'ArrowLeft') {
		player.style.left = `${parseInt(player.style.left) - speed}px`;
	}
	if (e.key === 'ArrowRight') {
		player.style.left = `${parseInt(player.style.left) + speed}px`;
	}
});

setInterval(() => {
	// Generate obstacles
	let obstacle = document.createElement('div');
	obstacle.classList.add('obstacle');
	obstacle.style.top = `${Math.random() * 600}px`;
	obstacle.style.left = `${Math.random() * 800}px`;
	gameContainer.appendChild(obstacle);
	obstacles.push(obstacle);
	
	// Move obstacles
	obstacles.forEach((obstacle, index) => {
		obstacle.style.top = `${parseInt(obstacle.style.top) + 5}px`;
		if (parseInt(obstacle.style.top) > 600) {
			obstacles.splice(index, 1);
			gameContainer.removeChild(obstacle);
		}
	});
	
	// Check collision
	obstacles.forEach((obstacle) => {
		if (
			parseInt(player.style.top) + 50 > parseInt(obstacle.style.top) &&
			parseInt(player.style.top) < parseInt(obstacle.style.top) + 50 &&
			parseInt(player.style.left) + 50 > parseInt(obstacle.style.left) &&
			parseInt(player.style.left) < parseInt(obstacle.style.left) + 50
		) {
			alert('Game Over! Your score is ' + score);
			location.reload();
		}
	});
	
	// Increase score
	score++;
}, 1000 / 60); // 60 FPS

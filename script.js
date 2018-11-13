let board = {
	createBoard : function(size) {
		const board = document.getElementById('board');
		board.setAttribute('style', `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr)`);
		for (let i = 0; i < size * size; i++) {
			var div = document.createElement('div');
			div.classList.add('box');
			div.setAttribute('id', i);
			//div.textContent = i;
			div.addEventListener('mouseenter', function(e) {
				e.target.classList.add('blacked');
			});
			board.appendChild(div);
		}
	},

	resetBoard : function() {
		let boxes = document.querySelectorAll('.box');
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].classList.remove('blacked');
		}
	}
};

window.onload = function() {
	let reset = document.getElementById('reset');
	let newSize;

	board.createBoard(16);
	reset.onclick = function() {
		board.resetBoard();
		newSize = prompt("Enter a new grid size: ", 16);
		board.createBoard(newSize);
	}

};
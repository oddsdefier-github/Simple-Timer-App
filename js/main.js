//get all the element
const addBtn = document.getElementById("add-btn");
const nameList = document.getElementById("name-list");
const userInput = document.getElementById("user-input");
const timerElement = document.getElementById("timer");
const messageText = document.getElementById("message");
const resetBtn = document.getElementById("reset");



let addedTask = 0;

//add a function
function addTask() {

	function resetState() {
		location.reload();
	}
	//declared boolean here
	let isTimerEnabled = true;

	if (addedTask >= 2) {
		messageText.innerHTML = "Finish these first!";
		addBtn.replaceWith(resetBtn);
		resetBtn.style.display = "flex";
		addBtn.replaceWith(resetBtn);
		resetBtn.addEventListener("click", resetState);
		//execute boolean
		isTimerEnabled = false;
		return;
	}

	addedTask++;

	startTimer(300000);

	function startTimer(duration) {
		//check the boolean
		if (!isTimerEnabled) {
			return;
		}

		let remainingTime = duration;
		const intervalId = setInterval(function () {
			const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
			const seconds = Math.floor((remainingTime / 1000) % 60);
			timerElement.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
			remainingTime -= 1000;
			if (remainingTime < 0) {
				clearInterval(intervalId);
				timerElement.innerHTML = "Add";
			}
		}, 1000);
	}

	const newLi = document.createElement("li");
	const inputValue = document.createTextNode(userInput.value);

	newLi.appendChild(inputValue);
	nameList.appendChild(newLi);

	userInput.value = "";

	addBtn.removeEventListener("click", addTask);

	setTimeout(function () {
		addBtn.addEventListener("click", addTask);
	}, 300000);
}

addBtn.addEventListener("click", addTask);

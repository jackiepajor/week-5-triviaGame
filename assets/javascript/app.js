// 60 second game timer (Countdown)
var timer = 60;

// Declare variables for the total count of correct, incorrect, and unanswered Qustions
var correctCount = 0;
var incorrectCount = 0;
var unansweredCount = 0;

// Trivia Game Functions
$(document).ready(function () {
	// Intialize the game 
	$("#playGame").hide();
	$("#endGame").hide();
	// When user hits the Play button, display the game board and start the timer
	$("#playBtn").on("click", function () {
		$("#playGame").hide();
		$("#playGame").show();
		startCountdown();
		return;
	});

	// Function to display the timer countdown 
	function countdown() {
		// Display the timer which counts down from 60 seconds
		timer--;
		$('#timerSeconds').html(timer + " Seconds");
		// User finishes before time is up and clicks done
		$("#submitBtn").on("click", function () {
			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			timer = 0; // <---- Needed a hack since I couldn't get the clearInterval function to work... It's been a long week :/
			return;
		});
		// The game ends when the timer reaches 0 seconds
		if (timer == -1) {
			timeUp();
			$("#playGame").hide();
		}
	}

	// Function to display the countdown 
	function startCountdown() {
		setInterval(countdown, 1000);
	}

	// Function to tally answers runs when the timer reaches 0 seconds
	function timeUp() {
		// Determine which radio button answer was checked for each question
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		// Determine how many questions were answered correctly, answered incorrectly or unanswered
		// Question 1
		if (Q1 == undefined) {
			unansweredCount++;
		}
		else if (Q1 == "GiantTortoise") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 2
		if (Q2 == undefined) {
			unansweredCount++;
		}
		else if (Q2 == "80") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 3
		if (Q3 == undefined) {
			unansweredCount++;
		}
		else if (Q3 == "Giraffe") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 4
		if (Q4 == undefined) {
			unansweredCount++;
		}
		else if (Q4 == "LimaBean") {
			correctCount++;
		}
		else {
			inccorectCount++;
		}
		// Question 5
		if (Q5 == undefined) {
			unansweredCount++;
		}
		else if (Q5 == "Flamingos") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 6
		if (Q6 == undefined) {
			unansweredCount++;
		}
		else if (Q6 == "270") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 7
		if (Q7 == undefined) {
			unansweredCount++;
		}
		else if (Q7 == "Tiger") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 8
		if (Q8 == undefined) {
			unansweredCount++;
		}
		else if (Q8 == "200") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 9
		if (Q9 == undefined) {
			unansweredCount++;
		}
		else if (Q9 == "False") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}
		// Question 10
		if (Q10 == undefined) {
			unansweredCount++;
		}
		else if (Q10 == "4") {
			correctCount++;
		}
		else {
			incorrectCount++;
		}


		//Display results in the game over board 
		$('#correctAnswers').html(correctCount);
		$('#incorrectAnswers').html(incorrectCount);
		$('#unanswered').html(unansweredCount);
		$("#endGame").show();
	}

});



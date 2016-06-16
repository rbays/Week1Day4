//assign objects in the DOM to variables
var quizSelect = document.getElementById("quizSelect"),
	loadButton = document.getElementById("loadQuiz"),
	quizBox = document.getElementById("quizBox"),
	quizForm = document.getElementById("quizForm"),
	questionText = document.getElementById("questionText"),
	questionRadio = document.getElementById("questionRadio"),
	optionA = document.getElementById("qaText"),
	optionB = document.getElementById("qbText"),
	optionC = document.getElementById("qcText"),
	optionD = document.getElementById("qdText"),
	submitButton = document.getElementById("submit"),
	resultDiv = document.getElementById("results"),
	
	//assign game variables
	questionAnswerOutputs = [questionText, optionA, optionB, optionC, optionD],
	questionToIndexArray = ["question","a","b","c","d"],
	currentScore = 0,
	maxScore = 0,
	chosenQuiz = [],
	playing = false;
	currentQuestion = null;

//set quiz box invisible to start
quizBox.style.display = "none";

//arrays for the quizzes
var pokemonQuiz = [],
	musicQuiz = [],
	moviesQuiz = [];
	

//set up the individual question template
function Question(question,a,b,c,d,answer) {
	this.question = question;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.Answer = answer;
	this.answer = function(){
		switch(this.Answer){
			case "a" :
				return 0;
				break;
			case "b" :
				return 1;
				break;
			case "c" :
				return 2;
				break;
			case "d" :
				return 3;
				break;
			default :
				return 0;
		}
	}
};





//load quiz
loadButton.addEventListener('click',loadQuiz,false);

function loadQuiz(){
	submitButton.style.display = "block";
	
	//pokemon quiz questions
	pokemonQuiz.push(new Question("What is the original grass starter?","Squirtle","Bulbasaur","Caterpie","Blastoise","b"));
	pokemonQuiz.push(new Question("What was the pokédex entry for Mew Two?", "100", "2", "17", "150", "d"));
	pokemonQuiz.push(new Question("Who is the professor in Pokémon Blue and Red?", "Oak", "Elm", "Birch", "Poplar","a"));
	pokemonQuiz.push(new Question("What is the name of the starting area in Pokémon Blue and Red?", "Veridian City", "Cinnibar Island", "Palet Town", "Pewter City", "c"));
	pokemonQuiz.push(new Question("Which of these occurs earliest in the Pokédex?", "Mew", "Lapras", "Grimer", "Nidoking", "d"));
	
	//music quiz questions
	musicQuiz.push(new Question("Which of these was a song by the Spice Girls?", "Spice Rack", "Wannabe", "Angels", "Blue", "b"));
	musicQuiz.push(new Question("Which of tese is not a woodwind instrument?", "Flute", "Clarinet", "bassoon", "Marimba", "d"))
	musicQuiz.push(new Question("Who had a hit with Tub Thumpin'?", "Chupa Chup", "Cubby Bubby", "Chumbawamba", "Chim Chim Cherrie", "c"));
	musicQuiz.push(new Question("Which of these was not a song by Five", "Everybody Get Up", "When the Lights Go Out", "Slam dunk the Funk", "Don't Stop Me", "d"));
	musicQuiz.push(new Question("Which Beatle famously narrated Thomas the Tank Engine?", "Paul McCartney", "George Harrison", "Ringo Starr", "John Lenon", "c"));
	
	//movies quiz questions
	moviesQuiz.push(new Question("Who played Woody in Toy Story?", "Tim Allen", "Tom Hanks", "John Wayne", "Collin Firth","b"));
	moviesQuiz.push(new Question("Which of these was not a James Bond film?", "From Russia With Love", "Gold Member", "Live and Let Die", "Golden Eye", "b"));
	moviesQuiz.push(new Question("Who Framed Roger Rabbit?", "Nobody", "Judge Doom", "Jessica Rabbit", "Marvin Acme", "b"));
	moviesQuiz.push(new Question("Whish of these are not a race in Star Wars", "Wookie", "Jawa", "Zabrak", "Klingon", "d"));
	moviesQuiz.push(new Question("Which of these films came out most recently?", "Jurrasic Park", "Independence Day", "Toy story", "Forrest Gump", "b"));
	moviesQuiz.push(new Question("Which of these actors was NOT in Saving Private Ryan?", "Ben Afflex", "Matt Damon", "Bryan Cranston", "Vin Diesel", "a"));
	
	
	
	
	resultDiv.innerHTML = "";
	var allQuizMap = {
		"pokemon":pokemonQuiz,
		"music":musicQuiz,
		"movies":moviesQuiz
	},
		currentScore = 0;
	window.chosenQuiz = allQuizMap[quizSelect.value];
	window.maxScore = window.chosenQuiz.length;
	window.playing = true;
	quizBox.style.display = "block";
	loadNextQuestion();
}

//Function to load questions, triggered on load quiz button and submit button clicks
function loadNextQuestion(){
	if (chosenQuiz.length > 0){
		window.currentQuestion = window.chosenQuiz.pop();
		updateQuestion();
	}
	else{
		displayResults();
	}
}

//function to display next question
function updateQuestion(){
	for (i=0;i<5;i++){
		questionAnswerOutputs[i].innerHTML = currentQuestion[questionToIndexArray[i]];
		quizForm.reset();
	}	
}

//function to display results and hide quiz
function displayResults(){
	resultDiv.innerHTML = "Your score was " + currentScore + "/" + maxScore;
	submitButton.style.display = "none";
	
	
}

//submit an answer
submitButton.addEventListener('click',submitAnswers,false);

function submitAnswers(){
	checkAnswer();
	loadNextQuestion();				
}

//function to check answer and increment score
function checkAnswer(){
	var correctAnswer = currentQuestion.answer();
	if (quizForm[correctAnswer].checked){
		currentScore += 1;
	}
}
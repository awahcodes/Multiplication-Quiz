document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const rangeSelect = document.getElementById("range");
  const questionElement = document.querySelector(".question");
  const answerInput = document.querySelector(".answer-input");
  const submitButton = document.querySelector(".submit");
  const resetButton = document.querySelector(".reset");
  const nextButton = document.querySelector(".next");
  const questionButton = document.querySelector(".question-btn");
  const feedbackElement = document.querySelector(".feedback");

  let correctAnswer;

  // Function to generate a new multiplication question based on selected range
  function generateQuestion() {
    const selectedNumber = parseInt(rangeSelect.value); // Get the selected number
    const randomMultiplier = Math.floor(Math.random() * 13); // Random number between 0 and 12

    correctAnswer = selectedNumber * randomMultiplier;
    questionElement.textContent = `What is ${selectedNumber} x ${randomMultiplier}?`;

    // Clear previous feedback
    feedbackElement.textContent = "";
  }

  // Function to check the answer and display feedback
  function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === correctAnswer) {
      feedbackElement.innerHTML = "Correct! Well done! 👍😊";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.innerHTML = `Incorrect. The correct answer was ${correctAnswer}. 👎😢`;
      feedbackElement.style.color = "red";
    }
  }

  // Event listeners
  questionButton.addEventListener("click", () => {
    generateQuestion();
    answerInput.value = ""; // Clear previous answer
  });

  submitButton.addEventListener("click", () => {
    if (answerInput.value === "") {
      feedbackElement.textContent = "Please enter an answer.";
      feedbackElement.style.color = "black";
    } else {
      checkAnswer();
    }
  });

  resetButton.addEventListener("click", () => {
    answerInput.value = "";
    questionElement.textContent = 'Click "Get Question" to start';
    feedbackElement.textContent = ""; // Clear feedback
  });

  nextButton.addEventListener("click", () => {
    generateQuestion();
    answerInput.value = "";
    feedbackElement.textContent = ""; // Clear feedback
  });
});

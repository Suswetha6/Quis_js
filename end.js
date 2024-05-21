document.addEventListener('DOMContentLoaded', function() {
  const finalScore = localStorage.getItem('finalScore'); // Retrieve the final score from localStorage

  // Display the score on the page
  const finalScoreElement = document.getElementById('finalScore');
  if (finalScore) {
    finalScoreElement.textContent = finalScore;
  } else {
    finalScoreElement.textContent = "Score not found";
  }

  const playAgainButton = document.getElementById('restart');
  playAgainButton.addEventListener('click', function() {
    // Clear localStorage or reset necessary game state
    localStorage.removeItem('finalScore');
    window.location.href = 'question.html'; // Redirect back to the game page
  });

  const homeButton = document.getElementById('homepage');
  homeButton.addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to the home page
  });
});


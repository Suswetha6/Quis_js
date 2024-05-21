document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('redirectLink').addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = 'question.html'; 
  });
});


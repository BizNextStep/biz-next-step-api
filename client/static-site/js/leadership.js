document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/leadership/advice')
    .then(response => response.json())
    .then(data => {
      document.getElementById('advice').innerText = data.advice;
    })
    .catch(error => {
      console.error('Error fetching leadership advice:', error);
    });
});


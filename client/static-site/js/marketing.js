document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/marketing/insights')
    .then(response => response.json())
    .then(data => {
      document.getElementById('marketing-insights').innerText = data.insights;
    })
    .catch(error => {
      console.error('Error fetching marketing insights:', error);
    });
});


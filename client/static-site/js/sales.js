document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/sales/suggestions')
    .then(response => response.json())
    .then(data => {
      document.getElementById('sales-suggestions').innerText = data.suggestions;
    })
    .catch(error => {
      console.error('Error fetching sales suggestions:', error);
    });
});


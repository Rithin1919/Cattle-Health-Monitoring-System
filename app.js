document.getElementById('healthForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        age: document.getElementById('age').value,
        weight: document.getElementById('weight').value,
        bodyConditionScore: document.getElementById('bodyConditionScore').value,
        temperature: document.getElementById('temperature').value,
        heartRate: document.getElementById('heartRate').value,
        milkYield: document.getElementById('milkYield').value,
    };

    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('predictionResult').textContent = 'Predicted Disease: ' + data.prediction;
        })
        .catch(error => console.error('Error:', error));
});

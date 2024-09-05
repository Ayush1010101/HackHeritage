document.getElementById('recommendation-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const address = document.getElementById('address').value;

    try {
        const response = await fetch('http://localhost:3000/recommend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ address })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        displayRecommendations(data);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        alert('An error occurred while fetching recommendations. Please try again later.');
    }
});

function displayRecommendations(recommendations) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';

    if (recommendations.length === 0) {
        recommendationList.innerHTML = '<li>No hospitals found.</li>';
        return;
    }

    recommendations.forEach(hospital => {
        const listItem = document.createElement('li');
        listItem.textContent = `${hospital.name} - ${hospital.address} (Rating: ${hospital.rating}/5) - Distance: ${hospital.distance.toFixed(2)} km`;
        recommendationList.appendChild(listItem);
    });
}

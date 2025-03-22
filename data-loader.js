fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log('Loaded data:', data);
    })
    .catch(error => {
        console.error('Error loading data:', error);
    });

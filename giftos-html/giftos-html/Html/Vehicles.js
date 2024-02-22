document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Convert date to ISO string
    const ordersDate = new Date(formData.get('ordersDate')).toISOString();
    
    // Prepare data object
    const data = {
        email: formData.get('email'),
        ordersDate: ordersDate,
        totalAmount: parseFloat(formData.get('totalAmount')),
        ordersStatus: formData.get('ordersStatus')
    };
    
    // Make a POST request to your server
    fetch('http://localhost:9090/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        // Display response
        document.getElementById("output").innerHTML = JSON.stringify(result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

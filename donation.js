document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("donationForm").addEventListener("submit", function(event) {
        
        // values from the user
        const name = document.getElementById("name").value;
        const amount = document.getElementById("amount").value;

        // Validate inputs
        if (name === "" || amount === "" || amount <= 0) {
            alert('Please enter a valid name and donation amount.');
            return;  // If validation fails, stop further code execution
        }
        // Thanks alert
        alert("Thank you, "+name+"! Your donation of "+amount+" has been received.");
    });
});
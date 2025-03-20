function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateTime, 1000);

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Fetching the users data from a JSON file (simulated as a variable here)
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.email === email && user.password === password);
            if (user) {
                // If credentials match, redirect to the "only for workers" page
                window.location.href = "workers.html"; // Replace with your restricted page
            } else {
                // Display error message if credentials don't match
                errorMessage.style.display = "block";
            }
        })
        .catch(error => console.error("Error loading user data:", error));
}
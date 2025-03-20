function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateTime, 1000);

// no idea whatsoever
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            const user = data.find(user => user.email === email && user.password === password);
            if (user) {
                window.location.href = "workers.html"; 
            } else {
                errorMessage.style.display = "block";
            }
        })
        .catch(error => console.error("Error loading user data:", error));
}
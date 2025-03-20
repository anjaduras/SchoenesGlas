function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateTime, 1000);

    // Contact

 // Login
  
  function handleAuth(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      alert('Erfolgreich angemeldet!');
      window.location.href = './workers.html';
    } else {
      errorMessage.textContent = 'Ungültiger Benutzername oder ungültiges Passwort. Bitte versuchen Sie es erneut.';
    }
  }
  
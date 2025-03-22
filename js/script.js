function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit'});
}
setInterval(updateTime, 1000);

 // Login
  
  function handleAuth(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    const validEmail = 'user@SchoenesGlas.de';
    const validPassword = '0ptikerKette';
  
    if (email === validEmail && password === validPassword) {
      alert('Erfolgreich angemeldet!');
      window.location.href = './workers.html';
    } else {
      errorMessage.textContent = 'Ungültiger Benutzername oder ungültiges Passwort. Bitte versuchen Sie es erneut.';
    }
  }
  
  // Design

  document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".grid .startbutton");
  
    buttons.forEach(button => {
      button.addEventListener("mouseover", function () {
        this.style.transform = "translateY(-5px)";
        this.style.transition = "transform 0.2s ease-in-out";
      });
  
      button.addEventListener("mouseout", function () {
        this.style.transform = "translateY(0)";
      });
    });
  });

  // coded by Anna Duras, 03-2025
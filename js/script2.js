  // Contact

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("https://contact-anja.vercel.app/send_email", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    alert(result.success ? "Nachricht erfolgreich gesendet!" : "Error: " + result.error);

    if (response.ok) {
      window.location.href = "./index.html";
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
}

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

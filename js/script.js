function updateTime() {
    const now = new Date();
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };  // Displaying date as DD/MM/YYYY
    document.getElementById("time").innerText = now.toLocaleDateString(undefined, options) + " " + now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateTime, 1000);

// no idea whatsoever
function login() {
}
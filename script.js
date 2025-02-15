document.addEventListener("DOMContentLoaded", function() {
    const addressDiv = document.getElementById("address");
    const countdownDiv = document.getElementById("countdown");
    const address = "2239 S Michigan Ave, Chicago, IL 60616";
    const message = "Dragonroom address will be provided Saturday morning at 1 AM.";

  
    setInterval(displayAddress, 60000); // Check every minute
    setInterval(updateCountdown, 1000); // Update countdown every second
});

document.addEventListener("DOMContentLoaded", function() {
    const addressDiv = document.getElementById("address");
    const address = "2239 S Michigan Ave, Chicago, IL 60616";
    const message = "Dragonroom address will be provided Saturday morning at 1 AM.";

    function displayAddress() {
        const now = new Date();
        const hours = now.getUTCHours() - 6; // Convert UTC to Central Time
        const day = now.getUTCDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)

        if (hours < 0) {
            hours += 24; // Adjust for negative hours
        }

        if (hours >= 2 && hours < 5) {
            addressDiv.textContent = address;
        } else {
            addressDiv.textContent = message;
        }

        // Special message for Saturday morning at 1 AM Central Time
        if (day === 6 && hours === 1) {
            addressDiv.textContent = "Dragonroom address will be provided now.";
        }
    }

    displayAddress();
    setInterval(displayAddress, 60000); // Check every minute
});

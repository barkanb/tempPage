document.addEventListener("DOMContentLoaded", function() {
    const addressDiv = document.getElementById("address");
    const countdownDiv = document.getElementById("countdown");
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
            countdownDiv.textContent = "";
        } else {
            addressDiv.textContent = message;
            updateCountdown();
        }

        // Special message for Saturday morning at 1 AM Central Time
        if (day === 6 && hours === 1) {
            addressDiv.textContent = "Dragonroom address will be provided now.";
            countdownDiv.textContent = "";
        }
    }

    function updateCountdown() {
        const now = new Date();
        const target = new Date(now);
        target.setUTCHours(7, 0, 0, 0); // Set target time to 1 AM Central Time (UTC-6)

        if (now.getUTCDay() === 6 && now.getUTCHours() >= 7) {
            target.setUTCDate(target.getUTCDate() + 1); // Move to next day if it's already past 1 AM on Saturday
        }

        const diff = target - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        countdownDiv.textContent = `Time until address is displayed: ${hours}h ${minutes}m ${seconds}s`;
    }

    displayAddress();
    setInterval(displayAddress, 60000); // Check every minute
    setInterval(updateCountdown, 1000); // Update countdown every second
});

document.addEventListener("DOMContentLoaded", function() {
    const addressElement = document.getElementById("text");
    const currentTime = new Date();
    const targetTime = new Date();
    
    // Set target time to 5 AM Central Time
    targetTime.setHours(5, 0, 0, 0);
    targetTime.setMinutes(targetTime.getMinutes() + targetTime.getTimezoneOffset() - 360); // Adjust for Central Time (UTC-6)

    if (currentTime >= targetTime) {
        addressElement.textContent = "Please follow us for info about the next party";
    }
});

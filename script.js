document.addEventListener("DOMContentLoaded", function() {
    const addressElement = document.getElementById("text");
    const currentTime = new Date();
    
    // Create a new Date object for the target time (5 AM Central Time in UTC)
    const targetTime = new Date();
    targetTime.setUTCHours(11, 0, 0, 0); // 5 AM Central Time is 11 AM UTC

    if (currentTime >= targetTime) {
        addressElement.textContent = "Please follow us for info about the next party";
        const imageElement = document.querySelector("img");
        
        // Create a red X line across the image
        const xLine = document.createElement("div");
        xLine.style.position = "absolute";
        xLine.style.top = "0";
        xLine.style.left = "0";
        xLine.style.width = "100%";
        xLine.style.height = "100%";
        xLine.style.background = "linear-gradient(to bottom right, red, red), linear-gradient(to top right, red, red)";
        xLine.style.backgroundSize = "100% 2px, 2px 100%";
        xLine.style.backgroundRepeat = "no-repeat";
        xLine.style.pointerEvents = "none"; // Ensure the line doesn't interfere with image interaction

        // Wrap the image in a relative container
        const container = document.createElement("div");
        container.style.position = "relative";
        container.style.display = "inline-block";
        imageElement.parentNode.insertBefore(container, imageElement);
        container.appendChild(imageElement);
        container.appendChild(xLine);
    }
});

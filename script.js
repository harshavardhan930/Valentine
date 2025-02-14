// Handle Gift Click Event
document.getElementById("gift-box").addEventListener("click", function() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("surprise-page").style.display = "block";

    // Show surprise page with animation
    setTimeout(() => {
        document.querySelector(".container").classList.add("show");
    }, 100);
});

// Countdown Timer to a special date
function countdownTimer() {
    const eventDate = new Date("2025-02-14T00:00:00").getTime(); // Change to your special date
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs`;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "The special moment is here! 🎉";
    }
}

setInterval(countdownTimer, 1000);

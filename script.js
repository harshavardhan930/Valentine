// Handle Gift Click Event
document.getElementById("gift-box").addEventListener("click", function() {
    document.getElementById("gift-screen").style.display = "none";
    document.getElementById("surprise-page").style.display = "block";

    // Show surprise page with animation
    setTimeout(() => {
        document.querySelector(".container").classList.add("show");
    }, 100);
});

// Play Song and Show Telugu Poem
document.getElementById("play-song").addEventListener("click", function() {
    document.getElementById("hidden-poem").style.display = "block"; // Show Poem
    document.getElementById("song").play(); // Play Song

    // Disable Button After Clicking
    this.disabled = true;
    this.innerText = "🎶 Playing... 🎶";
});

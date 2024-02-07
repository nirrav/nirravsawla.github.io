document.addEventListener("DOMContentLoaded", function () {
    // Load a random quote when the page loads
    loadRandomQuote();

    // Event listener for the letter icon
    document.querySelector(".letter-icon img").addEventListener("click", openLoveLetter);

    // Event listeners for hover animations
    document.querySelector(".envelope").addEventListener("mouseenter", animateEnvelope);
    document.querySelector(".envelope").addEventListener("mouseleave", resetEnvelope);

    document.querySelector(".heart").addEventListener("mouseenter", animateHeart);
    document.querySelector(".heart").addEventListener("mouseleave", resetHeart);

    // jQuery animation for card on container hover
    $(".container").mouseenter(function () {
        $(".card").stop().animate({
            top: "-90px",
        }, "slow");
    }).mouseleave(function () {
        $(".card").stop().animate({
            top: 0,
        }, "slow");
    });
});

// Function to load a random quote
function loadRandomQuote() {
    var quotes = [
        "I have found the one whom my soul loves.",
        "You are my today and all of my tomorrows.",
        "You complete me.",
        "You had me at hello.",
        "My heart is and always will be yours.",
        "You are my sunshine on a cloudy day.",
        "Together is my favorite place to be.",
        "I love you to the moon and back.",
        "Forever and always.",
        "You are the love of my life.",
        "You are the reason I believe in love.",
        "You make my heart smile.",
        "I still fall for you every day.",
        "I’m much more me when I’m with you.",
        "My heart is and always will be yours.",
        "You’re the best thing I never knew I needed.",
    ];

    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerText = randomQuote;
}

// Function to open the love letter modal
function openLoveLetter() {
    // Show the modal
    document.getElementById('loveLetterModal').style.display = 'block';
}

// Function to close the love letter modal
function closeLoveLetter() {
    // Hide the modal
    document.getElementById('loveLetterModal').style.display = 'none';
}

// Function to animate the envelope
function animateEnvelope() {
    // Add animation class
    document.querySelector(".envelope").classList.add("envelope-hover");
}

// Function to reset envelope animation
function resetEnvelope() {
    // Remove animation class
    document.querySelector(".envelope").classList.remove("envelope-hover");
}

// Function to animate the heart
function animateHeart() {
    // Add animation class
    document.querySelector(".heart").classList.add("heart-hover");
}

// Function to reset heart animation
function resetHeart() {
    // Remove animation class
    document.querySelector(".heart").classList.remove("heart-hover");
}

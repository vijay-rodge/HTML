// Typing animation for the name
document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name-animation");
    const nameText = "Vijay Rodge";
    let index = 0;

    function typeEffect() {
        if (index < nameText.length) {
            nameElement.textContent += nameText.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }

    // Start the typing effect
    nameElement.textContent = ""; // Clear initial text
    typeEffect();
});

// Carousel functionality
let currentIndex = 0;

function moveCarousel(direction) {
    const projectCards = document.querySelectorAll(".project-card");
    const totalCards = projectCards.length;

    currentIndex = (currentIndex + direction + totalCards) % totalCards; // Wrap around
    projectCards.forEach((card, index) => {
        card.style.transform = `translateX(${(index - currentIndex) * 100}%)`; // Move cards
    });
}

// Skill bar animation on page load
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        bar.style.width = skillLevel;
    });
});

window.addEventListener('load', () => {
    alert("Welcome to Cool Smart Zebras!");
});

const modeToggle = document.querySelector('#modeToggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

const surpriseBtn = document.querySelector('#surpriseBtn');
const funFacts = [
    "Zanda loves hiking and the sea!",
    "Sandra loves cats and mountain climbing!",
    "Carlos worked as a fisherman and loves skateboarding!"
];

surpriseBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    alert(funFacts[randomIndex]);
});
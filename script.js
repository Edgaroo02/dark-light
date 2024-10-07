// Select the toggle button
const toggleButton = document.querySelector('button');

// Function to switch between light and dark modes
function toggleMode() {

// connect with html class/document elements
    const body = document.body;
    const header = document.querySelector('.header');
    const menu = document.querySelector('.menu');
    const footer = document.querySelector('.footer');
    
// select elements to change/toggle colour
    body.classList.toggle('dark');
    menu.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
    toggleButton.classList.toggle('dark');
    
// update button text
    if (body.classList.contains('dark')) {
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        toggleButton.textContent = 'Switch to Dark Mode';
    }
}

// Event listener to action above with a click
toggleButton.addEventListener('click', toggleMode);
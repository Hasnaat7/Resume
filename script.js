document.addEventListener('DOMContentLoaded', function() {
    const train = document.querySelector('.train');
    
    train.addEventListener('click', function() {
        // Add the animation class to trigger the animation
        train.classList.add('animate');
        
        // Remove the animation class after the animation is complete
        // to allow re-triggering the animation
        train.addEventListener('animationend', function() {
            train.classList.remove('animate');
        }, { once: true });
    });
});


// Function to smoothly transition to the dark theme
function switchToDarkTheme() {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    // Wait for the fade-out animation to complete before switching pages
    setTimeout(() => {
        window.location.href = 'index2.html';
    }, 500); // Match this time to your fade-out duration
}

// Function to smoothly transition back to the regular theme
function switchToLightTheme() {
    document.body.classList.remove('fade-in');
    document.body.classList.add('fade-out');

    // Wait for the fade-out animation to complete before switching pages
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500); // Match this time to your fade-out duration
}

// Add the fade-in effect when the page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('fade-in');
    }, 10); // Delay to ensure the class is added after the initial load
});



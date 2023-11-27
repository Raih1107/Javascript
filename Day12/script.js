document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const enableDarkMode = document.body.classList.contains('dark-mode');
        
        // Save dark mode preference to localStorage
        localStorage.setItem('darkMode', enableDarkMode ? 'enabled' : 'disabled');
    });
});

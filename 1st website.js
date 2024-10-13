const themeButton = document.getElementById('theme');

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
} else {
    console.error('Theme button not found.');
}

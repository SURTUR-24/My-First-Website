const themeButton = document.getElementById('theme');

if (themeButton) {
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeButton.classList.add('clicked');
        setTimeout(() => {
            themeButton.classList.remove('clicked');
        }, 300); 
    });
} else {
    console.error('Theme button not found.');
}

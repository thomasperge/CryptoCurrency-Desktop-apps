const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the app
    document.body.classList.toggle('dark');
});
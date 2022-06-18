const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    console.log('ici')
    // change the theme of the app
    document.body.classList.toggle('dark');
});
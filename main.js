const chk = document.getElementById('chk');

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// toggleDarkMode()

chk.addEventListener('change', () => {
	toggleDarkMode();
});

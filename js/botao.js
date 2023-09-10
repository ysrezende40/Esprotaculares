const botaodark = document.getElementById('dark-mode-toggle');
const body = document.body;

botaodark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

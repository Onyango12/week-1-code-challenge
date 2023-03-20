

const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const speed = parseInt(document.querySelector('#speed').value);

    if (speed <= 70) {
        resultDiv.textContent = 'Ok';
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            resultDiv.textContent = 'License suspended';
        } else {
            resultDiv.textContent = `Points: ${demeritPoints}`;
        }
    }
});

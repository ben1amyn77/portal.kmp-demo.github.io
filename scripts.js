document.addEventListener('DOMContentLoaded', () => {
    const startStopBtn = document.getElementById('startStopBtn');
    const flipInner = startStopBtn.querySelector('.flip-inner');
    let isActive = false;

    startStopBtn.addEventListener('click', () => {
        if (isActive) {
            startStopBtn.classList.remove('active');
        } else {
            startStopBtn.classList.add('active');
        }
        isActive = !isActive;
    });
});

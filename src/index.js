function timerFeatureInPage() {
    const button = document.getElementById('start');

    button.addEventListener('click', function () {
        this.disabled = true;
        timer(20);
    })

    function timer(durationInMinutes) {
        let duration = durationInMinutes * 60;
        --duration;
        const textDivDisplay = document.getElementById('clock');

        const timerInterval = setInterval(function() {
            let textInMinutes = Math.floor(duration / 60);
            let textInSeconds = duration % 60;
            let timeInText = `${textInMinutes < 10 ? '0' : ''}${textInMinutes}:${textInSeconds < 10 ? '0' : ''}${textInSeconds}`;

            textDivDisplay.textContent = timeInText;

            if (duration > 0) {
                duration--;
            }
            else {
                clearInterval(timerInterval);
                textDivDisplay.textContent = '00:00';
                alert("Time is up!");
                button.disabled = false;
            }
        }, 1000);
    }
}

timerFeatureInPage();
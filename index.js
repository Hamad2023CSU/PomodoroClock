function timerFeatureInPage() {
    const startButton = document.getElementById('start');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const resetButton = document.getElementById('reset');

    let pauseFlag;
    let resetFlag;

    startButton.addEventListener('click', function () {
        startButton.style.display = 'none';
        pauseButton.style.display = "inline-block";
        resetButton.style.display = "inline-block";
        pauseFlag = false;
        resetFlag = false;
        timer(20);
    })

    pauseButton.addEventListener('click', function () {
        pauseFlag = true;
        pauseButton.style.display = "none";
        resumeButton.style.display = "inline-block";
    })

    resumeButton.addEventListener('click', function () {
        resumeButton.style.display = "none";
        pauseButton.style.display = "inline-block";
        pauseFlag = false;
    })

    resetButton.addEventListener('click', function () {
        resumeButton.style.display = "none";
        pauseButton.style.display = "none";
        resetButton.style.display = "none";
        startButton.style.display = "inline-block";
        resetFlag = true;
        pauseFlag = false;
    })

    function timer(durationInMinutes) {
        let duration = durationInMinutes * 60;
        --duration;
        const textDivDisplay = document.getElementById('clock');

        const timerInterval = setInterval(function() {
            if (pauseFlag) {
                return;
            }

            if (resetFlag) {
                textDivDisplay.textContent = "20:00";
                clearInterval(timerInterval);
            }
            else {
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
                }
            }
        }, 1000);
    }
}

timerFeatureInPage();
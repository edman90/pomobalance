function startCountdown(minutesChosen) {

    let timeSec = minutesChosen * 60;

    let setCdInterval = setInterval(function() {
        let displaySeconds = timeSec % 60;
        let displayMinutes = Math.floor(timeSec / 60);

        countdownBox.innerHTML = `${displayMinutes} : ${displaySeconds}`;
        timeSec--;

        if(timeSec < 0){
            clearInterval(setCdInterval);
        }

        cancelBox.addEventListener("click", (evt) => {
            clearInterval(setCdInterval);
            renderBackToStart();

        });

    }, 1000);

}
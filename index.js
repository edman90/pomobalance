const headerMain = document.querySelector("#headermain"),
    infoDesc = document.querySelector("#info-desc"),
    countdownBox = document.querySelector("#CdBox"),
    cancelBox = document.querySelector("#CancelBox"),
    videoBox = document.querySelector("#vidBox"),
    selBox = document.querySelector("#selectBox"),
    timeBox = document.querySelector("#timeButtonBox"),
    breakTime = document.querySelector(".take-break");

selBox.addEventListener("click", renderCountdown);

function renderCountdown(evt) {

    if (evt.target.classList.contains("set-time")){
        videoBox.innerHTML = "";
        hideElements(infoDesc, selBox, videoBox);
        unhideElements(countdownBox, cancelBox);
        const minutesChosen = parseFloat(evt.target.id);
        startCountdown(minutesChosen);

    }
}

function hideElements(...elems){
    elems.forEach((elem) => (elem.hidden = true));

}

function unhideElements(...elems){
    elems.forEach((elem) => (elem.hidden = false));

}

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

function renderBackToStart() {
    hideElements(countdownBox, cancelBox, videoBox, breakTime);
    unhideElements(infoDesc, selBox, timeBox);
}
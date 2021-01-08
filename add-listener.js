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
function hideElements(...elems){
    elems.forEach((elem) => (elem.hidden = true));

}

function unhideElements(...elems){
    elems.forEach((elem) => (elem.hidden = false));

}
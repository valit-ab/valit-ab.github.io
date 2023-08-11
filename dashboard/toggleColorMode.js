

export function changeColorMode(mode){
    if (mode == "LM"){
        document.body.style.background = "#edebef"
    } else if (mode == "DM") {
        document.body.style.background = "#121212"
    }
}

export function initColorToggle() {
    var checkbox = document.getElementById("CMcheckbox");
    checkbox.addEventListener('change', () => {
        if(document.getElementById("CMcheckbox").checked == true){
            changeColorMode('LM');
            localStorage.setItem('ColorMode', "LM")
        } else {
            changeColorMode('DM');
            localStorage.setItem('ColorMode', "DM")

        }
    })
}


export function initColorPreference(){
    if(window.matchMedia("(prefers-color-scheme:dark)").matches){
        document.getElementById("CMcheckbox").checked = false;
        changeColorMode('DM');
        localStorage.setItem('ColorMode', "DM")

    } else {
        document.getElementById("CMcheckbox").checked = true;
        changeColorMode('LM');
        localStorage.setItem('ColorMode', "LM")
    }
}

let number = 0;

function numberGoUp() {
    number++;

    update();
}

function buyAutoNumber() {
    // TODO
}

function update() {
    document.getElementById("number").innerText = number;

    // TODO: Convert to number
    if (document.getElementById("auto-number-cost").innerText >= number) {
        document.getElementById("auto-number").setAttribute("disabled", "false");
    } else {
        document.getElementById("auto-number").setAttribute("disabled", "true");
    }


}
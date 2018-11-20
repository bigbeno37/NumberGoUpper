let number = 0;

let autoNumberVersion = 1;
let numberPerSecond = 0;
let autoNumberCost = 10;

let autoNumberInterval;

function numberGoUp() {
    number++;

    update();
}

function buyAutoNumber() {
    if (number < autoNumberCost) return;

    number -= autoNumberCost;

    autoNumberVersion++;
    autoNumberCost = Math.ceil(autoNumberCost*1.55);
    numberPerSecond = numberPerSecond > 0 ? numberPerSecond * 1.5 : 1;

    clearInterval(autoNumberInterval);

    autoNumberInterval = setInterval(() => {
        number++;
        update();
    }, 1000/numberPerSecond);

    update();
}

function update() {
    document.getElementById("number").innerText = number;

    document.getElementById("number-per-second").innerText = (numberPerSecond).toFixed(2);

    document.getElementById("auto-number-version").innerText = autoNumberVersion;
    document.getElementById("auto-number-cost").innerText = autoNumberCost;

    document.getElementById("auto-number").disabled = autoNumberCost > number;
}
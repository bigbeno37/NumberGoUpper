let number = 0;

let autoNumberVersion = 1;
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
    autoNumberCost = Math.ceil(autoNumberCost*1.3);

    clearInterval(autoNumberInterval);

    autoNumberInterval = setInterval(() => {
        number++;
        update();
    }, 1000/(autoNumberVersion - 1));

    update();
}

function update() {
    document.getElementById("number").innerText = number;

    document.getElementById("number-per-second").innerText = (autoNumberVersion-1).toFixed(2);

    document.getElementById("auto-number-version").innerText = autoNumberVersion;
    document.getElementById("auto-number-cost").innerText = autoNumberCost;

    document.getElementById("auto-number").disabled = autoNumberCost > number;
}
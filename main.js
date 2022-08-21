const resetButton = document.getElementById('reset')
const peopleInput = document.getElementById('people')
const customInput = document.getElementById('custom')
const amount = document.querySelector('#fiqure')
// const para = document.querySelector('span')

function checkInput() {
    if (peopleInput.value < 1) {
        para.textContent = "can't be zero"
    }
}

resetButton.onclick = function () {
    // const amount = document.querySelector('#fiqure')
    amount.textContent = 0.00
}
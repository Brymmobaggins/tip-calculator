const resetButton = document.getElementById('reset')
const peopleInput = document.getElementById('people')
const customInput = document.getElementById('custom')
const tipAmount = document.querySelector('#amount')
const tipTotal = document.querySelector('#total')
// // const para = document.querySelector('span')
// const coys = document.getElementById('coys')

function checkInput() {
    if (peopleInput.value < 1) {
        para.textContent = "can't be zero"
    }
}


// reset button
resetButton.onclick = function () {
    tipAmount.textContent = "0.00"
    tipTotal.textContent = "0.00"
    customInput.value = "0"
    peopleInput.value = "1"

}
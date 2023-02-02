const CURRENT_YEAR = 2023
const CORRECT_ANSWER = "Ответ правильный"
const INCORRECT_ANSWER = "Ответ неправильный"

const inputNode = document.querySelector(".js-input")
const btnNode = document.querySelector(".js-btn")
const outputNode = document.querySelector(".js-output")

btnNode.addEventListener("click", () => {
    const answer = Number(inputNode.value)
    
    if(!inputNode.value) {
        return
    }
    
    let output = CORRECT_ANSWER

    if(answer !== CURRENT_YEAR) {
        output = INCORRECT_ANSWER
    }

    outputNode.innerHTML = output
})
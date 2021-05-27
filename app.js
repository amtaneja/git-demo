let inputValue;

let input = document.getElementById('input1')


input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        wordLength();
    }
})

let submit = document.getElementById('submit')

    submit.addEventListener('click', (event) => {
    wordLength();
})



function wordLength(){
    inputValue = parseInt(input.value)
    let wordLimit = document.getElementById('wordLimit')
    

    if (isNaN(inputValue)) {
        wordLimit.innerText = `Please enter valid word limit.`
        
    } else {
        console.log(inputValue)
        wordLimit.innerText = `Word Limit : ${inputValue} words.`
    }

}
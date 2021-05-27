let inputValue;
let textArea;

//getting input word limit from the user
let input = document.getElementById('input1')


//on enter press we get the input value and display the wordlength
input.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        wordLength();
        textBox()
    }
})


//on submit button press we get the input value and display the wordlength
let submit = document.getElementById('submit')
submit.addEventListener('click', (event) => {
    wordLength();
    textBox();
})


//getting word limit for the user checking it for number and showing value on webpage.
function wordLength() {
    inputValue = parseInt(input.value)
    let wordLimit = document.getElementById('wordLimit')

    if (isNaN(inputValue)) {
        wordLimit.innerText = `Please enter valid word limit.`

    } else {
        console.log(inputValue)
        wordLimit.innerText = `Your Word Limit : ${inputValue} words.`
    }

}



textArea = document.getElementById('textArea')
let wordHead = document.getElementById('word-head')

function textBox() {
    textArea.addEventListener('keypress', (event) => {
        let spaceCount = (textArea.value.match(/ /g) || []).length;
        textArea.setAttribute("style", "background-color:white");
        console.log(spaceCount)
        console.log(inputValue)
        let wordDiff = inputValue - spaceCount;
        wordHead.innerText = `You have ${wordDiff} words remaining.`
        if (spaceCount >= inputValue) {
            console.log(spaceCount >= inputValue)
            let limitExceed = spaceCount - inputValue;
            wordHead.innerText = `You have exceed word limit by ${limitExceed} words. `
            let copy = document.getElementById('copy')
            
            textArea.setAttribute("style", "background-color:rgb(146, 96, 96)");
        } else {
            
        }

    })
}
function copy() {
    textArea.select();
    document.execCommand("copy");
}


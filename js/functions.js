const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronous",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let attempts = 0 //laskuri arvausten määrälle 


const newGame = () => {
    const random = Math.floor(Math.random() * 10) + 1
    randomizedWord = words[random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    attempts = 0 // nollataan laskuri uuteen peliin 
    span.innerHTML = `${attempts}`
}

const win = () => {
    alert(`Olet arvannut oikein, sana on ${randomizedWord}`)
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0;i<randomizedWord.length;i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let NewString = maskedWord.split('')
            NewString.splice(i,1,guess)
            NewString = NewString.join('')
            maskedWord = NewString
        }
    }
    output.innerHTML = maskedWord
}

newGame()

input.addEventListener('keypress',(e) => {
    if (e.key === 'Enter') {
        e.preventDefault()

        const guess = input.value
        attempts++ //lisätään arvauslaskuriin yksi
        span.innerHTML= ` ${attempts} `

        if (guess.toLowerCase() === randomizedWord.toLocaleLowerCase()) {
            win()
            

        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win()
            }
        }else {
            alert("Olet arvannut väärin!")

        }
        input.value=''
    }
})


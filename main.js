const unSeenCards = document.querySelector("#unSeenCards")
const seeCards = document.querySelectorAll("#unSeenCards div")
const letters = document.querySelectorAll("#letters div")
const lettersDiv = document.querySelector("#letters")
const countriesBtn = document.querySelector("#contriesBtn")
const fruitsBtn = document.querySelector("#fruitsBtn")
const carsBtn = document.querySelector("#carsBtn")
const containerElement = document.querySelector(".container")
const mainTimeElement = document.querySelector("#mainTimeDiv")
const timeDiv = document.querySelector("#timeDiv")
const h1DivElement = document.querySelector("#h1Div")
const btnsElement = document.querySelector(".btnS")
const healthDivElement = document.querySelector("#healthDiv")

const countries = ["TURKEY", "UNITED KINGDOM", "UNITED STATES", "UKRAINE", "NEW ZELLAND"]
const fruits = ["APPLE", "PEAR", "BANANA", "ORANGE", "MANDARIN", "APRICOT", "BERRY"]
const cars = ["OPEL", "BMW", "MERCEDES", "MINI COOPER", "SSANYONG", "TOYOTA", "MAZDA", "AUDI", "HONDA", "SKODA", "RENAULT", "PEUGEOT", "CHEVROLET"]

document.body.addEventListener("click", (event) => {
    const h1Element = document.createElement("h1")
    h1Element.style.color = "#F8E1FF"
    if(event.target == countriesBtn){
        h1Element.innerHTML = "Countries"
        h1DivElement.prepend(h1Element)
    }
    if(event.target == fruitsBtn){
        h1Element.innerHTML = "Fruits"
        h1DivElement.prepend(h1Element)
    }
    if(event.target == carsBtn){
        h1Element.innerHTML = "Cars"
        h1DivElement.prepend(h1Element)
    }
    
})


function selectCategory(btn, array){
    btn.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * array.length)
        const randomLetters = array[randomNumber].split("")
        
        const emptyChar = randomLetters.indexOf(" ")
        delete randomLetters[emptyChar]
        
        randomLetters.forEach(letterEach => {
            const emptyDiv = document.createElement("div")
            emptyDiv.innerHTML = " "
            unSeenCards.append(emptyDiv)

            const unknownCountry = document.createElement("div")
            unknownCountry.innerHTML = letterEach
            unknownCountry.classList.add("d-none")
            unSeenCards.append(unknownCountry)
        
            let heartIfNumber = 5

            letters.forEach(letter => {
                letter.addEventListener("click", () => {
                    if(letter.innerHTML === unknownCountry.innerHTML){
                        unknownCountry.classList.remove("d-none")
                        emptyDiv.classList.add("d-none")
                    }
                    if(!randomLetters.includes(letter.innerHTML)){
                        const heart = document.querySelector(`#heart${heartIfNumber}`)
                        console.log(heart)
                        heart.style.transform = "scale(0)"
                        heart.style.transitionDuration = ".5s"
                        heartIfNumber--
                    }
                    if(heartIfNumber == 0){
                        const finishHeartElement = document.querySelector("#finishMsgHeart")
                        finishHeartElement.classList.remove("d-none")
                        containerElement.classList.add("d-none")
                        document.body.style.backdropFilter = "blur(15px)"
                    }
                    const healthStartBtn = document.querySelector("#startAgainHeart")
                    healthStartBtn.addEventListener("click", () => {
                        window.location.reload();
                    })
                })
            })
        })

        

        btnsElement.classList.add("d-none")
        lettersDiv.classList.remove("d-none")
        mainTimeElement.classList.remove("d-none")
        healthDivElement.classList.remove("d-none")

        function widthZero(){
            let gameTime = 0
            timeDiv.style.width = gameTime + "px"
        }
        setTimeout(widthZero, 1)

        timeDiv.style.transitionDuration = "60s"
        timeDiv.style.transitionTimingFunction = "linear"
        
        const finishMsgElement = document.querySelector("#finishMsg")

        function Bitti(){
            finishMsgElement.classList.remove("d-none")
            containerElement.classList.add("d-none")
            document.body.style.backdropFilter = "blur(15px)"
        }

        setTimeout(Bitti, 60006)

        const startAgainBtn = document.querySelector("#startAgain")

        startAgainBtn.addEventListener("click", () => {
            window.location.reload();
        })
    })
}
selectCategory(countriesBtn, countries)
selectCategory(fruitsBtn, fruits)
selectCategory(carsBtn, cars)
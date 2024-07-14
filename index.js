const container = document.querySelector(".container")
const colorPicker = document.querySelector(".setColor")
const sizeButton = document.querySelector(".sizeButton")
const setSize = document.querySelector(':root')
const setRainbow = document.querySelector(".rainbow")

let size = 8
let mouseDown = false

setSize.style.setProperty('--size', size)

function checkRainbowChecked(square, color) {
    if (setRainbow.checked) {
        let r = Math.random() * 255
        let g = Math.random() * 255
        let b = Math.random() * 255
        square.style.backgroundColor = "rgb(" + r +","+ g +","+ b + ")" }
        else {
            square.style.backgroundColor = color
        }
}

// Paint only when the mouse is down

function checkMouseDown(square, color) {
    square.addEventListener("mousedown", () => {
        mouseDown = true
        checkRainbowChecked(square, color)
    })
    
    square.addEventListener("mouseover", () => {
        if (mouseDown) {
            checkRainbowChecked(square, color)
        }
    })
    document.addEventListener("mouseup", () => {
        mouseDown = false
    })
        
}


function randomColors(){
    setRainbow.addEventListener("change", (e) => {
        if (setRainbow.checked) {
            let r = Math.random() * 255
            let g = Math.random() * 255
            let b = Math.random() * 255
            return "rgb(" + r +","+ g +","+ b + ")"
        } else {
            return "blue"
        }
    })
}

// Switch back to color picker

function createSquares(sized) {
    for(i = 0; i < sized * sized; i++)  {
        const square = document.createElement('div')
        square.className = "square"
        
        checkMouseDown(square, "black")
        
        colorPicker.addEventListener("change", (e) => {
                checkMouseDown(square, e.target.value)
            })
        
        
        container.appendChild(square)
    }
}

sizeButton.addEventListener("click", () => {
    function fallback() {
        size = prompt("Select a size between 2-100", "16")
        if (size > 2 && size < 101) {
            setSize.style.setProperty('--size', size)
            const squares = document.querySelectorAll(".square")
            squares.forEach(e => e.remove())
            createSquares(size)
        } else {
            alert("Please insert a valid number")
            fallback()
        }
    }
    fallback()
})

createSquares(size)
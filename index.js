const container = document.querySelector(".container")
const colorPicker = document.querySelector("input")
let size = 2
let mouseDown = false

const setSize = document.querySelector(':root')
setSize.style.setProperty('--size', size)



// Paint only when the mouse is down
function checkMouseDown(square, color) {
    square.addEventListener("mousedown", () => {
        mouseDown = true
        square.style.backgroundColor = color
    })
    
    square.addEventListener("mouseover", () => {
        if (mouseDown) {
            square.style.backgroundColor = color
        }
    })
    document.addEventListener("mouseup", () => {
        mouseDown = false
    })
        
}

function clearSquares(square) {

}

for(i = 0; i < size * size; i++)  {
    const square = document.createElement('div')
    square.className = "square"
    
    checkMouseDown(square, "black")
        
        colorPicker.addEventListener("change", (e) => {
            checkMouseDown(square, e.target.value)
        })

        container.appendChild(square)
}

const squares = document.querySelectorAll(".square")
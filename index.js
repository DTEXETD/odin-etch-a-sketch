const container = document.querySelector(".container")
let size = 40

const setSize = document.querySelector(':root')
setSize.style.setProperty('--size', size)

for(i = 0; i < size * size; i++)  {
    const square = document.createElement('div')
    square.className = "square"
    container.appendChild(square)
}

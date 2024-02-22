//1. 
let mainTitle = document.getElementById('main-title')

mainTitle.innerText = 'welcome to my world'

//2.
let submitBtn = document.getElementById('submitBtn')

function clickedIt() {
    console.log('Button Clicked')
}

submitBtn.addEventListener('click', clickedIt)

//3. 
let colorDiv = document.querySelector('.highlight')

function yellowBackground() {
    colorDiv.style.background = 'yellow'
}

colorDiv.addEventListener('mouseover')

//4.
let listContainer = document.getElementById('list-container')

let newItem = document.createElement('li')
newItem.innerText
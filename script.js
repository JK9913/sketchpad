// Select the topmost div in the HTML
const container = document.querySelector('.grid');
// Start creating the grid which contains 16x16 divs
// Should be a function which takes in the number of squares
function createGrid(number) {
    for (let i = 0; i<number; i++) {
        let tempDiv = document.createElement('div');
        tempDiv.classList.add('squares');
        for (let i = 0; i<number;i++){
            let tempSquare = document.createElement('div');
            tempSquare.classList.add('square');
            tempDiv.appendChild(tempSquare);
        }
        container.appendChild(tempDiv);
    
    // select all squars and colors black on hover
    const column = document.querySelectorAll('.square');

    column.forEach(e => {
    e.onmouseover = function () {
        this.style.backgroundColor = 'black';
    }
    //e.addEventListener('mouseover', () => e.style.backgroundcolor = 'black')
    });
    }
}

// Function for deleting a grid before placing a new one
function deleteGrid() {
    const squaresToDelete = document.querySelectorAll('.squares');

    squaresToDelete.forEach(x => {
        let child = x.lastElementChild;
        while (child){
            x.removeChild(child);
            child = x.lastElementChild;
        }
        x.remove()
    })
}


// Create standard grid when page loads
createGrid(16);


// Add eventlistener to button
// Should generate new grid with entered amount of cells
const button = document.querySelector('button')
const numberField = document.querySelector('input')
button.addEventListener('click', () => {
    console.log(numberField);
    if (!(numberField.value === null) && !(numberField.value === 0)) {
        console.log('Creating grid...');
        deleteGrid();
        createGrid(numberField.value);
    }
})


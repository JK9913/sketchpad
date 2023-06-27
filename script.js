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
    }
}

// Create standard grid when page loads
createGrid(16);






// select all squars and colors black on hover
const column = document.querySelectorAll('.square');

column.forEach(e => {
    e.onmouseover = function () {
        this.style.backgroundColor = 'black';
    }
    //e.addEventListener('mouseover', () => e.style.backgroundcolor = 'black')
});


//

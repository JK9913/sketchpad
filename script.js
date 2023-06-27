// Select the topmost div in the HTML
const container = document.querySelector('.grid');
// Start creating the grid which contains 16x16 divs
// Should be a function which takes in the number of squares
function createGrid(number) {
    
}







// select all squars and colors black on hover
const column = document.querySelectorAll('.square');

column.forEach(e => {
    console.log(e)
    e.onmouseover = function () {
        this.style.backgroundColor = 'black';
    }
    //e.addEventListener('mouseover', () => e.style.backgroundcolor = 'black')
});


//

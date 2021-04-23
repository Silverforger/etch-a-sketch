const gridsize = document.querySelector('#btn-grid');
const gridclear= document.querySelector('#btn-clear');
const gridcontainer = document.querySelector('.grid-container')
let a, b, c = 0

window.addEventListener('load', gridDefault);

function gridDefault() {
    for (let i=0; i<20 * 20; i++) {
        const divcreate = document.createElement('div');
        gridcontainer.appendChild(divcreate);
    }
    paint();  
}

function paint() {
    document.querySelectorAll('.grid-container div').forEach(div => {
        div.addEventListener('mouseover', (e) => {
            randColor()
            e.target.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
        })
    }) 
}

gridsize.addEventListener('click', () => {
    gridinput = prompt("Please enter a number between 1 to 60.")
    if (0 < gridinput && gridinput < 61) {
        gridcontainer.setAttribute('style', `grid-template-columns: repeat(${gridinput}, 1fr); grid-template-rows: repeat(${gridinput}, 1fr);`)
        while (gridcontainer.firstChild) {
            gridcontainer.firstChild.remove()
        }
        for (let i=0; i<gridinput**2; i++) {
            const divcreate = document.createElement('div');
            gridcontainer.appendChild(divcreate);
        }
        document.querySelectorAll('.grid-container div').forEach(div => {
            div.style.backgroundColor = "white";
        })
        paint();
    }
    else {
        alert("Please enter a numerical integer value between 0 to 60.")
    }
})

gridclear.addEventListener('click', () => {
    document.querySelectorAll('.grid-container div').forEach(div => {
        div.style.backgroundColor = "white";
    })
})

function randColor() {
    a = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    c = Math.floor(Math.random() * 256);
}


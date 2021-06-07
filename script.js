const btn = document.querySelector('.btn');
const rgbColor = document.querySelector('.rgb-value')

// create random number from 0 to 255;
const randomNumber = () => Math.floor(Math.random() * 256);

// creating rgb color 
function randomRGB(){
    const color = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
    return color;
}

// displaying the rgb color 
function rgbDisply(){
    rgbColor.textContent = randomRGB();
    document.body.style.backgroundColor = randomRGB();
}
// creating click event
btn.addEventListener('click', rgbDisply)
   
    
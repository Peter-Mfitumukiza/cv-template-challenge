const name = document.getElementById("name");

function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}

const changeColor = () => {
    document.documentElement.style.setProperty("--main_blue", `${generateRandomColor()}`)
}
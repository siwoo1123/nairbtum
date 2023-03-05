function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector('body').style.backgroundImage = `url(./img/${getRandomInt(0, 22)}.JPG)`;
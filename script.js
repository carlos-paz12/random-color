const button = document.querySelector('button');
const copyButton = document.querySelector('.copy-button');
const body = document.querySelector('body');
let p = document.querySelector('p');

button.onclick = function () {
    let randomColor = '#';

    while (randomColor.length < 7) {
        randomColor += Math.floor(Math.random() * 0x10).toString(16);
    }

    body.style.backgroundColor = randomColor;

    p.innerHTML = randomColor;
};

copyButton.onclick = function () {
    const colorText = p.innerText;

    navigator.clipboard.writeText(colorText).then(function () {
        alert('Copied!');
    });
};
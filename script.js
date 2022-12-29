const $width = document.querySelector("#width");

const init = e => {
    $width.innerHTML = window.innerWidth;
}

window.onload = init;
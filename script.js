let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let colors = [color1, color2];

let body = document.getElementById("gradient");

const setGradient = () => {
    body.style.background =
        "linear-gradient(to right, "
        + colors[0].value
        + ", "
        + colors[1].value
        + ")";
    h3.textContent = body.style.background + ";";
};

for (let color of colors) {
    color.addEventListener("input", setGradient);
}



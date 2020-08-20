let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let colors = [color1, color2];
let body = document.getElementById("gradient");

colors.forEach((color) => {
    color.addEventListener("input", () => {
        body.style.background =
            "linear-gradient(to right, "
            + colors[0].value
            + ", "
            + colors[1].value
            + ")";
        h3.textContent = body.style.background + ";";
    });
})

//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes
//just some random stuff for github purposes



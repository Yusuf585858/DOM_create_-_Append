const button = document.getElementById("btn");
const div = document.querySelector(".umwickeln");
let i = 0;

button.addEventListener("click", (event) => {
    event.preventDefault();
    let p = document.createElement("p");
    p.textContent = i;
    div.appendChild(p);
    p.classList.add("rechteck");

    if (i % 10 == 0) {
        p.classList.add("weiss");
    }

    i++;

})



const liste = document.querySelector("#myList");
const output = document.getElementById("output");

const btn1 = document.getElementById("first");
const btn2 = document.getElementById("last");
const btn3 = document.getElementById("next");
const btn4 = document.getElementById("pre");

btn1.addEventListener("click", () => {
    console.log(liste.firstElementChild.innerHTML);
    output.innerHTML = liste.firstElementChild.innerHTML;
});

btn2.addEventListener("click", () => {
    console.log(liste.firstElementChild.nextElementSibling.innerHTML);
    output.innerHTML = liste.firstElementChild.nextElementSibling.innerHTML;
});

btn3.addEventListener("click", () => {
    console.log(liste.lastElementChild.previousElementSibling.innerHTML);
    output.innerHTML = liste.lastElementChild.previousElementSibling.innerHTML;
});

btn4.addEventListener("click", () => {
    console.log(liste.lastElementChild.innerHTML);
    output.innerHTML = liste.lastElementChild.innerHTML;
});

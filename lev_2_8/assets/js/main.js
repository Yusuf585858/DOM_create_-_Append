const button = document.getElementById("enter");
const liste = document.getElementById("liste");
const inputFeld = document.getElementById("userinput");




button.addEventListener("click", () => {
    const neueSache = document.getElementById("userinput").value;
    const neueArtikel = document.createElement("li");
    liste.appendChild(neueArtikel);
    neueArtikel.innerHTML = neueSache;

});

inputFeld.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        button.click();

    }
});
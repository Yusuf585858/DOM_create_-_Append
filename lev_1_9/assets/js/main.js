const removeSelected = document.querySelector("#farbeAuswahlen");
const btn = document.getElementById("button");
let option = removeSelected.children;

btn.addEventListener("click", (event) => {
    event.preventDefault();
    selectIndex = removeSelected.selectedIndex;


    removeSelected.removeChild(option[selectIndex]);

});
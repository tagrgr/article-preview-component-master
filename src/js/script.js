const shareButton = document.querySelector("#sharing-state");
const toolTip = document.querySelector("#share-tooltip");

shareButton.addEventListener("click", function() {
    toolTip.classList.toggle("hidden")
})
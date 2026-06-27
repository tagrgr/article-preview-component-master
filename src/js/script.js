const shareButton = document.querySelector("#sharing-state");
const toolTip = document.querySelector("#share-tooltip");
const profileState = document.querySelector(".profile-state");

shareButton.addEventListener("click", function() {
    toolTip.classList.toggle("hidden")

    if(window.innerWidth <= 375) {
        if(toolTip.classList.contains("hidden")) {
            profileState.appendChild(shareButton)
        } else {
            toolTip.appendChild(shareButton)
        }
    }    
})


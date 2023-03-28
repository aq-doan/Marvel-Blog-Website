window.onload = function(){
    let T = document.getElementsByClassName("hidden-content");
    for (const element of T) {
        element.style.display = "none";
        console.log(element.style.display);
    }
}

function displayContent(initiator) {
    initiator.style.display = "none";
    initiator.parentElement.getElementsByClassName("hidden-content")[0].style.display = "";
    let others = initiator.parentElement.parentElement.getElementsByClassName("content-section");
    for (const element of others) {
        if (element.id !== initiator.parentElement.id) {
            element.getElementsByClassName("hidden-content")[0].style.display = "none";
        }
    }
}

function hideContent(initiator) {
    initiator.parentElement.style.display = "none";
    initiator.parentElement.parentElement.getElementsByClassName("showmorebutton")[0].style.display = ""
}
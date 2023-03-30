window.onload = function () {
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
            element.getElementsByClassName("showmorebutton")[0].style.display = "";
        }
    }
}

function hideContent(initiator) {
    initiator.parentElement.style.display = "none";
    initiator.parentElement.parentElement.getElementsByClassName("showmorebutton")[0].style.display = "";
}


/**
 * Button for scrolling to the top of the page once you've scrolled past a certain point.
 * Hidden when they are already there.
 */
let topButton = document.getElementById("toTopButton");

window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// function to fade effect on scrolling
function fadeContent() {
    //variable to get the pixel a document has scrolled from top website
    const currentPoint = window.pageYOffset;
    const displayPoint = 600; // The pixel location where the content will be fully displayed
    let tempOpacity; //temporary variable of content's opacity

    if (currentPoint <= displayPoint) {
        tempOpacity = 0 + currentPoint / displayPoint;
    } else {
        tempOpacity = 1;
    }
    document.querySelector("#content").style.opacity = tempOpacity;
}
window.addEventListener("scroll", fadeContent)

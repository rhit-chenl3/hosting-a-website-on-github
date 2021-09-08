const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const image = document.querySelector('img');

function mouseoverImage(){
    image.style.animationDirection = "scaleX(-1)";
}

function mouseleaveImage(){
    image.style.removeProperty(animationDirection);
}

image.addEventListener('mouseenter', mouseoverImage);
image.addEventListener('mouseleave', mouseleaveImage);
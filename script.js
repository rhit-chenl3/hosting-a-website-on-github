const h2 = document.createElement("h2");
h2.textContent = "My WIXSITE";
document.querySelector("body").appendChild(h2);

const image = document.querySelector('img');

function mouseoverImage(){
    image.style.transform = "scaleX(-1)";
}

function mouseleaveImage(){
    image.style.removeProperty(transform);
}

image.addEventListener('mouseenter', mouseoverImage);
image.addEventListener('mouseleave', mouseleaveImage);
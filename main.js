const galleryImages = document.querySelectorAll(".gallery img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

// Open popup
galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        popup.style.display = "flex";
        popupImg.src = image.src;

    });

});

// Close button
closeBtn.addEventListener("click", () => {

    popup.style.display = "none";

});

// Close when clicking outside image
popup.addEventListener("click", (e) => {

    if(e.target === popup){
        popup.style.display = "none";
    }

});
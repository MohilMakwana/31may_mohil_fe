const slider = document.getElementById('slider');
const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Initial image index
let currentIndex = 0;

// Previous button functionality
prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = thumbnails.length - 1;
    }
    updateImage();
});

// Next button functionality
nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= thumbnails.length) {
        currentIndex = 0;
    }
    updateImage();
});

// Image thumbnail functionality
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateImage();
    });
});

// Function to update the main image
function updateImage() {
    mainImage.src = thumbnails[currentIndex].src;
}
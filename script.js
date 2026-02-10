// script.js

// Function to display the cat.gif
function displayCat() {
    // Get the container
    var imageContainer = document.getElementById('image-container');
    
    // Create the image
    var catImage = document.createElement('img');
    catImage.src = 'i-love-you-i-love-you-so-much.gif';
    catImage.alt = 'Cat';
    
    // Add it to the page
    imageContainer.appendChild(catImage);
}

// Display the cat.gif initially
displayCat();
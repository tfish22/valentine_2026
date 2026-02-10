// script.js

// Function to replay a GIF by resetting its src
function replayGif(imgElement) {
    var src = imgElement.src;
    imgElement.src = '';
    imgElement.src = src;
}

// Function to display the cat.gif
function displayCat() {
    // Get the container
    var imageContainer = document.getElementById('image-container');
    
    // Create the image
    var catImage = document.createElement('img');
    catImage.src = 'i-love-you-i-love-you-so-much.gif';
    catImage.alt = 'Cat';

    // Add click event to replay the GIF
    catImage.onclick = function() {
        replayGif(catImage);
    };
    
    // Add it to the page
    imageContainer.appendChild(catImage);
}

// Display the cat.gif initially
displayCat();
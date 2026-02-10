// script.js

// Function to display and control the GIF
function displayCat() {
    // Get the container
    var imageContainer = document.getElementById('image-container');
    
    // Create an img element with special attributes for libgif
    var gifImg = document.createElement('img');
    gifImg.src = 'i-love-you-i-love-you-so-much.gif';
    gifImg.setAttribute('rel:animated_src', 'i-love-you-i-love-you-so-much.gif');
    gifImg.setAttribute('rel:auto_play', '0'); // Don't autoplay
    
    // Add to container
    imageContainer.appendChild(gifImg);
    
    // Initialize the SuperGif player
    var rub = new SuperGif({ gif: gifImg });
    rub.load(function() {
        // GIF is loaded and paused on first frame
        console.log('GIF loaded and paused');
        
        // Add click event to play the GIF
        gifImg.onclick = function() {
            rub.move_to(0); // Go to first frame
            rub.play(); // Play the GIF
        };
    });
}

// Display the GIF initially
displayCat();

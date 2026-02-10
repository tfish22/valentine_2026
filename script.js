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
    var rub = new SuperGif({ 
        gif: gifImg,
        loop_mode: false // Don't loop automatically
    });
    
    rub.load(function() {
        // GIF is loaded and paused on first frame
        console.log('GIF loaded and pause');
        
        // Add click event to play the GIF from the beginning
        gifImg.onclick = function() {
            console.log('GIF clicked');
            rub.pause(); // Pause first
            rub.move_to(0); // Go to first frame
            rub.play(); // Play the GIF
            console.log('Playing GIF');
        };
        
        // Also add click to the canvas that libgif creates
        var canvas = rub.get_canvas();
        if (canvas) {
            canvas.style.cursor = 'pointer';
            canvas.onclick = function() {
                console.log('Canvas clicked');
                rub.pause();
                rub.move_to(0);
                rub.play();
            };
        }
    });
}

// Display the GIF initially
displayCat();

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
    
    console.log('Image added to container');
    
    // Initialize the SuperGif player
    var rub = new SuperGif({ 
        gif: gifImg,
        loop_mode: false // Don't loop automatically
    });
    
    rub.load(function() {
        // GIF is loaded and paused on first frame
        console.log('GIF loaded and paused');
        console.log('SuperGif object:', rub);
        
        // Get the canvas element that libgif creates
        var canvas = rub.get_canvas();
        console.log('Canvas element:', canvas);
        
        if (canvas) {
            canvas.style.cursor = 'pointer';
            console.log('Cursor set to pointer on canvas');
            
            canvas.onclick = function() {
                console.log('Canvas clicked!');
                rub.pause();
                rub.move_to(0);
                rub.play();
            };
            console.log('Click handler attached to canvas');
        } else {
            console.error('Canvas not found!');
        }
    });
}

// Display the GIF initially
displayCat();
// script.js

// Click tracking variables
var clickCount = 0;
var clickTimer = null;
var CLICK_THRESHOLD = 10;  // Number of clicks needed
var TIME_WINDOW = 1000;    // Time window in milliseconds (1 second)

// Function to reset click counter
function resetClickCounter() {
    console.log('Resetting click counter');
    clickCount = 0;
    if (clickTimer) {
        clearTimeout(clickTimer);
        clickTimer = null;
    }
}

// Function to trigger heart pop effect
function heartPop() {
    console.log('Heart popped!');
    
    // Trigger explosion animation
    var explosion = document.getElementById('explosion');
    explosion.classList.add('explode');
    
    // Hide the GIF and click text immediately
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('click-text').style.display = 'none';
    
    // Show valentine message after half a second
    setTimeout(function() {
        document.getElementById('valentine-message').style.display = 'block';
    }, 500);
}

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
    
    // Initialize the SuperGif player with specific size
    var rub = new SuperGif({ 
        gif: gifImg,
        loop_mode: false, // Don't loop automatically
        max_width: 800   // Set width in pixels
    });
    
    rub.load(function() {
        // GIF is loaded and paused on first frame
        console.log('GIF loaded and paused');
        
        // Get total number of frames
        var totalFrames = rub.get_length();
        var halfwayPoint = Math.floor(totalFrames / 2);
        console.log('Total frames:', totalFrames, 'Halfway:', halfwayPoint);
        
        // Get the canvas element that libgif creates
        var canvas = rub.get_canvas();
        console.log('Canvas element:', canvas);
        
        if (canvas) {
            canvas.style.cursor = 'pointer';
            console.log('Cursor set to pointer on canvas');
            
            canvas.onclick = function() {
                console.log('Canvas clicked!');
                
                // Track clicks
                clickCount++;
                console.log('Click count:', clickCount, 'Threshold:', CLICK_THRESHOLD);
                
                // Check if threshold reached BEFORE resetting timer
                if (clickCount >= CLICK_THRESHOLD) {
                    console.log('Threshold reached! Triggering heart pop');
                    heartPop();
                    resetClickCounter();
                    return; // Don't play the GIF
                }
                
                // Reset timer on each click
                if (clickTimer) {
                    clearTimeout(clickTimer);
                }
                
                // Start/restart timer
                clickTimer = setTimeout(function() {
                    console.log('Time window expired. Resetting counter.');
                    resetClickCounter();
                }, TIME_WINDOW);
                
                // Play the GIF
                rub.pause();
                rub.move_to(0);
                rub.play();
                
                // Monitor frame progress and stop at halfway point
                var checkFrame = setInterval(function() {
                    var currentFrame = rub.get_current_frame();
                    if (currentFrame >= halfwayPoint) {
                        rub.pause();
                        clearInterval(checkFrame);
                        console.log('Stopped at frame:', currentFrame);
                    }
                }, 50); // Check every 50ms
            };
            console.log('Click handler attached to canva');
        } else {
            console.error('Canvas not found!');
        }
    });
}

// Display the GIF initially
displayCat();
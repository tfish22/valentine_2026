// script.js

// Function to display and control the video
function displayCat() {
    // Get the container
    var imageContainer = document.getElementById('image-container');
    
    // Create the video element
    var catVideo = document.createElement('video');
    catVideo.src = 'cat_heart.mp4';
    catVideo.muted = true; // Mute the video (required for autoplay policies)
    catVideo.playsInline = true; // For mobile compatibility
    catVideo.preload = 'auto'; // Preload the video
    catVideo.loop = false; // Don't loop automatically
    
    // Load the video to show the first frame
    catVideo.load();
    
    // Add click event to replay the video
    catVideo.onclick = function() {
        catVideo.currentTime = 0; // Reset to beginning
        catVideo.play(); // Play the video
    };
    
    // Add it to the page
    imageContainer.appendChild(catVideo);
}

// Display the video initially
displayCat();

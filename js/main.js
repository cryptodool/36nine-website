// Very simplified JavaScript to force loading screen completion
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Loaded - Starting loading animation");
    
    // Get loading screen elements
    const loadingScreen = document.querySelector('.loading-screen');
    const progressElements = document.querySelectorAll('.loading-progress');
    
    console.log("Loading elements found:", loadingScreen ? "Yes" : "No", "Progress elements:", progressElements.length);
    
    // Force loading percentage to increase
    let progress = 0;
    const updateInterval = setInterval(function() {
        progress += 10;
        console.log("Progress:", progress + "%");
        
        // Update all progress elements
        progressElements.forEach(function(el) {
            el.textContent = progress + "%";
        });
        
        // When we reach 100%, hide the loading screen
        if (progress >= 100) {
            console.log("Loading complete, hiding loading screen");
            clearInterval(updateInterval);
            
            // Wait a moment then hide the loading screen
            setTimeout(function() {
                if (loadingScreen) {
                    loadingScreen.style.display = "none";
                    document.body.style.overflow = "visible";
                    console.log("Loading screen hidden");
                }
            }, 500);
        }
    }, 300);
});

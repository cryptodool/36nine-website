// Simplified main.js that forces the loading screen to progress
document.addEventListener('DOMContentLoaded', function() {
    // Force the loading screen to progress
    const loadingScreen = document.querySelector('.loading-screen');
    const loadingProgress = document.querySelectorAll('.loading-progress');
    
    // Simple timer to increment loading percentage
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 5;
        if (progress > 100) progress = 100;
        
        loadingProgress.forEach(element => {
            element.textContent = progress + '%';
        });
        
        // When progress reaches 100, remove loading screen
        if (progress === 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                // Force hide the loading screen
                if (loadingScreen) {
                    loadingScreen.style.display = 'none';
                }
                // Make body visible
                document.body.style.overflow = 'visible';
            }, 1000);
        }
    }, 100);
});

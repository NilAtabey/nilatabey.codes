const shareButtons = document.querySelectorAll('.tile-share-button');
const popup = document.getElementById('popup');

async function copyText(e) {
    // Prevent the button's default behavior
    e.preventDefault();
    const link = this.getAttribute('link');
    console.log(link);
    
    try {
        await navigator.clipboard.writeText(link);
        
        // Show the pop-up
        popup.style.display = 'block';
        
        // Hide the pop-up after 2 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 2000);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));
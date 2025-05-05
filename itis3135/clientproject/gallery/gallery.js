document.addEventListener('DOMContentLoaded', function() {
    // Load the JSON data
    fetch('gallery/images.json')
        .then((response) => response.json())
        .then((data) => {
            const galleryContainer = document.getElementById('gallery');
            
            data.forEach((image) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                
                const link = document.createElement('a');
                link.href = image.fullsize;
                link.setAttribute('data-lightbox', 'gallery');
                
                const img = document.createElement('img');
                img.src = image.thumbnail;
                img.alt = image.alt;
                img.loading = 'lazy';
                
                link.appendChild(img);
                galleryItem.appendChild(link);
                galleryContainer.appendChild(galleryItem);
            });
            
            lightbox.option({
                'resizeDuration': 0,
                'wrapAround': true,
                'showImageNumberLabel': false,
                'positionFromTop': 100
            });
        })
        .catch((error) => {
            console.error('Error loading image data:', error);
            const galleryContainer = document.getElementById('gallery');
            galleryContainer.innerHTML = '<p>Error loading images. Please try again later.</p>';
        });
});
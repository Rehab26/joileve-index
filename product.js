document.addEventListener('DOMContentLoaded', function () {
    const mainImage = document.getElementById('main-image');
    const imageWrapper = document.querySelector('.main-image-container');
    const miniImagesContainer = document.getElementById('mini-images-container');
    const lightboxImage = document.getElementById('lightbox-image');
    const productQuantity = $('#product-quantity');

    // Add your image URLs here
    const imageUrls = ['http://127.0.0.1:5500/src/assets/product.jpeg', 'http://127.0.0.1:5500/src/assets/product2.jpeg' , 'http://127.0.0.1:5500/src/assets/women.png'];

    // Dynamically create mini images and add them to the container
    imageUrls.forEach((imageUrl, index) => {
        const miniImage = document.createElement('img');
        miniImage.src = imageUrl;
        miniImage.alt = `Mini Image ${index + 1}`;
        miniImage.classList.add('mini-image');
        miniImage.addEventListener('click', () => changeImage(index));
        miniImagesContainer.appendChild(miniImage);

        //create dots indicator
        // const dot = document.createElement('div');
        // dot.classList.add('dot');
        // dot.addEventListener('click', () => updateMainImage(imageUrl, index));
        // dotIndicator.appendChild(dot);
    });

    window.updateMainImage = function (imageUrl, index) {

        mainImage.style.opacity = 0.3;

        // Set the new image source after a short delay
        setTimeout(function () {
            mainImage.src = imageUrl;
            updateDotIndicator(index);
            mainImage.style.opacity = 1;
        }, 100); // You can adjust the delay based on your preference
    };

    function updateDotIndicator(index) {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active-dot', i === index);
        });
    }

    // Function to change the main image
    window.changeImage = function (indexOffset) {
        let currentIndex = imageUrls.indexOf(mainImage.src);

        // Calculate the new index
        currentIndex = (currentIndex + indexOffset + imageUrls.length) % imageUrls.length;

        // Set the new image source with animation
        updateMainImage(imageUrls[currentIndex], currentIndex);
        highlightMiniImage(currentIndex);
    };


    // Function to highlight the active mini image
    function highlightMiniImage(index) {
        const miniImages = document.querySelectorAll('.mini-image');
        miniImages.forEach((miniImage, i) => {
            miniImage.classList.toggle('mini-image-active', i === index);
        });
    }

    window.openLightbox = function () {
        lightboxImage.src = mainImage.src;
        lightbox.style.display = 'flex';
    };

    // Function to close the lightbox
    window.closeLightbox = function () {
        lightbox.style.display = 'none';
    };

    // Initial highlight for the first image
    highlightMiniImage(0);

    window.updateProductQuantity = function(num){
        
        const a = parseInt(productQuantity.val());
        if(num <0 && a == 1){
            return;
        }
        productQuantity.val(a+num)
    }

    
});

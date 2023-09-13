// JavaScript code for tweet submission (you'll need to implement the backend)
document.addEventListener('DOMContentLoaded', () => {
    const tweetButton = document.getElementById('tweet-button');
    const tweetContent = document.getElementById('tweet-content');
    const tweetImage = document.getElementById('tweet-image');
    const tweetsContainer = document.querySelector('.tweets');

    tweetButton.addEventListener('click', () => {
        const content = tweetContent.value;
        const imageFile = tweetImage.files[0]; // Get the selected image file

        // You can send the tweet content and image to your backend for processing and storage
        // You'll need to implement the backend part

        // For demonstration purposes, let's create a tweet element and display it
        const tweetElement = createTweetElement(content, imageFile);
        tweetsContainer.appendChild(tweetElement);

        // Clear the tweet form
        tweetContent.value = '';
        tweetImage.value = '';
    });

    function createTweetElement(content, imageFile) {
        const tweetDiv = document.createElement('div');
        tweetDiv.classList.add('tweet');

        // Create and append elements for tweet content and image
        const tweetContent = document.createElement('p');
        tweetContent.textContent = content;
        tweetDiv.appendChild(tweetContent);

        if (imageFile) {
            const tweetImage = document.createElement('img');
            tweetImage.src = URL.createObjectURL(imageFile);
            tweetImage.alt = 'Tweet Image';
            tweetDiv.appendChild(tweetImage);
        }

        return tweetDiv;
    }
});

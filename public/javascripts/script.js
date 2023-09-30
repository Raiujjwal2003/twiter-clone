// // Example of posting a tweet
// const tweetButton = document.getElementById('tweet-button');
// const tweetInput = document.getElementById('tweet-input');
// const tweetsContainer = document.getElementById('tweets');

// tweetButton.addEventListener('click', () => {
//     const tweetContent = tweetInput.value;
//     // Save the tweet content to the database
//     // Create and append a new tweet element to the tweetsContainer
//     const newTweet = createTweetElement(tweetContent);
//     tweetsContainer.appendChild(newTweet);
//     // Clear the tweet input field
//     tweetInput.value = '';
// });

// function createTweetElement(content) {
//     const tweetDiv = document.createElement('div');
//     tweetDiv.classList.add('tweet');
//     const tweetContent = document.createElement('p');
//     tweetContent.textContent = content;
//     tweetDiv.appendChild(tweetContent);
//     // Add other tweet elements (user info, like/retweet buttons, etc.)
//     return tweetDiv;
// }


// JavaScript to toggle the tweet form
const tweetButton = document.getElementById('tweet-button');
const tweetForm = document.getElementById('tweet-form');

tweetButton.addEventListener('click', () => {
    tweetForm.classList.toggle('hidden');
});

// JavaScript to submit a tweet (you'll need to implement the backend)
const tweetSubmitButton = document.getElementById('tweet-submit');
const tweetContent = document.getElementById('tweet-content');

tweetSubmitButton.addEventListener('click', () => {
    const tweetText = tweetContent.value;
    
    // Send the tweetText to your backend for processing and storage
    // You'll need to implement the backend part to save the tweet

    // Clear the textarea and hide the tweet form
    tweetContent.value = '';
    tweetForm.classList.add('hidden');
});




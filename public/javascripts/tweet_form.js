document.addEventListener('DOMContentLoaded', function() {
    const tweetContent = document.getElementById('tweet-content');
    const charCount = document.getElementById('char-count');
    const tweetbtn = document.getElementById('tweet-btn');
    
    tweetContent.addEventListener('input', function() {
        const remainingChars = 140 - tweetContent.value.length;
        charCount.textContent = remainingChars;
        
        if (remainingChars >= 0 && remainingChars < 140) {
            tweetbtn.disabled = false;
        } else {
            tweetbtn.disabled = true;
        }
    });
    
    tweetbtn.addEventListener('click', function() {
        const tweetText = tweetContent.value;
        // Send the tweet to the server or perform other actions as needed.
        // This is a simplified example, and you would typically make an AJAX request here.
        console.log('Tweet:', tweetText);
        tweetContent.value = '';
        charCount.textContent = '140';
        tweetbtn.disabled = true;
    });
});

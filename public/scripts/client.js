/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const createTweetElement = function (tweetData){
  const $tweet = $(`
    <article class="tweeter">
      <header class="tweet">
        <div>
          <img id = "avatars" src=${tweetData.user.avatars}> 
          <output id = "name">${tweetData.user.name}</output>
        </div>
        <output id = "handle"> ${tweetData.user.handle}</output>
      </header>
      <br>
      <output class= "content text" maxlength= "140"> ${tweetData.content.text} </output>
      <hr>
      <footer >
        <output class="created_at text">${tweetData.created_at}</output>
        <div class = "icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>  
      </footer>
    </article>`
  );
  return $tweet;
}

$(document).ready(function() {
  
const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  //$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  $('.container').append($tweet);
});

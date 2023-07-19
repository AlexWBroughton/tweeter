/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const createTweetElement = function (tweetData) {
  const $tweet = $(`
    <article class="tweeter">
      <header class="tweet">
        <div>
          <img class="avatars" src=${tweetData.user.avatars}> 
          <output class="name">${tweetData.user.name}</output>
        </div>
        <output class="handle"> ${tweetData.user.handle}</output>
      </header>
      <div class="content text"> ${tweetData.content.text} </div>
      <hr>
      <footer >
        <output class="created_at text">${tweetData.created_at}</output>
        <div class ="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>  
      </footer>
    </article>`);
  return $tweet;
};

const renderTweets = function (tweets) {
  //remove current tweets
  $(".tweeter").remove();
  
  // loops through tweets
  for (const tweet of tweets) {
    $("#tweet-container").append(createTweetElement(tweet));
  }
};

$(document).ready(function () {
  renderTweets(data);
});

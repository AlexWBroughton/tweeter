/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  $('.error').toggle();

  //escape function for string literal ${userdata}
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweetData) {
    const $tweet = $(`
      <article class="tweeter">
        <header class="tweet">
          <div>
            <img class="avatars" src=${tweetData.user.avatars}> 
            <output class="name"style="color:rgb(174,100,45)">${escape(tweetData.user.name)}</output>
          </div>
          <output class="handle"style="color:rgb(174,100,45);font-weight:bolder"> ${escape(tweetData.user.handle)}</output>
        </header>
        <div class="content text"> ${escape(tweetData.content.text)} </div>
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
    const reversedTweets = tweets.reverse();
    // loops through tweets
    for (const tweet of reversedTweets) {
      tweet.created_at = timeago.format(tweet.created_at);
      $("#tweet-container").append(createTweetElement(tweet));
    }
  };

  const loadTweets = function () {
    $.get("/tweets", (response) => {
      renderTweets(response);
    });
  };

  const preventDefault = function(){
    $(".tweetForm").submit(function (event) {
      event.preventDefault();
    });
  };

 


  //error check if tweet is either null or > 140...posts if ok
  const tweetButton = $("#tweetButton");
  tweetButton.on("click", function () {
    textTweet = document.getElementById("tweet-text");
    $('.error').slideUp('slow');
    if (textTweet.value.length > 140) {
      preventDefault();
      $('.error').slideDown('slow');
      $('.error').empty();
      $('.error').append( 'Too Many Characters - REMOVE more characters');
      
    } else if (!textTweet.value.replace(/\s/g, '')) {
      preventDefault();
      $('.error').slideDown('slow');
      $('.error').empty();
      $('.error').append( 'Not Enough Characters - ADD more characters');
    } else {
      //Ajax posting for the tweet form.  Happy path.
      preventDefault();

      //post to server
      $.post("/tweets", $(".tweetForm").serialize()).then(() => {
        //get from server
        $.get("/tweets", (response) => {
          console.log(response);
          renderTweets(response);
        });
      });      
    };
  });

  $('#tweet-text').click(()=>$('.error').slideUp(1000));
    //load the tweets
    loadTweets();
});

  




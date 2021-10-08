/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd"
  //     },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]

  const createTweetElement = tweet => {
    const newTweet =
    `<article>
    <header class="tweet-header"> 
      <div class="right-side-header">
        <img class='avatar' src="${tweet.user.avatars}" />
        <span>${tweet.user.name}</span>
      </div>
      <span class="handle">${tweet.user.handle}</span>
    </header>
    <div>
      <h4 class="tweet-text">${tweet.content.text}</h4>
    </div>
    <div class="tweet-footer">
      <h6 class="time">${timeago.format(tweet.created_at)}</h6>
      <div class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="far fa-heart"></i>
      </div>
    </div>
  </article>`
  
  return newTweet;
  }

  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    };
  };

  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET'}) 
    .then(function(response) {
      renderTweets(response)
      console.log('Success:', response )
    })
  }

  $( ".input-form" ).submit(function( event ) {
    event.preventDefault();
    console.log('i am in submit tweet')

    let data = $(this).serialize();
    console.log("this is the serialized data:", data)

    let dataLength = data.length;
    const overBy = 140 - dataLength

    if (dataLength > 140) {
      return alert(`You have exceeded the 140 character limit by ${overBy} characters.`)
    } 
    if (dataLength === 0 ) {
      return alert('Your tweet is blank.')
    }

    $.post('/tweets', data, function() {
      console.log('this is the post request')
      $('#tweets-container').empty()
      loadTweets()
      $('textarea').val("");
    })
    })
});

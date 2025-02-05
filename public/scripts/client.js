$(document).ready(function () {


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
      <h4 class="tweet-text">${escape(tweet.content.text)}</h4>
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
      $('#tweets-container').prepend($tweet);
    };
  };

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' })
      .then(function (response) {
        renderTweets(response)
      })
  }

  loadTweets();

  $(".input-form").submit(function (event) {
    event.preventDefault();

    let text = $(this).find('textarea').val()

    let data = $(this.text).serialize();

    let dataLength = (text.length);

    if (dataLength > 140) {
      return errorMessage('char over 140')
    }

    if (dataLength === 0) {
      return errorMessage('null')
    } else {
      errorMessage('none')

      $.post('/tweets', data, function () {
        $('#tweets-container').empty()
        loadTweets()
        $('textarea').val("");
      })
    }
    $(".counter").val(140)
  })
})

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// error message using jQuery slide down animation
const errorMessage = error => {
  // if char count is over 140
  if (error === 'char over 140') {
    $(".error-message").slideUp()
    $(".error-message").empty()
    $(".error-message").append(`<p>You have exceeded the 140 character limit.</p>`)
    $(".error-message").slideDown("slow")
  }
  // if char count is null
  if (error === 'null') {
    $(".error-message").slideUp()
    $(".error-message").empty()
    $(".error-message").append(`<p>Your tweet is blank.</p>`)
    $(".error-message").slideDown("slow")
  }
  if (error === 'none') {
    $(".error-message").slideUp()
  }

}

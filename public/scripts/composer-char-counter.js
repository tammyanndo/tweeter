$(document).ready(function() {
  // --- our code goes here ---

  $("#tweet-text").on('input propertychange',  function() {
    const charCount = $(this).val().length;
    const charsRemaining = 140 - charCount;
    console.log("charCount:", charCount);

    const counter = $(".counter").text(charsRemaining)

    if (charsRemaining < 0) {
      counter.css({'color': 'pink'});
    }
    if (charsRemaining > 0) {
      counter.css({'color': 'black'})
    }

  });
});
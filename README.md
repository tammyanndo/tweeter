# Tweeter Project

Tweeter is a simple, single-page Twitter clone, built to demonstrate front-end skills, using HTML, CSS, Javascript, jQuery, and AJAX, as well to demonstrate back-end skills, using Node and Express. 

Users can enter their tweet into the text field, and if the number of characters are within the character limit of 140, the tweet will be added below. If not within the character limits, an error message will appear. 

## Tweeter Features
* Users can input their tweet, and post it without refreshing the page
* Tweets are listed with the most recent tweet at the top
* Users are alerted if they are not within the character limits, either 0 or over 140 characters
* The application has been formatted with responsive design for use on tablets and mobile devices

## Sample Images from Tweeter:

### Main page of Tweeter App, designed for larger screens
!["Main page of Tweeter App"](https://github.com/tammyanndo/tweeter/blob/master/docs/tweeter-main-page.png)

### Example of Tweet's Responsive Design, for tablet screens
!["Example of Tweeter's Responsive Design"](https://github.com/tammyanndo/tweeter/blob/master/docs/tweeter-responsive-design.png)

### Error message slide down
!["Error message slide down when over 140 characters"](https://github.com/tammyanndo/tweeter/blob/master/docs/tweeter-over-character-message.png)

## Dependencies
```
* Express
* Node 5.10.x or above
* Body-parser
* Chance
* Timeago
* md5
```
## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
3. Go to <http://localhost:8080/> in your browser.


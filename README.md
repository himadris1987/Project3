Demo

For the finished web page: https://dry-mountain-58151.herokuapp.com

Overview

Once logged in, users will battle monsters to obtain resources to buy materials needed to fight game levels. The goal is to defeat the final boss of the game. If the player beats the final boss, the person will get the victory page. If the player is defeated during any levels, the player will get a defeat page and can restart the game.

The application is made up of several pages:

Home
Signup
Store
Level #
Final Boss
Victory/Defeat
Usage

Accesssing Home page

On the home page, the user can log into the game, but if the user cannot login, the user will have to signup using the signup page.

Navigating Store page

Once logged in the user will be redirected to the store page to buy equipment and potions. These items will increase stats of the player.

However, there is a limit on how many items a player can buy, because of limited currency call Gil.

Level

Once the player feels ready for combat, he/she can click on the "Continue Adventure" button.

During Combat, a random enemy will be generated with its own stats. With the weapons and potions purchased, they can be used to increase the following:

HP
Attack
Defense
There is a counter on the potions stats that tells how many potions are left.

To beat the level, player stats will subtract the enemy health pool, but be careful as enemy stats will also subtract player health as well.

Depending on outcome, player will gain more Gil and retain their stats for the next round or they will get the defeat page.

Final Boss

Final boss is the same concept as the level enemy but with better HP, attack, and defense.

Outcomes will depend on the players equipment and stats. The outcomes of the final boss will send the player to the victory page or defeat page.

Victory/Defeat

If the player beats the final boss, the victory page will show up.

If the player is defeated in any level, the defeat page will show up.

Login

Input your email and password. If credentials are wrong, page will reset.

Signup

Fill out form with all required information before clicking submit:

First Name
Last Name
Email
Password
Confirm Password
Once done, click Submit. User will be redirected to login page.

Tech and Methods Breakdown

Technology

VS Code v1.47.1
Node v12.16.1
MySQL v8.0.20
MVC Pattern
Express-handlebars
handlebars
Sequelize
req-flash
express-session
passport
Bootstrap
jQuery
Adobe InDesign
shields.io
Front-End

Handlebars with express-handlebars was used for templating. Bootstrap was the backbone html and css that the application was built off of. Adobe InDesign was used to create visual template for home page.

jQuery was used for all the functionality of the application. Ajax calls (get, post, put, delete) were used to talk to the database to pull data from Poster and User models.

Back-End

Database was made using MySQL and Sequelize.

Two models make up the database: User.js and Poster.js

User.js holds the first and last name of the user, as well as the email and password. Passport is used to protect the user's password from exposure and is used to authenticate credentials.

Poster.js holds all other information, information from the List Rental form, id of user (from User model) who reserved it, foreign id with User model to associate listings with users.

Handlebars-routes render the handlebars templates and related jquery file for the related template. And use middleware to protect the browser, list, and members pages from a user accessing them without loggin in first.

Api-routes was the in-between for the database and the front end. Passport was used to autheticate credentials when a user logs in. Req-flash was used to log errors to the terminal when incorrect email or password was entered.

Known Issues

Browse Page:

Less than or equal to operator not working, cards will only render if options chosen exactly match info on rental space
Choosing party size + max price per day must be submitted twice for cards to render
Choosing rental type, party size and bathroom facilities work together at the first submit but not with max price per day included
All options must be chosen and submitted twice
Contributors

Richard Biala
Himadri
Yev
Garrett
KaiWei Shen
Launch

Date application releases: July 21st, 2020

Future Development

Alert user login data is invalid
Add a map api to listings
Allow users to post photos of their listings
Allow users to reserve for a specific date
Allow users to post and share more information to their profiles, such as photos

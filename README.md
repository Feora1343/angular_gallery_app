# Project Planning and Management
Breaking everything down into "less is more".

## What Are We Building It With?
We will be using a PEAN solution stack, except without a database.

We will then throw the app on heroku.
[You can view the app on heroku here.](https://desolate-ocean-90839.herokuapp.com/)

To run this on your computer you will need to...

* Download the ZIP of this repo or clone it locally
* In terminal/bash/powershell and the directory, run `npm install`
* Once `npm install` is complete, start the server with `npm start`
* You should be able to view the application via web browser `localhost:5000`

```          
,________,         .--------,  _Request_    .---------,         
|________|       ,'_______,'|   -> | ->   ,'________,'|        
| HTML 5 |      | JS      | |      |      | _______ | |        
| CSS    |      | Angular | |      |      | Node.js | |        
| Boot   | <--  |         | |      |      | Express | |              
|  strap |      |         | ;   <- | <-   | _______ | ;        
|________|      |_________|'  _Response_  |_________|'         
  Client       DOM Manipulator         Server & Framework
        *Front End*                        *Back End*              
```

## Building Repo Tasks
- :heavy_check_mark: Git Repo Created
- :heavy_check_mark: Folder Structure Created

## Tasks
- :heavy_check_mark: Display 9 pictures. See wireframes below as references
 - [https://imgur.com/e8l1nAH](gallery on initial page load)
 - [https://imgur.com/CGAxlpE](gallery on an image click)
- :heavy_check_mark: When someone clicks on a picture, a brief synposis should appear on the display of that photo
- :heavy_check_mark: Display a button/font-icon that allows a user to favorite/like a photo
- :heavy_check_mark: :red_circle: Show a display on how many the favorite/like button is clicked :red_circle:
- :heavy_check_mark: Upload your app to heroku
- :heavy_check_mark: Store data in arrays and objects
- :heavy_check_mark: :red_circle: Add Bootstrap and make the app responsive :red_circle:
- :black_square_button: :heavy_exclamation_mark: Create a form that will take comments for each photo. :heavy_exclamation_mark:
- :black_square_button: :heavy_exclamation_mark: Display the comments with a `Show Comments` button is clicked :heavy_exclamation_mark:
- :black_square_button: :heavy_exclamation_mark: Create routes to GET and POST new images, comments, view count and likes. :heavy_exclamation_mark:

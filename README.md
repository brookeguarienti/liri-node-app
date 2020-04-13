# liri-node-app
Language Interpretation and Recognition Interface Node Application 

## Purpose?
The liri-node-app is able to quickly pull data for songs, concerts, and movies using commands and user search input.

## Commands
#### Concert
Using the OMDB API, a user is able to search for upcoming concerts based on the artist they search for
  
#### Spotify
Using the Spotify API, a user is able to search by song title to find the following information:
- Artist name
- Album name
- Providing a preview link to the song
      
#### Movie
Using the OMDB API, a user is able to search by movie title to find the following information:
- Year released
- IMDB Rating
- Rotten Tomatoes Rating
- Country Produced
- Language
- Plot
- Actors

## Organization of the app
The liri-node-app consists of the following files:
- liri.js
- keys.js
- random.txt
- log.txt
- package.json 
- package-lock.json
- .gitignore
- .env
- node_modules

## Instructions to run the app
1. Open terminal and navigate to the liri.js file
2. Enter the following to find a concert for an artist of your choice

    ```node liri.js concert-this < artist name >```
    
3. Enter the following to find song information of your choice

    ```node liri.js spotify-this-song < song title >```
    
4. Enter the following to find movie information 

    ```node liri.js movie-this < movie title >```
    
5. Enter the following to show what is in random.txt
    
    ```node liri.js do-what-it-says```



## Technologies used
* Node Spotify API
* Axios
* OMDB API
* Bands in Town API
* Moment
* DotEnv

## Author
Brooke Guarienti

#### Collaborated with 
* John Pendergrass 
* Amy Haerr 
* Zach Ledford
* Haylee McLemore

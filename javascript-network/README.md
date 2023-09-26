A README.md file on ALX JavaScript - Network

**Requirements:**

Recommended editors: Visual studio code
All your files will be interpreted on Ubuntu 20.04 LTS using node (version 14.x)
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
The length of your files will be tested using wc
You are not allowed to use var

Task 0: Status code
Write a script that display the status code of a GET request.
The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request (NB: It must be installed if you haven’t already installed it)

Task 1: Star wars movie title
Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.
The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
You must use the module request

Task 2: Star wars Wedge Antilles
Write a script that prints the number of movies where the character “Wedge Antilles” is present.
The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request
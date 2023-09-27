A README on Javascript Advanced. 

# Requirements:

Recommended editors: Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension

Task 0: Lexical scoping and welcome message
Create a function named welcome:
It takes two arguments: firstName (string) and lastName (string)
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome function, write a function named displayFullName:
It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.
Call the function displayFullName at the end of the function welcome
How to test:
Open your web inspector in the tab “Console”
Copy paste your code in the console and hit enter
Copy and paste this welcome('Holberton', 'School'); and hhit enter to run that code. It should prompt an alert with this content: Welcome Holberton School!
When you write and execute alert(fullName) afterwards, it should return a reference error fullName is not defined 


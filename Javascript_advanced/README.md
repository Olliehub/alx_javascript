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

Task 1: Closure Scope Chain
Create a variable named globalVariable with value Welcome
Create a function outer that:
alerts the content of the variable globalVariable
creates a variable named course with value Holberton
creates a function inner that:
alerts the content of the variable globalVariable and course (concatenated)
creates a variable named exclamation with value !
creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
calls the function inception
calls the function inner
Call the function outer
Compose the code:
Write the function inception within inner
Write the function inner within outer
Call the function outer in the main code (outside any function)
Call the function inner within outer
Call the function inception within inner
Requirements:
Running the script should display three popups one by one with the text Welcome, Welcome Holberton, and Welcome Holberton!


We're moving to Discord!
In a few days, we will be leaving Slack in favor of Discord 🎉
Click here for more information
Project badge
0%
Javascript advanced
JavaScript
 Master
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Project over - took place from Sep 8, 2023 10:00 PM to Sep 14, 2023 9:59 PM
 Manual QA review must be done (request it when you are done with the project)
Resources
Read or watch:

Lexical scoping
Closure
Call stack
Binding
Callbacks
Learning Objectives
What is lexical scoping in Javascript
What is closure in Javascript
How to use closure
How to chain different closures
How to simulate private methods with Closure
The execution stack order with Javascript
How to use binding
How to use callbacks
Requirements
Recommended editors: Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
Live learning session for this project

Quiz questions
Great! You've completed the quiz successfully! Keep going! (Show quiz)
Tasks
0. Lexical scoping and welcome message
mandatory
Create a function named welcome:

It takes two arguments: firstName (string) and lastName (string)
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome function, write a function named displayFullName:
It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark.
Call the function displayFullName at the end of the function welcome
How to test

Open your web inspector in the tab “Console”
Copy paste your code in the console and hit enter
Copy and paste this welcome('Holberton', 'School'); and hhit enter to run that code. It should prompt an alert with this content: Welcome Holberton School!
When you write and execute alert(fullName) afterwards, it should return a reference error fullName is not defined
Repo:

GitHub repository: alx_javascript
Directory: Javascript_advanced
File: 0-welcome.js
0/12 pts
1. Closure Scope Chain
mandatory
Create a variable named globalVariable with value Welcome
Create a function outer that:
alerts the content of the variable globalVariable
creates a variable named course with value Holberton
creates a function inner that:
alerts the content of the variable globalVariable and course (concatenated)
creates a variable named exclamation with value !
creates a function inception that alerts the content of the variable globalVariable, course, and exclamation (concatenated)
calls the function inception
calls the function inner
Call the function outer
Compose the code:

Write the function inception within inner
Write the function inner within outer
Call the function outer in the main code (outside any function)
Call the function inner within outer
Call the function inception within inner
Requirements:

Running the script should display three popups one by one with the text Welcome, Welcome Holberton, and Welcome Holberton!
Repo:

GitHub repository: alx_javascript
Directory: Javascript_advanced
File: 1-nested_functions.js
0/19 pts
Task 2: Closure
Write a function named welcomeMessage:
It accepts one argument fullName (string)
It should be a closure for an alert displaying Welcome <fullName>
After this function definition, create three variables:
guillaume contains a call welcomeMessage with Guillaume as argument
alex contains a call welcomeMessage with Alex as argument
fred contains a call welcomeMessage with Fred as argument
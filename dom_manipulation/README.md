A README.md report on JS HTML DOM manipulation.

**General Objectives**

Understand the Document Object Model (DOM)
Access and Manipulate Elements with JavaScript
How to use CSS selectors and traverse the DOM tree
How to work with event listeners/handlers

# **Requirements**:

Recommended editors: Visual studio code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
You are not allowed to use var 

Task 0: Play with the DOM
Write a JavaScript program that demonstrates the basic concept of the DOM by accessing and modifying an HTML element.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>
</body>
</html>

Write JavaScript code to select the element using its id and store it in a variable
Use the DOM API to modify the content of the <p> element to I successfully updated this paragraph with javascript
Make use of document.getElementById
Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

Task 1: Selecting HTML Elements Using Selectors
Write a JavaScript program that demonstrates the use of selectors to select specific HTML elements.

Use the HTML code below as the starting point and add your JavaScript code as an internal <script> tag:

<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>
</body>
</html>
Use the DOM API to modify the format of the <p class="highlight"> element to make the content boldened
Make use of document.querySelectorAll
Verify that the program successfully modifies the element content when the HTML file is opened in a browser.
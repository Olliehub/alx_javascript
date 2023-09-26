#!/usr/bin/node

const request = require('request');

// Define the API URL for all tasks //
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to the API to fetch all tasks //
request.get(apiUrl, { encoding: 'utf-8' }, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
  } else if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`);
  } else {
    try {
      const tasks = JSON.parse(body);

      // Create an object to store the count of completed tasks for each user ID //
      const userCompletedTasks = {};

      // Count completed tasks for each user //
      tasks.forEach((task) => {
        if (task.completed) {
          const userId = task.userId;
          if (userCompletedTasks[userId]) {
            userCompletedTasks[userId]++;
          } else {
            userCompletedTasks[userId] = 1;
          }
        }
      });

      // Print the results //
      for (const userId in userCompletedTasks) {
        console.log(`User ID ${userId}: ${userCompletedTasks[userId]} completed tasks`);
      }
    } catch (e) {
      console.error(`Error parsing JSON: ${e.message}`);
    }
  }
  
});

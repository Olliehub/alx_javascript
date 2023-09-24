const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node getStatus.js <https://www.flashscore.com.ng/>');
  process.exit(1);
}

const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  console.log(`code: ${response.statusCode}`);
});

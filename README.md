# Unhandled Request Body in Express.js POST Route

This repository demonstrates a common, yet easily overlooked, error in Express.js applications:  failure to properly handle the request body (`req.body`) in POST routes.  This can lead to server crashes or unexpected behavior when dealing with malformed or unexpected input.

## Bug Description
The provided `bug.js` file shows an Express.js server with a POST route that processes user data.  It lacks error handling for cases where the request body is missing or malformed.  This vulnerability can be exploited by sending improperly formatted JSON, which may lead to errors or crashes.

## Solution
The `bugSolution.js` file demonstrates a corrected version. It includes checks to ensure that `req.body` exists and contains the expected data before processing it.  If errors are detected, appropriate error responses are sent to the client.

## How to Reproduce the Bug
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js`.
5. Use a tool like Postman to send a POST request to `http://localhost:3000/user`. Try sending a request with no body or an invalid JSON body. Observe the server's response and behavior.

## How to Run the Solution
1. Run `node bugSolution.js`.
2. Repeat step 5 from the "How to Reproduce the Bug" section and compare the results.
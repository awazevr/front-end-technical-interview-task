
# Awaze Front-End Interview Project

## Overview

Welcome to the Awaze Front-End coding exercise! This project is a small-scale application that demonstrates how to integrate a React front end with a simple Node/Express API. The goal is to allow users to search for locations and display matching results, with a few extra conditions to test your front-end skills.

### Project Structure

```
/server
  ├── data
  ├── src
  ├── tests
  └── ...

/client
  ├── src
  ├── public
  └── ...
```

- **server/**: Contains a basic Node/Express backend that serves the `/api/location` endpoint. This folder is off-limits for coding changes. It emulates real-world scenarios by randomly:
    - Returning HTTP 500 errors.
    - Introducing slow response times.

- **client/**: Contains the React front end. This is where you will make all necessary changes to fulfill the requirements.

---

## Brief

Awaze has acquired another travel company called **GlobalEscapes**. We have been asked to build a **basic site** allowing users to search for locations with the following features:

1. **Free Text Search Input**  
   A text input where the user can type a location. As the user types, a drop down list of available locations should be displayed. 

2. **Delayed API Calls**  
   We only call the server’s `/api/location` endpoint **after** the user has typed **three or more characters**.  
   On the **3rd keypress** (and beyond), the front end should send the current term as a query parameter to the server:  
   `GET /api/location?term=<userInput>`

3. **Filtered Results**  
   The server returns matching locations based on your `term`.  
   For example, if the server’s data includes `['fo', 'foo', 'foobar', 'barfoo', 'bar', 'waz']` and the query is `"fo"`, the server will return `['fo', 'foo', 'foobar', 'barfoo']` (any location containing `"fo"`).

4. **De-duplication**  
   The front end must **remove any duplicate** locations before displaying them.

5. **Display a Drop-Down**  
   As the user continues typing, a drop-down (or list) of matching locations appears.  
   

6. **Server’s Random Behaviors** 
   - **Random 500 Errors**: Sometimes the server returns a 500.  
   - **Slow Response Times**: Sometimes the server responds slowly.
   

---

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone this repository**:
   ```bash
   git clone add-repo-here
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```


### Running the Project

**Start the project** (in the root folder):
   ```bash
   npm run dev
   ```
   This runs the React app on **http://localhost:3000** and the Server on  **http://localhost:5000**


### Verifying Connectivity

- Open `http://localhost:3000` in your browser.
- Type in the input box—once you type **3 characters**, the client should call `http://localhost:5000/api/location?term=<input>` to get matching results.

---

## Requirements Checklist

1. **Search input that only triggers on the 3rd keypress**  
   Before 3 characters, **no API call** should occur.

2. **API call**  
   `GET /api/location?term=<term>`

3. **Filter out duplicates** in the results before displaying them.

4. **Error Handling**  
   - Random server 500 errors.  
   - Potential slow responses—your UI might need to indicate loading or handle a potential timeout scenario.

5. **Display** the final results in a **drop-down** or something similar (e.g., a UL/LI list).

---

## Additional Challenges (Optional Ideas)

If you want to expand on this assignment or test additional skills, here are some optional features you could introduce:

1. **Client-Side Caching**  
   Cache previously fetched search results so that typing the same term again returns instantly without hitting the API.

2. **Debouncing**  
   Instead of calling the API on every keyDown, implement **debouncing**. For example, only call the API if the user stops typing for ~300 milliseconds, but still respect the “at least 3 characters” rule.

3. **Pagination**  
   If the location list is large, you could implement pagination or infinite scrolling in the drop-down.

4. **Highlight Matching Text**  
   When displaying results, highlight the matching portion of the text (e.g., highlight “fo” in “foobar”).

5. **Error Boundary / Retry Mechanisms**  
   If a 500 error occurs, show a user-friendly message and a “Retry” button. Possibly implement an **Error Boundary** in React.

6. **Accessibility**  
   Ensure the search input and the drop-down are accessible (keyboard navigation, screen reader-friendly, ARIA roles, etc.).

7. **Unit & Integration Tests**  
   Write tests for your components, ensuring the search input and results behave as expected under various conditions (3rd keypress, slow responses, server 500, etc.).

---

## Evaluation Criteria

- **Code Readability & Organization**  
  Is your code clean, modular, and easy to follow?

- **Correctness**  
  Does the search functionality work per the requirements (3rd keypress, deduplicated results)?

- **Error Handling**  
  How gracefully do you handle server errors and slow responses?

- **UI/UX**  
  Is the interface intuitive? Does the user know when the app is loading or if an error occurred?

---

## Conclusion

We look forward to seeing how you approach this task. If you have any questions, don’t hesitate to ask.

**Happy coding!**

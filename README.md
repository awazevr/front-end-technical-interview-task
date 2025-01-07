# Awaze Front-End Interview Project

## Overview

Welcome to the Awaze Front-End Coding exercise! This project is a small-scale application designed to mimic real-world coding scenarios you might encounter in your day-to-day development. Your goal is to build a user interface that allows users to search for locations and display matching results.

## The Brief

We’ve recently acquired a global holiday company called **GlobalEscapes**, renowned for its unique, off-the-beaten-track travel experiences. To support this acquisition, we’ve been tasked with building a basic website that allows users to search for locations by integrating with a third-party `Location API`, which is know for it's instability and often slow response times.

### Requirements:

1. **Free Text Search Input**  
   Add a text input that allows users to type a location. As they type, a drop-down list of available locations should appear. The text input should be placed within the Hero section, positioned at the center, and centrally aligned.

2. **Delayed API Calls**  
   The location API should only be queried **after** the user has typed **three or more characters**. From the **3rd keypress** (and beyond), the front end will send the current search term as a query parameter `term` to the API:

   ```bash
   GET /api/location?term=<userInput>
   ```

3. **De-duplication**  
   The front end must **remove any duplicate** locations before displaying them.

4. **Display a Drop-Down**  
   As the user is typing, display the results in a drop-down or something similar (e.g. a UL/LI list).

5. **Highlight Matching Text**  
   When displaying results, highlight the matching portion of the text (e.g. If the term passed is `foo` highlight “foo” in “foobar”).

## Getting Started

1. **Clone this repository**:

   ```bash
   git clone git@github.com:awazevr/front-end-technical-interview-task.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the project** (in the root folder):

   ```bash
   npm run dev
   ```

This runs the React app on **http://localhost:5173** and the Server on **http://localhost:5000**

---

## Additional Challenges (Optional Ideas)

If you want to expand on this assignment or test additional skills, here are some optional features you could introduce:

1. **Client-Side Caching**  
   Cache previously fetched search results so that typing the same term again returns instantly without hitting the API.

2. **Debouncing**  
   Instead of calling the API on every keyDown, implement **debouncing**. For example, only call the API if the user stops typing for ~300 milliseconds, but still respect the “at least 3 characters” rule.

3. **Pagination**  
   If the location list is large, you could implement pagination or infinite scrolling in the drop-down.

4. **Accessibility**  
   Ensure the search input and the drop-down are accessible (keyboard navigation, screen reader-friendly, ARIA roles, etc.).

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

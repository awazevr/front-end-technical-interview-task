# Awaze Front-End Interview Project

## Overview

Welcome to the Awaze Front-End Coding exercise! This project is a small-scale application designed to mimic real-world coding scenarios you might encounter in your day-to-day development. Your goal is to build a user interface that allows users to search for locations and display matching results.

## The Brief

We’ve recently acquired a global holiday company called **GlobalEscapes**, renowned for its unique, off-the-beaten-track travel experiences. To support this acquisition, we’ve been tasked with building a basic website that allows users to search for locations by integrating with a third-party `Location API`, which is know for it's instability and often slow response times. We need to get something live, that is functional in the next hour.

> [!NOTE]
> For this exercise, the 3rd-party Location API is emulated within the **server** folder. This folder is off-limits for any coding changes. The emulation replicates real-world scenarios, including random errors and delayed response times, to simulate the challenges of working with external APIs.

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

> [!NOTE]
> Completing all the tasks is not the goal of this exercise. Instead, we encourage you to focus on **quality over quantity**. This includes writing clean, maintainable code, demonstrating your thought process, and showcasing how you approach problem-solving. It's better to complete a few tasks well than to rush through everything.

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

This runs the React app on **http://localhost:5173** and the Server on **http://localhost:3000**

---

## Evaluation Criteria

- **Code Readability & Organization**  
  Is your code clean, modular, and easy to follow?

- **Correctness**  
  Does the search functionality work per the requirements?

- **Error Handling**  
  How gracefully do you handle server errors and slow responses?

- **Usage of AI tool**  
  While we do not discourage the use of AI tools, such as GitHub Copilot, in your day-to-day development work, we kindly ask that you refrain from using them during this exercise. Our goal is to evaluate your technical capabilities without assistance, so please complete the task using your own knowledge and skills.

---

## Conclusion

We look forward to seeing how you approach this task. If you have any questions, don’t hesitate to ask.

**Happy coding!**

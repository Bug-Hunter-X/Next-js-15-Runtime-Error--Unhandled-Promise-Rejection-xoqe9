# Next.js 15 Runtime Error: Unhandled Promise Rejection

This repository demonstrates a common runtime error in Next.js 15 applications related to unhandled promise rejections when fetching data. The `about.js` page attempts to directly use the promise returned by `fetch` without proper error handling or async/await, leading to an error if the fetch operation fails.

## Bug Description
The `About` page fetches data from an API route (`/api/data`).  The API route simulates network failures randomly.  When a failure occurs, the `About` page throws an error because it doesn't handle the promise rejection properly.

## Solution
The `aboutSolution.js` file demonstrates the correct way to handle the promise using `async/await` and a `try...catch` block, preventing the runtime error.  The solution also includes a loading state to provide better user feedback.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. Refresh the page several times. You'll observe the error when the simulated API call fails.

## How to fix the bug
1. Replace `about.js` with `aboutSolution.js`
2. Run `npm run dev` again.

The error should no longer occur, and the app gracefully handles the API error and shows a loading state if the fetch fails.
# UBC Kendo Club — Web Frontend

The official web application for the University of British Columbia Kendo Club (Est. 1978). Built with React, Vite, and React Router, and deployed via Vercel.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) v18 or higher installed.

### Moving On

Install project dependencies:
``` bash
npm install
```
Run the development server:
``` bash
npm run dev
```
Once started, open your browser at http://localhost:5173. Changes made to source files will trigger hot module reloading.

## Updating Content

Core site content is centralized in `src/data/kendoData.js`, allowing non-technical executives to update site information without modifying component code.

<!-- * **Tournament bracket:** Set `TOURNAMENT_INFO.isActive` to `true` and update `bracketUrl`. -->
* **Practice schedule and locations:** Modify the `PRACTICE_SCHEDULE` and `LOCATIONS` arrays.
* **Executives and instructors:** Edit the `EXEC_TEAM` and `INSTRUCTORS` arrays.

LMS-CALL-QUEUE-MANAGEMENT-WEB
=============================

Environment Setup
-----------------

1.  `nvm use 20`
2.  `node -v && npm -v` (verify versions)
3.  `npm install`
4.  `npm run dev` (development server)
5.  `npm run build` (production build)

* * *

Coding Guidelines
-----------------


1. Use `.tsx` for any file that contains `JSX/TSX` syntax

- React components (function or class) almost always include JSX, so they go in .tsx files.

- Even small bits of JSX (e.g., returning <>...</> for fragments) require .tsx.


2. Use `.ts` for files that contain **only plain TypeScript** (no JSX)

- Utility functions

- Data models

- API clients

- Hooks (if they don’t return JSX)

- Configuration files


3.  **Pre-commit Hooks & Formatting**  
    Install Husky (v9.1.7) to enforce formatting:  
    `npx husky install`

4.  **Import Order**
    1.  React core imports
    2.  Third-party imports
    3.  Custom components/hooks/services imports

5.  **Project Structure**
    
    *   **Components** — purely presentational, JSX/markup only
    *   **Hooks** — data fetching & caching logic
    *   **Services** — wrap `APIClient` (axios instance) for API calls
    
        Components → Hooks → Services → APIClient
    

* * *

Available Commands
------------------

*   `npm run dev` — start local development server
*   `npm run build` — build for production
*   `npm run preview` — serve production build locally
*   `npm run lint` — run linter
*   `npm run lint:fix` — auto-fix lint issues
*   `npm run format` — format code

* * *

## Building the Application for Production

* In the root directory run `docker build -t lms-cq-web . ` this will create a lms-cq-web image.

Example:
```bash
docker build -t lms-cq-web .                                                                                 

#OUTPOUT
[+] Building 56.9s (18/18) FINISHED                                                                                                                                                             
```

* For local you can run the Docker Image by running  `docker run -d -p 8080:80 --name lms-cq-web lms-cq-web`

This will now run the application in your local machine at [Localhost](http://localhost:8080/ccq)


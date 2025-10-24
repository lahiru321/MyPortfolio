# Backend Change Log

This document tracks all structural and code changes made to the backend folder, including controllers, routes, and server setup.

---

## [2025-10-11] Initial Express Backend Setup
- Created `backend/` folder.
- Initialized Node.js project with `express` as a dependency.
- Added `index.js` with a basic Express server.
- Added start script to `backend/package.json`.

## [2025-10-11] Project Structure Refactor: Controllers & Routes
- Created `controllers/` and `routes/` folders in `backend/`.
- Added `controllers/helloController.js` with a `sayHello` function.
- Added `routes/hello.js` to define `/api/hello` endpoint, using the controller.
- Updated `index.js` to use the new route: `app.use('/api/hello', helloRoutes);`

---

For each future backend change, add a new dated section describing:
- What was added/changed/removed
- The reason for the change (if relevant)
- Key files or code snippets involved

> Example entry:
>
> ## [YYYY-MM-DD] Feature: Add /api/user endpoint
> - Added `controllers/userController.js` and `routes/user.js`.
> - Registered `/api/user` route in `index.js`.
> - Purpose: To provide user profile data for the frontend.

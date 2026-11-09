# Fathima Hashim – Full-Stack Dynamic Portfolio

This converts the uploaded HTML/CSS portfolio into a React + Express + MongoDB application. The original purple-and-white styling is retained.

## Technology
- React.js + Vite
- Node.js + Express.js
- MongoDB running locally
- Mongoose
- Axios
- React `useState`, `useEffect`, and `.map()`

## 1. Install prerequisites
Install Node.js and MongoDB Community Server on Windows. During MongoDB installation, keep MongoDB Server installed as a Windows service. No MongoDB Atlas account is required.

## 2. Open the project in VS Code
Extract the ZIP. In VS Code choose **File → Open Folder** and open the extracted `fathima-portfolio-fullstack` folder.

## 3. Install packages
Open the VS Code terminal (Terminal → New Terminal). Make sure the terminal is in the main project folder, then run:

```cmd
npm install
npm run install-all
```

## 4. Configure the backend
In the VS Code Explorer, open the `server` folder. Copy `.env.example`, paste it in the same folder, and rename the copy to `.env`.

The `.env` file should contain:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/fathima_portfolio
```

This is a local MongoDB connection. Do not type this URL as a Windows CMD command; it belongs in `server/.env`.

## 5. Start MongoDB
If MongoDB was installed as a Windows service, open Windows Services and make sure **MongoDB Server** is running. You can also use MongoDB Compass and connect to:

`mongodb://127.0.0.1:27017`

## 6. Insert portfolio information into MongoDB
Open a terminal in the main project folder and run:

```cmd
npm run seed --prefix server
```

Expected message: `Portfolio data inserted successfully.`

The seed script replaces the existing portfolio document in the `fathima_portfolio` database with the sample portfolio data. Edit `server/seed-data.js` before running it if you want to change the content.

## 7. Run frontend and backend
From the main project folder, run:

```cmd
npm run dev
```

This starts both applications:
- React frontend: `http://localhost:5173`
- Express backend: `http://localhost:5000`
- API endpoint: `http://localhost:5000/api/portfolio`

Keep this terminal open while using the website. Press `Ctrl + C` to stop both processes.

## 8. Test the API
Open `http://localhost:5000/api/portfolio` in Chrome. You should see the portfolio data as JSON.

Then open `http://localhost:5173` to view the React website.

## How the data flow works
1. `server/models/Portfolio.js` defines the Mongoose schema.
2. `server/seed-data.js` inserts the portfolio information into local MongoDB.
3. `server/server.js` exposes `GET /api/portfolio`.
4. `client/src/App.jsx` sends an Axios GET request inside `useEffect`.
5. `useState` stores the API response.
6. React renders the content, and `.map()` creates education, skill, interest, internship, and project cards from MongoDB arrays.

## Important note about the contact email
The uploaded HTML contains `fathimahashim005@gmail,cpom`, which appears to be misspelled. Confirm the correct email and edit `contact.email` in `server/seed-data.js`, then run the seed command again.

## Troubleshooting
- **MongoDB connection failed:** Start the local MongoDB Server service, then restart the backend.
- **Portfolio data not found:** Run `npm run seed --prefix server`.
- **Unable to load portfolio:** Keep both terminals/processes running, and check the API URL in Chrome.
- **`npm` is not recognized:** Install Node.js, close VS Code, reopen it, and check `node -v` and `npm -v`.

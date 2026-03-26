# Fullstack Expense Tracker

Expense tracker application with a Spring Boot backend and a React frontend.

## Tech Stack

- Backend: Java, Spring Boot, Maven
- Frontend: React, Create React App
- Authentication: JWT

## Project Structure

- `backend/` - Spring Boot API
- `frontend/` - React app
- `Screenshots/` - project screenshots

## Live Deployment

- Frontend: `https://frontend-production-6a91.up.railway.app`
- Backend: `https://backend-production-ab1e.up.railway.app`

## Prerequisites

- Java 21
- Maven 3.6+
- Node.js and npm

## Backend Run Command

Open a terminal and run:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\backend
mvn spring-boot:run
```

The backend runs on:

- `http://localhost:9090`

Health check:

```powershell
Invoke-WebRequest -UseBasicParsing http://localhost:9090/health
```

## Frontend Run Command

Open another terminal and run:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\frontend
cmd /c npm install
cmd /c npm start
```

The frontend runs on:

- `http://localhost:3000`

## Build Commands

Backend:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\backend
mvn clean package -DskipTests
```

Frontend:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\frontend
cmd /c npm run build
```

## Run Both Locally

Use two terminals.

Terminal 1:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\backend
mvn spring-boot:run
```

Terminal 2:

```powershell
cd c:\Projects\Fullstack-Expense-Tracker-main\frontend
cmd /c npm install
cmd /c npm start
```

Then open:

- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:9090/health`

## Notes

- If port `9090` is busy, check it with:

```powershell
netstat -ano | findstr :9090
```

- If port `3000` is busy, check it with:

```powershell
netstat -ano | findstr :3000
```

- Local frontend uses backend base URL:
  - `http://localhost:9090/mywallet`

## Screenshots

![Login Page](Screenshots/Login%20Page.png)
![Dashboard](Screenshots/DashBoard.png)
![New Transaction](Screenshots/New_Transaction.png)
![Transaction History](Screenshots/Transaction_History.png)
![Statistics](Screenshots/Statistics.png)
![Settings](Screenshots/settings.png)
![Saved Transaction](Screenshots/saved_transaction.png)

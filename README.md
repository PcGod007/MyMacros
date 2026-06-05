# MyMacros — Indian Nutrition Tracker

A premium, mobile-first Indian nutrition tracking app with a vanilla JS frontend and Node.js/Express backend.

## Project Structure

```
MyMacros/
├── frontend/           ← Static site (HTML + CSS + Vanilla JS)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
└── backend/            ← REST API (Node.js + Express + MongoDB)
    ├── server.js
    ├── .env
    ├── models/
    ├── routes/
    └── middleware/
```

## Running Locally

### Backend
```bash
cd backend
npm install
npm run dev          # starts on http://localhost:5000
```

### Frontend
Open `frontend/index.html` directly in a browser, or serve with any static server:
```bash
cd frontend
npx serve .   # or use VS Code Live Server pointing to the frontend folder
```

## Deployment

- **Backend** → Deploy to [Render](https://render.com) or [Railway](https://railway.app)
  - Root directory: `backend`
  - Start command: `node server.js`
  - Set env vars: `MONGO_URI`, `JWT_SECRET`, `PORT`

- **Frontend** → Deploy to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)
  - Root directory: `frontend`
  - No build command needed (static HTML)
  - Set `API_BASE_URL` in `js/utils/api.js` to your deployed backend URL

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/login` | Login, receive JWT |
| GET | `/api/auth/me` | Get current user |
| PUT | `/api/user/profile` | Update profile |
| GET | `/api/logs?date=` | Get food log for a day |
| POST | `/api/logs/:date/entries` | Add food entry |
| DELETE | `/api/logs/:date/entries/:id` | Remove food entry |
| GET | `/api/logs/range?from=&to=` | Logs for date range |
| GET | `/api/weights` | Get weight history |
| POST | `/api/weights` | Log new weight |

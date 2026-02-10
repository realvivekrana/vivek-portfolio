# Portfolio Backend API

MERN Stack backend for the portfolio website.

## Features
- Contact form submissions
- MongoDB database storage
- Email notifications via Nodemailer
- RESTful API endpoints

## Setup Instructions

### 1. Install MongoDB
Download and install MongoDB from: https://www.mongodb.com/try/download/community

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Configure Environment Variables
Edit the `.env` file with your credentials:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```

**To get Gmail App Password:**
1. Go to Google Account settings
2. Security → 2-Step Verification (enable it)
3. App passwords → Generate new app password
4. Copy the 16-character password to `.env`

### 4. Start MongoDB
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

### 5. Run the Backend Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server will run on: http://localhost:5000

## API Endpoints

### POST /api/contact
Submit contact form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

### GET /api/contact
Get all contact submissions (for admin use)

## Testing the API

Use Postman or curl:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "This is a test message"
  }'
```

## Frontend Integration

The frontend ContactForm component is already configured to connect to this backend.

Make sure both servers are running:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Deployment

### Backend Deployment Options:
1. **Heroku** - Free tier available
2. **Railway** - Easy deployment
3. **Render** - Free tier with MongoDB Atlas
4. **DigitalOcean** - VPS hosting

### MongoDB Cloud:
Use MongoDB Atlas for cloud database:
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update MONGODB_URI in .env

## Troubleshooting

**MongoDB Connection Error:**
- Make sure MongoDB is running
- Check MONGODB_URI in .env

**Email Not Sending:**
- Verify EMAIL_USER and EMAIL_PASS in .env
- Use Gmail App Password, not regular password
- Enable "Less secure app access" if needed

**CORS Error:**
- Backend is configured to allow all origins
- For production, update CORS settings in server.js

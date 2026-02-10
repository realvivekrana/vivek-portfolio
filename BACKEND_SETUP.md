# 🚀 MERN Stack Portfolio - Quick Start Guide

Your portfolio now has a full MERN stack backend!

## What's Been Added?

✅ **Backend API** (Node.js + Express)
✅ **MongoDB Database** for storing contact submissions
✅ **Email Notifications** via Nodemailer
✅ **Frontend Integration** - ContactForm connected to backend

## 📁 Project Structure

```
vivek-portfolio/
├── src/                    # React Frontend
│   └── components/
│       └── ContactForm.js  # Now connected to backend!
├── backend/                # Node.js Backend (NEW!)
│   ├── models/
│   │   └── Contact.js     # MongoDB schema
│   ├── routes/
│   │   └── contact.js     # API routes
│   ├── server.js          # Express server
│   ├── .env               # Environment variables
│   └── package.json
└── package.json           # Frontend dependencies
```

## 🛠️ Setup Steps

### Step 1: Install MongoDB
Download from: https://www.mongodb.com/try/download/community

### Step 2: Configure Email (Gmail)
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate App Password
4. Copy the 16-character password

### Step 3: Update Backend .env File
```bash
cd backend
```

Edit `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=vivekranaworks@gmail.com
EMAIL_PASS=your-16-char-app-password-here
```

### Step 4: Start MongoDB
Open a new terminal:
```bash
mongod
```

### Step 5: Start Backend Server
In backend folder:
```bash
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected
```

### Step 6: Start Frontend
In main folder:
```bash
npm start
```

## ✨ Testing

1. Open http://localhost:3000
2. Go to "Get in Touch" section
3. Fill out the contact form
4. Click "Send Message"
5. Check your email for notification!

## 📊 View Submissions

To see all contact form submissions:
```bash
# Open in browser or use curl
curl http://localhost:5000/api/contact
```

## 🌐 Deployment

### Option 1: Deploy Backend to Render
1. Create account at https://render.com
2. Connect your GitHub repo
3. Create new Web Service
4. Set root directory to `backend`
5. Add environment variables
6. Deploy!

### Option 2: Use MongoDB Atlas (Cloud Database)
1. Create account at https://mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Update MONGODB_URI in .env

### Update Frontend API URL
When backend is deployed, update ContactForm.js:
```javascript
const response = await fetch('https://your-backend-url.com/api/contact', {
  // ...
});
```

## 🔧 Troubleshooting

**Backend won't start:**
- Make sure MongoDB is running (`mongod`)
- Check if port 5000 is available
- Run `npm install` in backend folder

**Form not submitting:**
- Check browser console for errors
- Make sure backend is running on port 5000
- Verify CORS is enabled in server.js

**Email not sending:**
- Use Gmail App Password, not regular password
- Check EMAIL_USER and EMAIL_PASS in .env
- Make sure 2-Step Verification is enabled

## 📝 Next Steps

1. **Add Authentication** - Protect admin routes
2. **Create Admin Dashboard** - View all submissions
3. **Add More Features** - Blog posts, projects CRUD
4. **Deploy to Production** - Render, Heroku, or Railway

## 🎉 You're All Set!

Your portfolio is now a full-stack MERN application! The contact form will:
- Save submissions to MongoDB
- Send you email notifications
- Show success/error messages to users

Happy coding! 🚀

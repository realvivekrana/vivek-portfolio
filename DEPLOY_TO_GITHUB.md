# Deploy Portfolio to GitHub

Your portfolio is ready to push to GitHub! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to: https://github.com/new
2. Repository name: `vivek-portfolio` (or any name you prefer)
3. Description: "Modern React Portfolio with animations and responsive design"
4. Keep it **Public** (so you can deploy to GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd "C:\My Portfolio\vivek-portfolio"

# Add your GitHub repository (replace YOUR_USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/vivek-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Your GitHub username appears to be:** `realvivekrana`

So your command would be:
```bash
git remote add origin https://github.com/realvivekrana/vivek-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to GitHub Pages (Optional)

To make your portfolio live on the internet:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"homepage": "https://realvivekrana.github.io/vivek-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

4. Enable GitHub Pages:
   - Go to your repository settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: gh-pages
   - Click Save

Your portfolio will be live at: `https://realvivekrana.github.io/vivek-portfolio`

## What's Included:

✅ All React components
✅ Your profile photo
✅ Responsive design
✅ Smooth animations
✅ Contact form
✅ 3 featured projects
✅ Skills section
✅ Social media links

## Repository Status:

- ✅ Git initialized
- ✅ All files committed
- ✅ .gitignore configured
- ⏳ Ready to push to GitHub

---

**Need help?** Make sure you're logged into GitHub and have the correct permissions.

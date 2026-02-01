# Grace E. Studio - Quick Deployment Guide

## What's Included

✅ Fully responsive website with your actual studio photos
✅ Professional design matching your studio aesthetics
✅ 7 beautiful studio photos integrated into the site
✅ Two distinct studio showcases (Joyce Loft & Storefront)
✅ Contact form and information
✅ Ready for Acuity Scheduling integration

## Files Structure

```
graceestudio.com/
├── index.html          (Main website file)
├── styles.css          (All styling)
├── script.js           (Interactive features)
├── README.md           (Full documentation)
└── images/            (Your studio photos)
    ├── IMG_1888.jpg   (Joyce Loft - dark/moody space)
    ├── IMG_2297.jpg   (Storefront - bright bathroom)
    ├── IMG_2298.jpg   (Storefront - bathroom detail)
    ├── IMG_2305.jpg   (Storefront - kitchen)
    ├── IMG_2306.jpg   (Storefront - colorful seating)
    ├── IMG_2307.jpg   (Storefront - natural light)
    └── IMG_2322.jpg   (Joyce Loft - vintage chaise)
```

## Quick Deploy to GitHub Pages (5 minutes!)

### Step 1: Create Repository
1. Go to https://github.com/new
2. Repository name: `graceestudio.com`
3. Keep it Public
4. Click "Create repository"

### Step 2: Upload Files
**Option A - Drag & Drop (Easiest):**
1. Download all the files I provided
2. In your GitHub repository, click "uploading an existing file"
3. Drag all files AND the images folder
4. Scroll down and click "Commit changes"

**Option B - GitHub Desktop:**
1. Download GitHub Desktop from https://desktop.github.com/
2. Clone your repository
3. Copy all files into the local folder
4. Commit and push

### Step 3: Enable GitHub Pages
1. In your repository, go to Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select branch: **main**
4. Click Save
5. Wait 2-3 minutes
6. Your site will be live at: `https://YOUR-USERNAME.github.io/graceestudio.com/`

### Step 4: Connect Your Domain (graceestudio.com)

1. **In your domain registrar** (where you bought graceestudio.com):
   
   Add these DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: YOUR-USERNAME.github.io
   ```

2. **Back in GitHub Pages settings:**
   - Enter `graceestudio.com` in the Custom Domain field
   - Click Save
   - Check "Enforce HTTPS" (after DNS propagates - 1-24 hours)

## Add Acuity Scheduling

When you're ready to add booking:

1. Log in to Acuity Scheduling
2. Get your embed code from: Business Settings > Embed Code
3. Open `index.html`
4. Find this line (around line 200):
   ```html
   <div id="acuityScheduling">
   ```
5. Paste your Acuity embed code there
6. Save and push to GitHub

## Testing Before Going Live

Before deploying, you can test locally:

1. Download all files
2. Open `index.html` in your browser
3. Check all links and images work
4. Test on mobile (use browser's responsive mode)

## Support

Need help? Here's the typical issues and solutions:

**Images not showing?**
- Make sure the `images/` folder is uploaded to GitHub
- Check that image filenames match (case-sensitive!)

**Site not updating?**
- Wait 2-3 minutes after pushing changes
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

**Domain not connecting?**
- DNS changes can take up to 24 hours
- Double-check DNS records in your domain registrar

## What's Next?

1. ✅ Deploy the site
2. ✅ Connect your domain
3. ✅ Add Acuity Scheduling
4. 📸 Take more photos and add them to the gallery
5. 📱 Share your site on social media
6. 🎉 Start booking!

---

**Your website is ready to go live! 🚀**

Location: 567 Main Street, Hamilton, Ohio
Domain: graceestudio.com
Photography: graceephoto.com

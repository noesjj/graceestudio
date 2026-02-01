# Setting Up Booking Redirect

After someone books through Acuity, they'll be redirected back to your website with a nice confirmation page!

## Setup Steps:

### 1. Upload the Thank You Page

1. Download `thank-you.html`
2. Upload it to your GitHub repo (same place as index.html)
3. Commit the changes

### 2. Configure Acuity Redirect

1. Log in to **Acuity Scheduling**
2. Go to **Business Settings** (or click your name in top right)
3. Click **"Scheduling Policies"**
4. Scroll down to **"After Scheduling"** section
5. Find **"Redirect After Scheduling"** or **"Return to URL"**
6. Enter: `https://graceestudio.com/thank-you.html`
7. Click **Save**

### 3. Test It!

1. Go to your booking page
2. Make a test booking
3. After confirming, you should be redirected to the thank you page
4. Cancel the test booking in Acuity

## What Happens:

```
Customer Journey:
┌─────────────────────────┐
│  graceestudio.com       │  They visit your site
│  Clicks "Book Studio"   │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  Acuity Scheduling      │  Opens in new tab
│  Fills out booking form │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  Confirms booking       │
└───────────┬─────────────┘
            ↓
┌─────────────────────────┐
│  graceestudio.com/      │  Automatically redirected
│  thank-you.html         │  back to your site!
│  ✓ Booking Confirmed!   │
└─────────────────────────┘
```

## The Thank You Page Includes:

✅ Animated checkmark confirmation
✅ What's next instructions
✅ Studio location reminder
✅ Links back to your site
✅ Link to your photography portfolio
✅ Mobile-friendly design

## Optional: Create Short URL

If you want `graceestudio.com/thank-you` instead of `graceestudio.com/thank-you.html`:

1. Create a folder called `thank-you/` in GitHub
2. Rename `thank-you.html` to `index.html`
3. Move it into the `thank-you/` folder
4. Update Acuity redirect to: `https://graceestudio.com/thank-you/`

## Troubleshooting:

**"It's not redirecting"**
- Make sure you saved in Acuity settings
- Check the URL is exactly: `https://graceestudio.com/thank-you.html`
- Try a test booking to confirm

**"Page not found"**
- Make sure `thank-you.html` is uploaded to GitHub
- Wait 2-3 minutes for GitHub Pages to update
- Check the file is in the root directory (same level as index.html)

---

**Your booking flow is now complete!** 🎉

Customers book → Get redirected back → See professional confirmation page → Happy experience!

# Connecting Acuity Scheduling to Your Website

## ✅ Mobile-Friendly Solution

I've updated your website to use **direct links** instead of embedded modals. This is much better for mobile users!

## How It Works Now:

1. Visitor clicks "Book This Studio" button
2. Opens your Acuity Scheduling page in a new tab
3. They book on Acuity's mobile-optimized page
4. Much better experience on phones!

## Setup Steps:

### 1. Get Your Acuity URL

After you create your Acuity account, you'll get a URL like:
- `https://graceestudio.acuityscheduling.com`
- OR `https://yourname.acuityscheduling.com`

### 2. Update Your Website

Open `index.html` and find these two lines (around lines 90 and 108):

```html
<a href="https://YOUR-ACUITY-URL.acuityscheduling.com" target="_blank" class="btn btn-secondary">Book This Studio</a>
```

Replace `YOUR-ACUITY-URL.acuityscheduling.com` with your actual Acuity URL.

**Example:**
```html
<a href="https://graceestudio.acuityscheduling.com" target="_blank" class="btn btn-secondary">Book This Studio</a>
```

### 3. Upload to GitHub

1. Save the updated `index.html`
2. Upload to your GitHub repo (replacing the old one)
3. Done!

## Optional: Use graceestudio.com/book

If you want a short link for marketing:

1. Update `book.html` with your Acuity URL
2. Upload `book.html` to GitHub
3. Share `graceestudio.com/book.html` on Instagram, emails, etc.

**Or create a folder:**
1. Create a folder called `book/` in GitHub
2. Rename `book.html` to `index.html`
3. Put it in the `book/` folder
4. Now you can use `graceestudio.com/book/`

## Why This Is Better:

✅ Works perfectly on mobile (Acuity's page is mobile-optimized)
✅ No iframe issues
✅ Faster loading
✅ Professional booking experience
✅ Works on ALL devices and screen sizes

## Testing:

1. Upload your updated files
2. Visit graceestudio.com
3. Click "Book This Studio"
4. Should open your Acuity page in a new tab

---

**Your website is now 100% mobile-friendly for bookings!** 📱✨

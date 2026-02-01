# Grace E. Studio Website

A professional photography studio rental website for Grace E. Studio in Hamilton, Ohio.

## Features

- Responsive design that works on all devices
- Clean, elegant aesthetic inspired by professional photography studios
- Two studio spaces showcased: The Joyce Loft and The Storefront
- Contact form for inquiries
- Ready for Acuity Scheduling integration
- Smooth scrolling and animations
- Mobile-friendly navigation

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `graceestudio.com` (or any name you prefer)
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Your Files

You can upload files either through the GitHub website or using Git commands:

#### Option A: Upload via GitHub Website
1. In your new repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Commit the changes

#### Option B: Upload via Git (Command Line)
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/graceestudio.com.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **Pages** in the left sidebar
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be published at: `https://YOUR-USERNAME.github.io/graceestudio.com/`

### Step 4: Connect Your Custom Domain

1. In your domain registrar (where you bought graceestudio.com), add these DNS records:

   **For apex domain (graceestudio.com):**
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

2. Back in GitHub Pages settings, enter `graceestudio.com` in the Custom Domain field
3. Check "Enforce HTTPS" (after DNS propagates, which may take up to 24 hours)

## Integrating Acuity Scheduling

To add your Acuity Scheduling booking system:

### Option 1: Embed in Modal (Recommended)

1. Log in to your Acuity Scheduling account
2. Go to **Business Settings** > **Embed Code**
3. Copy the iframe embed code
4. In `index.html`, find this section (around line 200):
   ```html
   <div id="acuityScheduling">
       <!-- Acuity Scheduling embed will go here -->
   ```
5. Replace the placeholder with your Acuity embed code

### Option 2: Link to Acuity Page

1. Get your Acuity Scheduling URL (e.g., `https://yourname.acuityscheduling.com`)
2. In `index.html`, update the booking buttons to link directly:
   ```html
   <a href="https://yourname.acuityscheduling.com" target="_blank" class="btn btn-secondary">
       Book This Studio
   </a>
   ```

### Option 3: Add Acuity Script

Add this before the closing `</body>` tag in `index.html`:

```html
<script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
```

## Customization

### Studio Photos Included

The website now includes your actual studio photos! The images are already integrated:

- **The Joyce Loft**: Features your dramatic dark space with black walls and leather furniture
- **The Storefront**: Showcases the bright, botanical-inspired spaces with natural light
- **Gallery Section**: Displays 6 beautiful photos of both studio spaces

All images are located in the `images/` folder and are automatically referenced in the CSS and HTML.

### Adding More Images

To add additional photos:

```css
.joyce-loft {
    background: url('images/joyce-loft.jpg') center/cover;
}

.storefront {
    background: url('images/storefront.jpg') center/cover;
}
```

Create an `images` folder in your repository and upload your photos.

### Changing Colors

Edit the color variables at the top of `styles.css`:

```css
:root {
    --color-primary: #2c2c2c;      /* Main dark color */
    --color-secondary: #8b7355;    /* Accent color */
    --color-accent: #d4a373;       /* Secondary accent */
    --color-light: #f8f6f3;        /* Light background */
}
```

### Contact Form Integration

The current form is client-side only. To actually receive messages, you can:

1. **Use Formspree** (easiest):
   - Sign up at [Formspree.io](https://formspree.io)
   - Update the form action: `<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">`

2. **Use Netlify Forms** (if deploying to Netlify):
   - Add `netlify` attribute to the form tag

3. **Use Google Forms**:
   - Create a Google Form and embed it

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support

For questions about the website, reach out through:
- Grace E. Photography: [graceephoto.com](https://graceephoto.com/)

## License

© 2026 Grace E. Studio. All rights reserved.

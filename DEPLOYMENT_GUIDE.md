# Portfolio Deployment Guide

This guide will walk you through deploying your portfolio website from scratch. We'll cover two popular platforms: **Vercel** (recommended) and **Netlify**.

---

## Prerequisites

Before deploying, ensure you have:
- [x] Portfolio website working locally (`npm start`)
- [ ] GitHub account
- [ ] Git installed on your computer
- [ ] Environment variables set up (EmailJS credentials)

---

## Part 1: Prepare Your Project for Deployment

### Step 1: Check .gitignore

Make sure you have a `.gitignore` file that excludes sensitive files:

```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

**Important:** Never commit `.env` file to Git (it contains your EmailJS credentials).

### Step 2: Test Production Build

Run a production build locally to ensure everything works:

```bash
npm run build
```

This creates an optimized production build in the `build` folder. If there are any errors, fix them before deploying.

### Step 3: Test the Build Locally (Optional)

Install a simple server to test your build:

```bash
npm install -g serve
serve -s build
```

Visit `http://localhost:3000` to see your production build.

---

## Part 2: Push to GitHub

### Step 1: Initialize Git (if not already done)

Open terminal in your project folder:

```bash
git init
```

### Step 2: Add Remote Repository

Go to [GitHub.com](https://github.com) and create a new repository:
- Click the "+" icon → "New repository"
- Name it: `portfolio-website` (or any name you prefer)
- Don't initialize with README (your project already has files)
- Click "Create repository"

Copy the repository URL (looks like: `https://github.com/yourusername/portfolio-website.git`)

Add it as remote:

```bash
git remote add origin https://github.com/yourusername/portfolio-website.git
```

### Step 3: Commit and Push

```bash
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git push -u origin main
```

Enter your GitHub credentials when prompted.

---

## Part 3: Deploy to Vercel (Recommended)

Vercel is optimized for React apps and offers the easiest deployment experience.

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. Click "Add New..." → "Project"
2. Find your `portfolio-website` repository
3. Click "Import"

### Step 3: Configure Build Settings

Vercel auto-detects Create React App settings:
- **Framework Preset:** Create React App
- **Build Command:** `npm run build`
- **Output Directory:** `build`
- **Install Command:** `npm install`

Leave these as default.

### Step 4: Add Environment Variables

Click "Environment Variables" and add your EmailJS credentials:

| Name | Value |
|------|-------|
| `REACT_APP_EMAILJS_SERVICE_ID` | `service_lzoyezr` |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | `template_29h0loc` |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | `yZgnjdqy_At6KHVKx` |

Make sure to select **Production**, **Preview**, and **Development** for each variable.

### Step 5: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for deployment to complete
3. You'll get a live URL like: `https://portfolio-website-xyz.vercel.app`

### Step 6: Add Custom Domain (Optional)

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `kartikeychandrashukla.com`)
4. Follow DNS configuration instructions
5. Vercel automatically provisions SSL certificate

**Vercel gives you:**
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deployments on every Git push
- ✅ Preview URLs for every branch
- ✅ 100GB bandwidth/month (free plan)

---

## Part 4: Deploy to Netlify (Alternative)

Netlify is another excellent option with similar features.

### Step 1: Create Netlify Account

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Choose "Continue with GitHub"
4. Authorize Netlify

### Step 2: Import Your Project

1. Click "Add new site" → "Import an existing project"
2. Choose "GitHub"
3. Select your `portfolio-website` repository

### Step 3: Configure Build Settings

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `build`

### Step 4: Add Environment Variables

1. Click "Site settings" → "Environment variables"
2. Click "Add a variable"
3. Add these variables:

```
REACT_APP_EMAILJS_SERVICE_ID = service_lzoyezr
REACT_APP_EMAILJS_TEMPLATE_ID = template_29h0loc
REACT_APP_EMAILJS_PUBLIC_KEY = yZgnjdqy_At6KHVKx
```

### Step 5: Deploy

1. Click "Deploy site"
2. Wait 2-3 minutes
3. You'll get a URL like: `https://random-name-123.netlify.app`

### Step 6: Change Site Name (Optional)

1. Go to "Site settings" → "General" → "Site details"
2. Click "Change site name"
3. Enter: `kartikey-portfolio` (or any available name)
4. Your URL becomes: `https://kartikey-portfolio.netlify.app`

### Step 7: Add Custom Domain (Optional)

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration steps

**Netlify gives you:**
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-deployments on Git push
- ✅ Deploy previews
- ✅ 100GB bandwidth/month (free plan)

---

## Part 5: Post-Deployment Steps

### Test Your Deployed Site

1. Visit your deployed URL
2. Test all sections:
   - Navigation works
   - Dark/light mode toggle
   - All links open correctly
   - Contact form sends emails
3. Test on mobile devices

### Test Contact Form

1. Fill out your contact form
2. Click "Send Message"
3. Check your email at `kartikey.picc@gmail.com`
4. If emails don't arrive, check:
   - EmailJS dashboard for delivery logs
   - Environment variables are set correctly
   - Spam/junk folder

### Set Up Continuous Deployment

Now every time you push to GitHub, your site auto-deploys:

```bash
# Make a change to your code
git add .
git commit -m "Update: Added new project"
git push
```

Vercel/Netlify will automatically rebuild and redeploy!

---

## Part 6: Monitoring and Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `public/index.html` in `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

3. Commit and push to deploy

### Vercel Analytics (Built-in)

Enable in Vercel dashboard:
1. Go to your project
2. Click "Analytics" tab
3. Enable Web Analytics (free)

---

## Part 7: Custom Domain Setup

### Buy a Domain

Popular domain registrars:
- [Namecheap](https://namecheap.com) - ~$10/year
- [Google Domains](https://domains.google) - ~$12/year
- [GoDaddy](https://godaddy.com) - ~$15/year

Recommended domain: `kartikeychandrashukla.com`

### Configure DNS (Vercel)

Add these DNS records in your domain registrar:

**A Records:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Configure DNS (Netlify)

**CNAME Record:**
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
```

**A Record:**
```
Type: A
Name: @
Value: 75.2.60.5
```

---

## Troubleshooting

### Issue: Build Fails

**Solution:**
- Check build logs for errors
- Run `npm run build` locally first
- Ensure all dependencies are in `package.json`
- Check Node version (use v18 or higher)

### Issue: Environment Variables Not Working

**Solution:**
- Variable names must start with `REACT_APP_`
- Redeploy after adding variables
- Check variables are set for Production environment

### Issue: Contact Form Not Sending Emails

**Solution:**
- Verify environment variables are correct
- Check EmailJS dashboard for errors
- Test EmailJS template separately
- Check browser console for errors

### Issue: 404 on Page Refresh

**Solution:**
Create `public/_redirects` file (Netlify):
```
/*    /index.html   200
```

Or `vercel.json` (Vercel):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Issue: Images Not Loading

**Solution:**
- Ensure images are in `public` folder
- Use `%PUBLIC_URL%/image.jpg` in HTML
- Use `process.env.PUBLIC_URL + '/image.jpg'` in JSX

---

## Deployment Checklist

Before launching:
- [ ] All links work correctly
- [ ] Contact form sends emails
- [ ] Mobile responsive design works
- [ ] Dark/light mode toggle works
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Favicon displays correctly
- [ ] Loading speed is good (test with Lighthouse)
- [ ] All certificate links work
- [ ] Social media links are correct

---

## Next Steps

1. **Share your portfolio:**
   - Add to LinkedIn profile
   - Add to GitHub profile README
   - Share on Twitter/X

2. **Update regularly:**
   - Add new projects
   - Update skills
   - Add blog posts (future)

3. **Monitor performance:**
   - Use Lighthouse for audits
   - Check analytics weekly
   - Monitor email delivery

---

## Quick Reference

### Vercel CLI (Optional)

Install Vercel CLI for terminal deployment:

```bash
npm i -g vercel
vercel login
vercel
```

### Netlify CLI (Optional)

Install Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **React Deployment:** [create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)

---

**Your portfolio is now live! 🚀**

Share your live URL: `https://your-site.vercel.app`

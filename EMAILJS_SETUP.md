# EmailJS Setup Guide

This guide will help you set up EmailJS to receive contact form submissions directly to **kartikey.picc@gmail.com**.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to the **Email Services** tab
2. Click **"Add New Service"**
3. Choose **Gmail** as your email service
4. Click **"Connect Account"** and sign in with your Gmail account (kartikey.picc@gmail.com)
5. Once connected, you'll get a **Service ID** (e.g., `service_abc123`)
6. **Save this Service ID** - you'll need it later

## Step 3: Create Email Template

1. Go to the **Email Templates** tab
2. Click **"Create New Template"**
3. Set up your template with these variables:

```
To: {{to_email}}
From: {{from_name}} <{{from_email}}>
Subject: Portfolio Contact: {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Click **"Save"** and note the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `aBcD1234eFgH5678`)
3. Copy this key

## Step 5: Update Your Project

### Option A: Using Environment Variables (Recommended for Production)

1. Create a `.env` file in the project root:
```bash
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=aBcD1234eFgH5678
```

2. Update [Contact.tsx](src/components/Contact.tsx) lines 88-90 to use environment variables:
```typescript
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';
```

3. Restart the development server:
```bash
npm start
```

### Option B: Direct Configuration (Quick Testing)

1. Open [src/components/Contact.tsx](src/components/Contact.tsx)
2. Replace lines 88-90 with your actual values:
```typescript
const serviceId = 'service_abc123'; // Your Service ID
const templateId = 'template_xyz789'; // Your Template ID
const publicKey = 'aBcD1234eFgH5678'; // Your Public Key
```

## Step 6: Test Your Contact Form

1. Make sure your development server is running (`npm start`)
2. Navigate to the Contact section
3. Fill out the form and click "Send Message"
4. Check your inbox at **kartikey.picc@gmail.com** for the email

## Troubleshooting

### Error: "Oops! Something went wrong"

**Common causes:**
- Service ID, Template ID, or Public Key is incorrect
- EmailJS account not verified
- Gmail service not properly connected
- Check browser console for detailed error messages

### Emails not arriving

- Check spam/junk folder
- Verify template variables match: `from_name`, `from_email`, `subject`, `message`, `to_email`
- Ensure Gmail service is active in EmailJS dashboard
- Check EmailJS dashboard for delivery logs

### Development vs Production

- For production deployment (Vercel, Netlify, etc.), add environment variables in your hosting platform's settings
- Never commit `.env` file to Git (it's already in `.gitignore`)
- Use `.env.example` as a template for required variables

## Free Tier Limits

EmailJS Free Plan includes:
- 200 emails per month
- Sufficient for portfolio contact forms
- Upgrade to paid plan if you need more

## Alternative: Fallback to Direct Email

If EmailJS setup fails, users can still click the email address to open their default email client.

## Support

For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)

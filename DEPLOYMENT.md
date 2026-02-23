# Deployment Guide

Two main options for deploying your Accio landing page:

## 🚀 Option 1: Vercel (Recommended)

Vercel is the optimal choice for Next.js applications and provides the best experience.

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/accio-software-solutions.git
   git push -u origin main
   ```

2. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Connect Repository**
   - Click "New Project"
   - Select your `accio-software-solutions` repository
   - Click "Import"

4. **Configure Project**
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Leave Environment Variables empty (for now)

5. **Deploy**
   - Click "Deploy"
   - Your site is live! 🎉

6. **Add Custom Domain** (Optional)
   - In Vercel dashboard, go to Settings > Domains
   - Add your domain (e.g., acciosolutions.com)
   - Update DNS records at your domain provider

### Connect Contact Form (Optional)

1. **Set up Resend**
   - Go to [resend.com](https://resend.com)
   - Create account and get API key

2. **Add Environment Variable**
   - In Vercel dashboard: Settings > Environment Variables
   - Add: `RESEND_API_KEY` = your_api_key
   - Redeploy

3. **Update Contact API**
   - Uncomment Resend code in `app/api/contact/route.ts`
   - Replace email addresses with your own

---

## 📄 Option 2: GitHub Pages (Static Export)

Better for simple, static content. Contact form requires external service.

### Prerequisites
- GitHub account
- Repository already created

### Steps

1. **Update next.config.js** (Already done)
   ```js
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/accio-software-solutions',
     trailingSlash: true,
   }
   ```

2. **Create GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Configure GitHub Pages**
   - Go to Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Save

4. **Deploy**
   - Push code to GitHub
   - GitHub Actions automatically builds and deploys
   - Your site is live at `https://yourusername.github.io/accio-software-solutions`

### Setup Contact Form with Formspree

Since API routes don't work with GitHub Pages, use Formspree:

1. **Create Formspree Account**
   - Go to [formspree.io](https://formspree.io)
   - Sign up

2. **Create Form**
   - New form > Add your email
   - Get your form ID

3. **Update Contact Component**
   Edit `components/sections/Contact.tsx`:
   ```tsx
   const formspreeId = 'YOUR_FORMSPREE_ID'
   
   const onSubmit = async (data: ContactFormData) => {
     setIsSubmitting(true)
     
     const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
       method: 'POST',
       headers: { 'Accept': 'application/json' },
       body: JSON.stringify({
         name: data.name,
         email: data.email,
         company: data.company,
         message: data.message,
       })
     })
     
     if (response.ok) {
       setSubmitStatus('success')
       reset()
     } else {
       setSubmitStatus('error')
     }
     setIsSubmitting(false)
   }
   ```

4. **Deploy**
   - Push changes
   - GitHub Actions handles the rest

---

## 🔄 Updating Your Site

### With Vercel
1. Make changes locally
2. Push to GitHub
3. Vercel automatically deploys

### With GitHub Pages
1. Make changes locally
2. Push to GitHub
3. GitHub Actions workflow runs automatically
4. Site updates in ~1 minute

---

## 📊 Monitoring & Analytics (Optional)

### Vercel Analytics
Free with Vercel:
- Go to Analytics in dashboard
- See real user metrics

### Custom Analytics
Add PostHog or Plausible:
```tsx
// In app/layout.tsx
import { PostHogProvider } from 'posthog-js/react'

export default function RootLayout() {
  return (
    <PostHogProvider apiKey="YOUR_KEY">
      {/* content */}
    </PostHogProvider>
  )
}
```

---

## 🆘 Troubleshooting

### Vercel: "Build failed"
- Check build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Check for environment variables needed

### GitHub Pages: "Site not updating"
- Check Actions tab for workflow status
- Ensure push was to `main` branch
- Clear browser cache (Ctrl+Shift+Delete)

### Contact Form: "Email not received"
- Check spam folder
- Verify API key (Vercel) or Form ID (Formspree)
- Test with browser console (F12 > Network tab)

---

## 🎯 Performance Tips

1. **Image Optimization**
   - Use `next/image` for all images
   - Compress images before upload
   - Use WebP format

2. **Code Splitting**
   - Use `dynamic()` for optional components
   - Tree-shake unused code

3. **Caching**
   - Vercel handles cache automatically
   - GitHub Pages: Use `.htaccess` for cache headers

4. **Monitoring**
   - Check Lighthouse scores
   - Monitor Core Web Vitals
   - Test on slow connections

---

## 🔐 Security Checklist

- [ ] Set up HTTPS (automatic on both)
- [ ] Add security headers (Vercel auto)
- [ ] Validate form input (implemented)
- [ ] Use environment variables for secrets
- [ ] Regular dependency updates
- [ ] Monitor for vulnerabilities: `npm audit`

---

Need help? Check the README.md or create an issue on GitHub!

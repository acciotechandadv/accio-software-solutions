# Accio Software Solutions - Landing Page

A modern, monochrome landing page for Accio Software Solutions built with Next.js, React, and Tailwind CSS.

## 🎯 Features

- **Modern Design**: Clean, bold monochrome aesthetic
- **Fully Responsive**: Mobile-first design approach
- **Fast Performance**: Next.js optimization, fast load times
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Contact Form**: Integrated with validation
- **Portfolio Showcase**: Display your 4 projects
- **Team Section**: Highlight team members and expertise
- **Dark Mode Ready**: Easy to add if needed

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Email**: Resend (when deploying to Vercel)
- **Hosting**: Vercel (recommended) or GitHub Pages

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/accio-software-solutions.git
cd accio-software-solutions

# Install dependencies
npm install
# or
yarn install
```

## 🚀 Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
accio-software-solutions/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # SEO sitemap
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx           # Top navigation
│   │   └── Footer.tsx           # Footer
│   └── sections/
│       ├── Hero.tsx             # Hero section
│       ├── Services.tsx         # Services showcase
│       ├── Portfolio.tsx        # Project portfolio
│       ├── HowItWorks.tsx       # Process section
│       ├── Team.tsx             # Team profiles
│       └── Contact.tsx          # Contact form
├── styles/
│   └── globals.css              # Global styles & Tailwind
├── public/
│   └── robots.txt               # SEO robots file
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js configuration
└── package.json
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and offers the best performance:

1. Push your code to GitHub
2. Connect your repo to [Vercel](https://vercel.com)
3. Deploy with one click
4. Add your domain

Benefits:
- ✅ Full API support (contact form works)
- ✅ Automatic deployments
- ✅ Zero config
- ✅ Free tier available

### Option 2: GitHub Pages (Static Export)

For GitHub Pages, we've configured static export:

```bash
# Build for GitHub Pages
npm run build
```

Then enable GitHub Pages in your repository settings to deploy from the `/out` directory.

**Note**: Contact form API won't work. Use [Formspree](https://formspree.io) or [Basin](https://basinapp.io) instead.

### Option 3: Self-Hosted / Other Platforms

```bash
npm run build
npm start
```

## 🔧 Configuration

### Update Package Name

In `package.json`, update:
- `name`: Your project name
- `description`: Your project description

### Update Site Metadata

In `app/layout.tsx`:
- Update title, description, keywords
- Add your domain in OpenGraph config
- Update author information

### Contact Form

Currently set up for Vercel. For other platforms:

1. **Formspree**: Update form endpoint in `Contact.tsx`
2. **Basin**: Add your endpoint
3. **Custom Backend**: Update `/api/contact` route

### Team Information

Edit `components/sections/Team.tsx` to update:
- Team member names and roles
- Bio and specialty information
- Social media links

### Portfolio Projects

Edit `components/sections/Portfolio.tsx` to:
- Add your project titles and descriptions
- Update tags and categories
- Add links to project repositories/demos

## 📊 Color Scheme (Monochrome)

- **Primary**: Black (#000000)
- **Background**: White (#ffffff)
- **Muted Text**: Gray (#666666)
- **Borders**: Light Gray (#e5e5e5)

To customize, edit `tailwind.config.ts`:

```ts
colors: {
  accent: '#000000',
  muted: '#666666',
  border: '#e5e5e5',
}
```

## 🎨 Typography

The design uses system fonts for maximum performance:
- Headings: Bold, 700-900 weight
- Body: Regular, 400 weight
- All text is accessible and readable

## 📱 Responsive Design

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

## ✅ Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## 🔒 Privacy & Security

- No tracking by default
- GDPR ready
- No external analytics (optional: add Vercel Analytics)
- Contact form data is not stored

## 📝 SEO

- Meta tags for all pages
- Open Graph support
- Structured data with JSON-LD
- Sitemap generation
- Mobile optimized
- Core Web Vitals optimized

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Contact form not working
- Ensure you're using Vercel or a platform with serverless function support
- For GitHub Pages, switch to Formspree

## 📞 Support

For questions or issues, check:
1. Next.js docs: [nextjs.org](https://nextjs.org)
2. Tailwind docs: [tailwindcss.com](https://tailwindcss.com)
3. Create an issue on GitHub

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Accio Software Solutions

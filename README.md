# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, JavaScript, and TailwindCSS. Features dynamic content loading, dark mode, smooth animations, and a clean, professional design.

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (recommended for proper functionality)

### Running the Portfolio

#### Option 1: Using Python (Recommended)

If you have Python installed:

```bash
# Navigate to the project directory
cd /path/to/your/portfolio

# Python 3
python -m http.server 8000

# Python 2 (if needed)
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

#### Option 2: Using Node.js

If you have Node.js installed:

```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to the project directory
cd /path/to/your/portfolio

# Start the server
http-server -p 8000
```

Then open your browser and go to: `http://localhost:8000`

#### Option 2b: Using npx (No Installation Required)

If you have Node.js installed but don't want to install packages globally:

```bash
# Navigate to the project directory
cd /path/to/your/portfolio

# Run HTTP server with npx (no installation needed)
npx http-server -p 8000

# Alternative: using serve package
npx serve -s . -l 8000
```

Then open your browser and go to: `http://localhost:8000`

#### Option 3: Using PHP

If you have PHP installed:

```bash
# Navigate to the project directory
cd /path/to/your/portfolio

# Start PHP built-in server
php -S localhost:8000
```

Then open your browser and go to: `http://localhost:8000`

#### Option 4: Using Live Server (VS Code)

If you're using VS Code:

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── blogs.html          # Blog listing page
├── styles.css          # Custom CSS styles
├── data/
│   └── content.json    # Portfolio content and configuration
├── scripts/
│   ├── main.js         # Main JavaScript for portfolio functionality
│   └── blogs.js        # JavaScript for blog page
├── README.md           # This file
├── LICENSE             # License file
└── .gitignore         # Git ignore rules
```

## ⚙️ Configuration

### Updating Portfolio Content

All portfolio content is managed through the `data/content.json` file. You can customize:

- **Personal Information**: Name, title, description, contact details
- **Hero Section**: Title, subtitle, profile image, call-to-action buttons
- **About Section**: Personal description and background
- **Skills**: Technical skills and technologies
- **Projects**: Portfolio projects with descriptions, tags, and links
- **Experience**: Work history with details and highlights
- **Education**: Academic background
- **Contact Information**: Various contact methods
- **Social Links**: GitHub, LinkedIn, Dev.to, etc.
- **Blog Posts**: Featured blog articles

### Customizing Styles

The website uses TailwindCSS for styling with custom CSS in `styles.css`. Key features:

- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Automatic system preference detection with manual toggle
- **Smooth Animations**: Scroll-based reveal animations
- **Modern UI**: Clean, professional design with hover effects

## 🎨 Features

- ✅ **Responsive Design**: Works on all device sizes
- ✅ **Dark Mode**: System preference detection + manual toggle
- ✅ **Dynamic Content**: JSON-based content management
- ✅ **Smooth Animations**: Intersection Observer-based reveals
- ✅ **SEO Optimized**: Meta tags and Open Graph support
- ✅ **Fast Loading**: CDN-based TailwindCSS, optimized assets
- ✅ **Accessibility**: ARIA labels, keyboard navigation
- ✅ **Blog Integration**: Separate blog page with external links

## 🔧 Development

### Making Changes

1. **Content Updates**: Edit `data/content.json`
2. **Styling Changes**: Modify `styles.css` or TailwindCSS classes
3. **Functionality Updates**: Edit `scripts/main.js` or `scripts/blogs.js`
4. **Layout Changes**: Modify `index.html` or `blogs.html`

### Adding New Sections

To add new sections to the portfolio:

1. Add the section HTML to `index.html`
2. Add corresponding data structure to `content.json`
3. Create a render function in `main.js`
4. Call the render function in the `init()` function

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `/` (root directory)
4. Deploy automatically on git push

### Vercel

1. Import your GitHub repository to Vercel
2. No build configuration needed for static sites
3. Deploy automatically on git push

## 🐛 Troubleshooting

### Common Issues

**Content not loading:**
- Ensure you're running a local server (not opening file:// directly)
- Check browser console for errors
- Verify `content.json` is valid JSON

**Images not displaying:**
- Check image URLs in `content.json`
- Ensure images are accessible from your domain
- Use absolute URLs for external images

**Styling issues:**
- Clear browser cache
- Check if TailwindCSS CDN is loading
- Verify custom CSS in `styles.css`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, pull requests are welcome!

---

**Built with ❤️ by Aminul Islam Saqib**
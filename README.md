# Professional Developer Portfolio

A modern, high-performance, responsive, and easily editable software engineer portfolio website.

## 🚀 How to Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open the displayed URL (typically `http://localhost:5173`) in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be in the `dist/` directory, ready to deploy to Netlify, Vercel, or any static host.

---

## 🌐 Deploying to Netlify (3 Easy Options)

The project is fully configured for Netlify with `netlify.toml`, `public/_redirects`, custom `404.html`, and serverless **Netlify Forms** support.

### Option 1: Git Integration (Recommended - Automatic Deployments)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select your repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**! Every git push will now trigger an automated live deployment.

### Option 2: Netlify Drop (Instant Drag & Drop - No CLI or Git needed)
1. Run `npm run build` locally.
2. Go to [Netlify Drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the dropzone in your browser.
4. Your site will be online with a live URL immediately!

### Option 3: Netlify CLI
Run directly in your terminal:
```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

### 📩 Form Submissions (Netlify Forms)
The contact form on `contact.html` is configured with Netlify Forms (`data-netlify="true"`). When visitors submit a message on your live Netlify site:
- Submissions automatically show up in your **Netlify Dashboard > Forms**.
- You can enable instant email or Slack notifications under **Site configuration > Forms > Form notifications**.
- When running locally, it gracefully opens the user's default email client.

---

## ⚡ How to Edit Your Portfolio

The entire portfolio is managed from a single centralized configuration file:

📁 **[`portfolio-data.js`](./portfolio-data.js)**

You **do not** need to edit HTML or CSS to change your details. Simply open `portfolio-data.js` and modify:

| Section | Keys in `portfolio-data.js` | What it Controls |
| :--- | :--- | :--- |
| **Personal Info** | `personal.name`, `personal.title`, `personal.tagline`, `personal.location`, `personal.availability` | Name, header brand, hero headlines, status pill, document title |
| **Profile Photo** | `personal.avatar` | Path to your avatar image (e.g. `./assets/profile.jpg`) |
| **Resume URL** | `personal.resumeUrl` | Links in the header and hero (e.g. `./assets/resume.pdf` or Google Drive URL) |
| **Impact Stats** | `personal.stats` | Metric counters under the hero section |
| **Social Links** | `socialLinks` | GitHub, LinkedIn, Twitter/X, and Email icons & URLs |
| **Bio & About** | `about.paragraphs`, `about.principles`, `about.quickFacts` | Narrative bio, core philosophy cards, and quick facts |
| **Skills** | `skills.categories` | Categorized tech stack tabs, progress indicators, and skill tags |
| **Experience** | `experience.roles` | Work timeline, company links, metrics, and tech badges |
| **Education** | `education.degrees`, `education.certifications` | University degrees, GPA/honors, and industry certifications with verify URLs |
| **Projects** | `projects.items` | Showcase project cards, screenshots, live demo links, and GitHub links |
| **Capabilities** | `services.items` | Specialized services / consulting areas |
| **Contact Info** | `contact.email`, `contact.phone`, `contact.location`, `contact.calendarUrl` | Contact cards, Calendly link, and copy-email button |

---

## 🖼️ Adding Your Own Images & Resume

- **Profile Picture**: Place your photo in `public/assets/` (e.g. `public/assets/my-photo.jpg`) and set `personal.avatar: "./assets/my-photo.jpg"`.
- **Project Screenshots**: Place images in `public/assets/` and reference them in `projects.items[...].image`.
- **Resume PDF**: Replace `public/assets/resume.pdf` with your own resume or paste an external URL (e.g. Google Drive link).

---

## ✨ Features Included

- **Dark / Light Theme Toggle** with persistence in `localStorage` and system color scheme sync.
- **Zero Hardcoded Duplicates**: All components read directly from `portfolio-data.js`.
- **Interactive Project Filter**: Filter between All, Full-Stack, Cloud / DevOps, and Open Source.
- **Working Contact Form**: Interactive input validation, loading state, and toast notification confirmation.
- **One-Click Email Copy**: Instant copy with visual feedback.
- **Live Local Time Widget**: Real-time IST clock and response time commitment.
- **Mobile Responsive**: Custom hamburger menu drawer and fluid layout down to 360px widths.
- **Accessible & SEO Optimized**: Semantic HTML5, ARIA labels, OpenGraph tags, and keyboard focus states.

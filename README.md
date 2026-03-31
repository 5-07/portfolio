# Muzaina Munir — Portfolio

An editorial art gallery-themed portfolio built with Next.js, Framer Motion, GSAP, and Lenis.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---


```
/public/
  /images/
    your-photo.jpg          ← About section portrait
    project-01.jpg          ← Project screenshots
    project-02.jpg
    /art/
      artwork-001.jpg       ←  artwork
      artwork-002.jpg
  /videos/
    hero-bg.mp4             ← Optional: looping video for hero
```

### Hero Video (Optional)
Download a free abstract art loop from [Pexels](https://www.pexels.com/search/videos/abstract%20art/) and save as `/public/videos/hero-bg.mp4`. The hero still looks great without it (gradient fallback is included).



## 🎨 Color Palette

| Name | Hex | Used for |
|------|-----|----------|
| Linen | `#FFF9F3` | Main background |
| Latte | `#DBC4A5` | Borders, accents |
| Clockwork | `#72583E` | Primary accent |
| Cedar | `#7C7960` | Secondary accent |
| Deep Olive | `#44422D` | Ongoing section bg |
| Café Noir | `#443223` | Dark sections, text |
| Mauve | `#755151` | Contact section bg |
| Weathered | `#A08670` | Body text |

---

## 🌐 Deploy to Vercel

### Option A — Vercel CLI (recommended)
```bash
npm install -g vercel
vercel
```
Follow the prompts. Done ✓

### Option B — GitHub + Vercel Dashboard
1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — Vercel auto-detects Next.js

---



---

## 📋 All Terminal Commands

```bash
# Install
npm install

# Dev
npm run dev

# Build (test before deploy)
npm run build
npm run start

# Deploy
npx vercel

# Deploy to production
npx vercel --prod
```

---

Built with 🎨 by Muzaina Munir

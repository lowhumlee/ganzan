# 御神籤 Omikuji — Ganzan Daishi Hyakusen

A beautiful, interactive Omikuji fortune-telling web app based on the **Ganzan Daishi Hyakusen** (元三大師百籤) — the One Hundred Sacred Lots traditionally attributed to Ryōgen (912–985), the Heian period Tendai monk posthumously known as Ganzan Daishi.

## ✨ Features

- 🎋 **Authentic Ganzan Daishi Hyakusen**: All 8 traditional fortune categories with weighted distribution matching the original 100-lot sequence
- 📜 **Classical Japanese verses** with romanized readings and English translations
- 🌸 **Life aspects**: Fortune predictions for Wish, Travel, Love, Health, Work, Study, Wealth, and Lost Items
- 🎴 **Animated omikuji slip** that unfolds like the real paper fortune
- 🏮 **Traditional imagery**: Torii gate, bamboo cylinder with shaking animation, cherry blossom petals
- 📱 **Fully responsive** — works on mobile and desktop
- 🔗 **Web Share API** — share your fortune on social media

## 🔮 Fortune Categories (from best to worst)

| Japanese | Romaji | English |
|----------|--------|---------|
| 大吉 | Dai-kichi | Great Blessing |
| 吉 | Kichi | Blessing |
| 中吉 | Chū-kichi | Middle Blessing |
| 小吉 | Shō-kichi | Small Blessing |
| 半吉 | Han-kichi | Half Blessing |
| 末吉 | Sue-kichi | Future Blessing |
| 末小吉 | Sue-shō-kichi | Future Small Blessing |
| 凶 | Kyō | Misfortune |

## 🚀 Deploy to GitHub Pages

### Method 1: GitHub Pages (Recommended — Free, No Build Step)

1. **Fork or create** a new GitHub repository
2. **Upload all files** to the repository root:
   - `index.html`
   - `style.css`
   - `app.js`
   - `fortunes.js`
3. Go to **Settings → Pages**
4. Under **Source**, select `Deploy from a branch`
5. Select **`main`** branch and **`/ (root)`** folder
6. Click **Save**
7. Your app will be live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

### Method 2: GitHub CLI

```bash
# Clone/create your repo
git clone https://github.com/YOUR-USERNAME/omikuji-app.git
cd omikuji-app

# Copy all files into the repo
cp path/to/omikuji-files/* .

# Commit and push
git add .
git commit -m "🎋 Initial Omikuji app"
git push origin main

# Enable GitHub Pages via GitHub UI or CLI
gh repo edit --homepage "https://YOUR-USERNAME.github.io/omikuji-app"
```

### Method 3: Netlify (Drag & Drop)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag the folder containing all 4 files onto the Netlify dashboard
3. Your site is instantly live with a random URL (e.g. `amazing-tesla-123.netlify.app`)
4. Optionally set a custom domain

### Method 4: Vercel

```bash
npm install -g vercel
cd omikuji-app-folder
vercel --prod
```

## 📁 File Structure

```
omikuji-app/
├── index.html     # Main HTML with app structure
├── style.css      # Wabi-sabi refined aesthetic styles
├── fortunes.js    # All fortune data (Ganzan Daishi Hyakusen)
├── app.js         # App logic, animations, state management
└── README.md      # This file
```

## 🏛️ Historical Background

The **Ganzan Daishi Hyakusen** (元三大師百籤) is the omikuji sequence most commonly used in Japanese Buddhist temples. It is attributed to **Ryōgen** (912–985), the Tendai monk posthumously known as *Jie Daishi* (慈恵大師) or *Ganzan Daishi* (元三大師).

According to legend, these 100 oracular verses were revealed to him by the Bodhisattva **Avalokiteśvara (Kannon)**. The system was popularized during the Edo period by the monk Tenkai (1536–1643), who rediscovered the verses at Togakushi Shrine in Nagano Prefecture.

The sequence contains 100 prophetic five-character quatrains (*ge-mon*), organized across fortune levels from 大吉 (Great Blessing) to 凶 (Misfortune), covering all major life domains.

## 🎋 How to Use

1. Open the app in a browser
2. **Focus your mind** on your question or concern
3. Click **"Draw Your Omikuji"** (籤を引く)
4. Watch the bamboo cylinder shake and release your lot
5. **Read your fortune** — the classical verse, its English translation, and guidance for each life aspect
6. Follow the traditional advice: if your fortune is **bad (凶)**, tie it at the shrine; if **good**, keep it with you

## 🛠️ Technical Notes

- **Pure HTML/CSS/JS** — no frameworks, no build step, no dependencies
- Fonts loaded from Google Fonts (Noto Serif JP, Cormorant Garamond, Noto Sans JP)
- Weighted random selection matches authentic Ganzan Daishi Hyakusen distribution
- Web Share API with clipboard fallback

## 📜 License

MIT License — free to use, modify, and distribute.

---

*"Even the one who draws misfortune need not despair. The true teaching of the oracle lies not in the label but in the guidance it offers for the road ahead."*

元三大師百籤 — Ganzan Daishi Hyakusen

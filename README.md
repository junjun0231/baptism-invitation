# Oriane Dara N. Bobis's Baptism & 1st Birthday — Invitation

A soft, watercolor spring-garden invitation built with Next.js (App Router), React and
Tailwind CSS. Blush-pink background, cherry-blossom corners, gently fluttering butterflies,
hand-drawn garden fairies, drifting petals and twinkling fairy dust — all as inline SVG
with no image assets.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Build and preview the production version:

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Keep the default settings (Framework: **Next.js**) and click **Deploy**.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Customize

- **`config/invitation.js`** — the single source of editable text: opening line, the hero
  `titleLines` (each item renders on its own line), date, ceremony and reception details
  (venue, time, address, map query), the portrait photo
  (`photo.src`, blank shows the designed placeholder frame), the `sponsors` Ninong & Ninang
  entries (`photo` points at the list images in `public/`, `names` power the alt text and
  text fallback), the background `music` (set `youtubeId` for a YouTube track or `src` for a
  local file; leaving both blank hides the floating music toggle), RSVP deadline and
  thank-you line.
- **`tailwind.config.js`** — the blush/rose/burgundy/sage/gold color palette, the script and
  serif font families, soft shadows, the gold "shine" gradient and every keyframe/animation
  (flutter, bob, wing, twinkle, drift, fall, tick, shimmer).
- **`app/layout.js`** — the Google fonts (Pinyon Script + Cormorant Garamond).
- **`app/globals.css`** — the watercolor background wash, text selection color and
  reduced-motion handling.
- **`components/Reveal.js`** — the scroll-reveal wrapper (fade / rise / de-blur) used for
  the staged section entrances.
- **`components/Portrait.js`** — the portrait photo frame (or empty placeholder) with the
  perched fairy and blossom corners. To show a real photo, add the image to `public/` and set
  `photo.src` in the config.
- **`components/Sponsors.js`** — the Ninong & Ninang list.
- **`components/BackgroundMusic.js`** — the background music with the floating toggle button
  (bottom-right). Plays a hidden YouTube player when `music.youtubeId` is set, or a local
  audio file for `music.src`; renders nothing while both are blank. It tries to autoplay with
  sound, and if the browser blocks that it plays muted and unmutes on the first interaction.
- **`components/decor/`** — all inline SVG decorations: `Blossom` (the shared cherry
  blossom, plus the `BlossomIcon` standalone variant), `CornerFlowers`, `Butterfly`,
  `Fairy`, `Sparkles`, `Petals`, `FairyDust`, `Divider`, `Monogram` and `PaperTexture`.

## Accessibility & performance

- All decorative SVG is `aria-hidden`.
- Visible gold focus rings throughout.
- `prefers-reduced-motion` disables every animation and shows all revealed content
  immediately.
- Motion uses only `transform`/`opacity`; ambient petals and dust are capped at a few dozen
  nodes.
- Content is held to a reading width under 640px and ships no image downloads.

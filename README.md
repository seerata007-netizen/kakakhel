# Kakakhel Welfare Association

A Next.js App Router website for a Pakistan-based welfare association. Includes English/Urdu translation with remembered preference, right-to-left Urdu layout, responsive mobile navigation, accessible donation amount selection, and separate About, Programs, Activities, Donations, Transparency, and Contact pages. The homepage contains only an introduction and three shortcuts.

## Development

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
```

Next.js exports the production site to `out/`, the directory configured in `.openai/hosting.json`. Preview the export with `python3 -m http.server 3000 --directory out`. `npm start` serves the exported site locally; `next start` is not used with static exports.

## Content and payments

Page content is in `app/page.js` and the `app/about`, `app/programs`, `app/activities`, `app/donate`, `app/transparency`, and `app/contact` routes; reusable language, navigation, and donation components are in `components/`. Styles are in `app/globals.css`.

Donation amounts are interactive but payments are not connected. Official bank details, Easypaisa/JazzCash information, contact channels, registration details, original logo, and verified activity photographs are still needed. Help requests are not submitted or stored. The vector emblem is a redraw based on the supplied logo reference. No stock photographs are presented as association activities.

## Browser checks

```sh
npx playwright install chromium
python3 -m http.server 3000 --directory out
npm run test:e2e
```

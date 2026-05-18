# 2026 Portfolio

A very plain personal portfolio for Matt R., inspired by the small-web document style of nat.org.

The site is intentionally tiny: no framework, no build step, no package manager, no external scripts, and no generated assets required.

## Files

```text
index.html      visible page content and hidden PDF panel
style.css       nat.org-style page rules plus namespaced Konami key rail
script.js       Konami key rail and PDF panel behavior
portfolio.pdf   placeholder PDF
```

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python3 -m http.server 8000
```

## Content To Replace

- Replace bracketed homepage placeholders in `index.html`.
- Replace `portfolio.pdf` with the real portfolio PDF, keeping the same filename unless the link is updated.
- Add final contact details only after they are approved for public use.

## Easter Egg

Type the Konami code: `↑ ↑ ↓ ↓ ← → ← → B A`.

Correct keys flash at the bottom of the page. Completing the sequence opens the hidden PDF panel.

## GitHub Pages

This site is ready to publish from the repository root on the `main` branch.

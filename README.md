# 2026 Portfolio

A very plain personal index for Matt Reynolds, inspired by the small-web document style of nat.org.

The site is intentionally tiny: no framework, no build step, no package manager, no external scripts, and no generated assets required.

## Files

```text
index.html      visible page content and hidden PDF panel
style.css       nat.org-style page rules plus namespaced Konami key rail
script.js       Konami key rail and PDF panel behavior
favicon.svg     site favicon
portfolio.pdf   portfolio PDF
```

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python3 -m http.server 8000
```

## Easter Egg

Type the Konami code: `↑ ↑ ↓ ↓ ← → ← → B A`.

Correct keys flash at the bottom of the page. Completing the sequence opens the hidden PDF panel.

## GitHub Pages

This site is ready to publish from the repository root on the `main` branch.

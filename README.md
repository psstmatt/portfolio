# 2026 Portfolio

A very plain personal portfolio for Matt R., inspired by the small-web document style of nat.org.

The normal page is intentionally tiny: no framework, no build step, no package manager, and no generated assets required. The hidden Konami code effect loads Three.js from a pinned CDN module URL.

## Files

```text
index.html      visible page content and hidden effect shell
style.css       nat.org-style page rules plus namespaced Konami effects
script.js       Konami key rail, shader panel, and PDF link behavior
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

Correct keys flash at the bottom of the page. Completing the sequence opens the hidden PDF panel and starts the shader background when WebGL is available.

## GitHub Pages

This site is ready to publish from the repository root on the `main` branch.

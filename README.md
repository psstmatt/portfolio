# Matt Reynolds Portfolio

Static portfolio rebuild using the reference structure: fixed identity header, horizontal project timeline, project details, About overlay, and sparse footer links.

## Stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- No build step
- Local temporary image assets mapped from the reference rail

## Files

```text
index.html   page structure, metadata, About copy, links
style.css    layout, timeline, overlay, cursor
script.js    canonical project data and interactions
favicon.svg  browser icon
```

## Interaction

- Header shows `Matt Reynolds` and the active project year.
- Header nav shows `About`, `X`, and `TikTok`.
- Project data lives in one canonical array in `script.js`.
- The horizontal timeline supports wheel, drag, click/tap, and arrow-key navigation.
- About opens as a full-screen overlay and includes Email, X, and TikTok links.
- Media slots use local temporary image assets mapped from the reference rail.

## Validation

```sh
tidy -q -e index.html
node --check script.js
xmllint --noout favicon.svg
git diff --check
```

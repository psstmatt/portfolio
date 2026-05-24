# Matt Reynolds Portfolio Prototype

A greenfield static prototype for a sketch-inspired, mobile-first horizontal portfolio timeline.

## Stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- No build step
- No package manager
- Hardcoded project data

## Files

```text
index.html       page structure and metadata
style.css        visual system, device frames, responsive layout
script.js          hardcoded project data and interaction state
favicon.svg        simple browser icon
assets/avatar/     local header avatar
assets/downloads/  downloadable resume and portfolio PDFs
assets/favicons/   company favicon assets for project identification
```

## Interaction

- The first screen is the timeline: a sparse sketch rail with device previews.
- Horizontal pan-and-snap centers one active project at a time.
- Rainbow thread paths animate toward the selected project and also act as progress cues.
- A bottom sheet shows the selected project metadata and expands for context.
- Initial focus lands on the Meta AI app node.

## Content Note

Project role and date ranges are based on `Profile.pdf`. Project nodes use the public-shareable company/project list supplied by Matt, with concise one-line copy only. TikTok is rendered as a confidential teaser with no project specifics.

Company favicons are third-party trademarks used only to identify employer chapters. Full logo SVGs from the earlier pass are retained as source assets, but the rendered rail now uses favicons for consistency. See `assets/favicons/README.md`.

## Local Preview

```sh
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

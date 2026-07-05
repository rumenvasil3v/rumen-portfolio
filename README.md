# Rumen Vasilev — Portfolio

A cinematic, space-themed personal portfolio. A Three.js rocket travels through a
field of glowing star waypoints; each waypoint opens a typewriter info window
covering a stage of my background — cybersecurity, AI/robotics, and the space
industry.

## Stack

- Plain HTML + CSS + vanilla JavaScript — no framework, no build step.
- [Three.js r128](https://threejs.org/) loaded from a CDN for the 3D rocket.
- Web Audio API for synthesized engine rumble, countdown beeps, and ambient music.

## Files

| File         | Purpose                                             |
|--------------|-----------------------------------------------------|
| `index.html` | Page markup and script/stylesheet references.       |
| `style.css`  | All styling (layout, HUD, info window, animations). |
| `script.js`  | 3D scene, flight state machine, content, audio.     |

## Run locally

It's a static site, so just open `index.html` in a browser. For a local server
(recommended, so relative paths and audio behave consistently):

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Hosted as a static site on GitHub Pages. Any push to the default branch updates
the live page.

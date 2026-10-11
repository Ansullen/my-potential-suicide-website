# My Potential Suicide, Band Website

A static, slick punk-styled website for the band **My Potential Suicide**.
No build step, no framework. Plain HTML/CSS/JS that runs by opening `index.html`
or serving the folder with any static file server.

## Folder structure

```
My Potential Suicide Website/
├── index.html              Homepage
├── pages/
│   ├── music.html           Releases & tracklists
│   ├── shows.html           Upcoming + past show dates
│   ├── about.html           Band story, timeline, members
│   └── contact.html         Contact form + direct email links
├── assets/
│   ├── css/
│   │   └── style.css        All site styling (slick punk theme)
│   ├── js/
│   │   └── main.js          Mobile nav, logo glitch, past-show detection, contact form
│   └── img/
│       └── logo.png         Band logo (used in header, hero, and footer)
└── README.md
```

## Design

- **Look**: black background, off-white paper panels, blood-red accents,
  flat offset drop shadows, a scrolling news ticker, and a faint grain
  overlay, kept straight and aligned rather than tilted or scattered.
- **Fonts**: Anton (headlines), Special Elite (typewriter body text), loaded
  from Google Fonts.
- **Logo**: `assets/img/logo.png` is referenced from every page (header,
  footer, homepage hero) with relative paths, so pages in `pages/` use `../`.

## Editing content

- **Shows**: edit the `<li class="show" data-date="YYYY-MM-DD">` entries in
  `pages/shows.html` (and the homepage's upcoming list). `main.js`
  automatically greys out and labels any show whose date has passed.
- **Releases**: edit the `<article class="card">` blocks in `pages/music.html`
  and the homepage "Latest Drop" section.
- **Contact form**: submits via `mailto:` (no backend/server required). Update
  the `data-mailto` attribute on the form in `pages/contact.html` to change
  the destination address.

## Running locally

Just open `index.html` in a browser, or serve the folder:

```
npx serve .
```

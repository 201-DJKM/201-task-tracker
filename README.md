# TAKE TEN

### Brought to you by:
- Dominic Giacona
- John Rayome  
- Kris Dunning
- Marco Simpliciano  

## What is TakeTen?

Take time to care for yourself today, so that you can have a better tomorrow. Take ten.

No need to fuss over what exercises best suit your exercise needs and timeframe; this web app provides users with a simple, unique, automated list of exercises that are useable in all timeframes. 

Whether users are looking to get up and away from their desk for a 10 minute stretch or planning to complete a 60 minute endurance workout, TakeTen will generate the appropriate exercise set for all.

If you enjoy your favorite TakeTen workout exercise sets over and over! Past workouts are stored in TakeTen's <em>My Workouts</em> feature.

### Version History
- Version 1.0.0: MVP (5/31/22)
- Version 2.0.0: MVP Including 'My Workout' History Storage (6/2/22)

### Requirements
- None, TakeTen is a standard 'vanilla' JavaScript Web App with functionality on all web browsers!

---

## Proposed Revamp Changes

Audit conducted 2026-05-16. Changes are grouped by effort level. Items marked **done** have been applied on a revamp branch.

### Quick Wins

1. **Fix `<a a href="faq.html">` typo on all pages** — duplicate `a` attribute on the FAQ nav link in every HTML file is invalid HTML.
2. **Remove leftover `console.log` in `handleType`** — debug output left in production code (`app.js:105`).
3. **Fix `font-size: 18` missing unit in `workout-page.css`** — unitless font-size is a CSS bug; browsers ignore it.
4. **Replace hardcoded button colors with existing CSS variables** — `#06D6A0` and `#C1F5E7` are hardcoded in `index.css` and `workout-page.css` but the variables `--secondary-green` already exists in `style.css`.
5. **Fix `grid-template-columns` comma syntax bug in `style.css`** — columns are separated by commas instead of spaces, which is invalid CSS. Change to `repeat(4, 1fr)`.
6. **Fix `background-size: auto` on the quote section** — the hero image doesn't fill its container; `cover` is the correct value.
7. **Add `<meta name="description">` to all pages** — missing on every page; helps SEO and social sharing previews.

### Moderate

8. **Wrap all navigation lists in `<nav>`** — the `<ul>` nav sits bare in `<header>` on all 5 pages; wrapping it in `<nav>` adds a proper landmark for screen readers.
9. **Fix invalid HTML in `faq.html` — `<h3>` directly inside `<ul>`** — headings are not valid children of `<ul>`; each Q&A pair should be wrapped in `<li>`.
10. **Fix invalid HTML in workout card rendering** — `renderCurrWorkout()` in `app.js` appends `<h3>` and `<p>` directly into `<ul id="workout-card">`; only `<li>` is valid inside `<ul>`.
11. **Add `for`/`id` linkage to radio button labels** — custom radio buttons in `index.html` and `time-page.html` use `<label>` wrapping without `for`/`id` pairing; screen readers announce these inputs as unlabelled.
12. **Move inline `onclick` handlers to `app.js`** — `index.html` has `onclick="location.href='time-page.html'"` on the Next button and `workout-page.html` has `onclick="location.href='#'"` on the Refresh button; these fire independently of the JS event listeners and create race conditions.
13. **Extract workout data arrays to `js/data.js`** — the four large arrays at the top of `app.js` make the file hard to read; moving them to a dedicated `data.js` separates data from logic.

### Deep Refactors

14. **Convert prototype-based `Workout` constructor to an ES6 `class`** — the `function Workout() {}` + `Workout.prototype.*` pattern is pre-ES6; a `class` is the natural next step at this curriculum level.
15. **Add responsive mobile CSS** — fixed pixel margins (e.g. `margin-left: 150px` on radio buttons) and a fixed `width: 600px` on the workout card break on narrow screens; a media query pass would make the app usable on phones.

---

### Attributions

- Custom Button CSS example provided by :  
  - https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
- Take Ten Logo provided by :
  - looka.com
- General resource documentation provided by :
  - w3schools.com
  - developer.mozilla.org
- Image Resources provided by :
  - Unsplash.com
  - Unsplash Providers - dmitriy frantsev, kalen emsly, kelli dougal, kenrick mills, remi thorel  





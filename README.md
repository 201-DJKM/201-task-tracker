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
- Version 2.1.0: Code quality revamp — 7 bug fixes across HTML validity, CSS, and JS (5/16/26)
- Version 2.2.0: Accessibility and HTML validity pass — nav landmarks, FAQ/workout card structure, label linkage, inline handler removal (5/17/26)
- Version 2.3.0: Moderate refactor complete — workout data extracted to js/data.js, separating data from logic (5/17/26)
- Version 3.0.0: Full revamp complete — ES6 class, responsive mobile CSS, all 15 audit items resolved (5/17/26)

### Requirements
- None, TakeTen is a standard 'vanilla' JavaScript Web App with functionality on all web browsers!

---

## Proposed Revamp Changes

Audit conducted 2026-05-16. Changes are grouped by effort level.

### Quick Wins — completed 2026-05-16

1. ✅ **Fix `<a a href="faq.html">` typo on all pages** (`revamp/qw-1-faq-typo`) — removed duplicate `a` attribute from the FAQ nav link in all 6 HTML files. The double attribute is invalid HTML and caused the link to be parsed incorrectly.
2. ✅ **Remove leftover `console.log` in `handleType`** (`revamp/qw-2-console-log`) — deleted the debug `console.log(woType[i].value)` line from `app.js` that was printing the selected workout type to the browser console on every form interaction.
3. ✅ **Fix `font-size: 18` missing unit in `workout-page.css`** (`revamp/qw-3-font-size-unit`) — added the missing `px` unit to the `h3` font-size rule. Unitless values (except for `0`) are invalid in CSS and silently ignored by browsers, so the heading size was falling back to the browser default.
4. ✅ **Replace hardcoded button colors with CSS variables** (`revamp/qw-4-css-variables`) — replaced the magic hex values `#06D6A0` and `#C1F5E7` in `index.css` and `workout-page.css` with `var(--secondary-green)` and a newly added `var(--secondary-green-light)` variable in `style.css`. Colors are now defined in one place.
5. ✅ **Fix `grid-template-columns` comma syntax bug in `style.css`** (`revamp/qw-5-grid-columns`) — changed `1fr,1fr,1fr,1fr` to `repeat(4, 1fr)`. Comma-separated values are invalid for `grid-template-columns`; the columns declaration was being silently ignored by the browser.
6. ✅ **Fix `background-size: auto` on the quote section** (`revamp/qw-6-background-size`) — changed to `background-size: cover` in `index.css` so the hero image fills the quote banner instead of rendering at its natural size.
7. ✅ **Add `<meta name="description">` to all pages** (`revamp/qw-7-meta-description`) — added a unique description tag to all 6 HTML pages. These are used by search engines and social sharing previews and were entirely absent.

### Moderate — completed 2026-05-17

8. ✅ **Wrap all navigation lists in `<nav>`** (`revamp/mod-8-nav-landmark`) — wrapped the bare `<ul>` nav in `<nav aria-label="Navigation List">` across all 6 HTML pages, adding a proper landmark region for screen readers.
9. ✅ **Fix invalid HTML in `faq.html` — `<h3>` directly inside `<ul>`** (`revamp/mod-9-faq-html`) — wrapped each Q&A `<h3>`/`<p>` pair in `<li>`; headings are not valid direct children of `<ul>`.
10. ✅ **Fix invalid HTML in workout card rendering** (`revamp/mod-10-workout-card-html`) — added `<li>` wrappers in `renderCurrWorkout()`, `renderWorkoutHistory()`, and the empty-state fallback in `app.js`; `<h3>` and `<p>` are not valid direct children of `<ul>`.
11. ✅ **Add `for`/`id` linkage to radio button labels** (`revamp/mod-11-label-for-id`) — added explicit `for`/`id` pairing to all 8 radio inputs across `index.html` and `time-page.html`; implicit wrapping alone is not honoured by all screen readers.
12. ✅ **Move inline `onclick` handlers to `app.js`** (`revamp/mod-12-remove-inline-onclick`) — removed `onclick` from the Next, Generate Workout, and Refresh buttons; navigation is now handled exclusively by the JS event listeners, eliminating the race condition.
13. ✅ **Extract workout data arrays to `js/data.js`** (`revamp/mod-13-data-js`) — moved all four exercise bank arrays out of `app.js` into a new `js/data.js` file loaded before `app.js` in all 4 HTML pages; `app.js` now contains only logic.

### Deep Refactors — completed 2026-05-17

14. ✅ **Convert prototype-based `Workout` constructor to an ES6 `class`** (`revamp/deep-14-es6-class`) — replaced `function Workout() {}` and three `Workout.prototype.*` assignments with a clean `class Workout` with `constructor` and method definitions; behaviour is identical.
15. ✅ **Add responsive mobile CSS** (`revamp/deep-15-responsive-css`) — added `@media (max-width: 768px)` breakpoints to `style.css`, `index.css`, `time-page.css`, `workout-page.css`, `FAQ.css`, and `my-workouts.css`; fixed-pixel margins and `600px` widths now collapse to fluid layouts on narrow screens. Also fixed the `header > ul` selector broken by item 8's `<nav>` wrapper.

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





# Seed issues (paste these into GitHub manually after pushing)

## Issue 1 — clear bug report
**Title:** kg2lb gives a slightly different result than online converters
**Body:**
Running `node src/convert.js kg2lb 10` gives `22.046226218487757`. Most online
converters show `22.05`. Is the conversion factor wrong, or should the CLI be
rounding output?

## Issue 2 — vague, low-effort
**Title:** conversions seem off sometimes
**Body:**
not sure if this is intentional but the numbers dont look right when i use it,
can someone check

## Issue 3 — references outdated code (docs drift)
**Title:** milesToKilometers throws "is not a function"
**Body:**
Docs say I should be able to do:
```js
const { milesToKilometers } = require("./src/convert");
milesToKilometers(26.2, 1);
```
but this throws `milesToKilometers is not a function`. Same with `poundsToKg`.

## Issue 4 — already resolved (for a closed-state example)
**Title:** Add a README
**Body:**
There's no README explaining how to install or run this.

(Close this one manually once seeded, since the README already exists —
gives you a "closed" issue to filter on in demos.)

# unit-shift usage

`unit-shift` converts between common units, either as a CLI or as a Node.js library.

## CLI

```
node src/convert.js <command> <value>
```

Commands: `c2f`, `f2c`, `km2mi`, `mi2km`, `lb2kg`, `kg2lb`

## Library

```js
const { cToF, fToC, kmToMiles, milesToKilometers, poundsToKg, kgToLb } = require("./src/convert");
```

- `cToF(celsius)` — Celsius to Fahrenheit
- `fToC(fahrenheit)` — Fahrenheit to Celsius
- `kmToMiles(km)` — kilometres to miles
- `milesToKilometers(miles, precision)` — miles to kilometres, rounded to `precision` decimal places (default 2)
- `poundsToKg(lb)` — pounds to kilograms
- `kgToLb(kg)` — kilograms to pounds

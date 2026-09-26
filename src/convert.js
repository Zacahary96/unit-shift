#!/usr/bin/env node

/**
 * unit-shift: a tiny library/CLI for converting between common units.
 */

function cToF(celsius) {
  return celsius * 9 / 5 + 32;
}

function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function kmToMiles(km) {
  return km * 0.621371;
}

function milesToKm(miles) {
  return miles / 0.621371;
}

function lbToKg(lb) {
  return lb * 0.453592;
}

function kgToLb(kg) {
  return kg / 0.453592;
}

const COMMANDS = {
  c2f: cToF,
  f2c: fToC,
  km2mi: kmToMiles,
  mi2km: milesToKm,
  lb2kg: lbToKg,
  kg2lb: kgToLb,
};

function main() {
  const [, , command, valueArg] = process.argv;
  const fn = COMMANDS[command];
  const value = parseFloat(valueArg);

  if (!fn || Number.isNaN(value)) {
    console.log("Usage: unit-shift <command> <value>");
    console.log("Commands: " + Object.keys(COMMANDS).join(", "));
    process.exit(1);
  }

  console.log(fn(value));
}

if (require.main === module) {
  main();
}

module.exports = { cToF, fToC, kmToMiles, milesToKm, lbToKg, kgToLb };

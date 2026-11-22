const calcOffset = function (outer, inner) {
  return (outer - inner) / 2;
};

const type = function (a) {
  if (Array.isArray(a)) {
    return "array";
  }

  if (a === null) {
    return "null";
  }

  if (Number.isNaN(a)) {
    return "NaN";
  }

  return typeof a;
};

const areTypesEqual = function (a, b) {
  return type(a) === type(b);
};

const areLengthsEqual = function (a, b) {
  return Object.keys(a).length !== Object.keys(b).length;
};

const areObjectsEqual = function (a, b) {
  if (areLengthsEqual(a, b)) {
    return false;
  }

  for (const key in a) {
    if (!(key in b)) {
      return false;
    }

    if (!isEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

const areArraysEqual = function (a, b) {
  if (areLengthsEqual(a, b)) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
};

const areValuesEqual = function (a, b) {
  return a === b;
};

const isEqual = function (a, b) {
  if (areValuesEqual(a, b)) {
    return true;
  }

  if (!areTypesEqual(a, b)) {
    return false;
  }

  switch (type(a)) {
    case "NaN":
      return true;
    case "object":
      return areObjectsEqual(a, b);
    case "array":
      return areArraysEqual(a, b);
  }

  return areValuesEqual(a, b);
};

module.exports = {
  isEqual,
};

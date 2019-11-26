function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError();
  }

  return a + b;
}

// comment for commit

module.exports = sum;

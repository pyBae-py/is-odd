"use strict";

const isEven = (value) => {
  if (typeof value !== "number") {
    throw new TypeError("Expected a number");
  }
  if (!Number.isInteger(value)) {
    throw new TypeError("Expected a valid integer number");
  }
  if (!Number.isSafeInteger(value)) {
    throw new TypeError("The entered number exceeds maximum safe integer");
  }

  return value % 2 === 1;
};

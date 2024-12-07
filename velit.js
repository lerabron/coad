// Assume tz is an array of some values
const tz = [10, 20, 30];

// Assume values is another parameter that contour function needs
const values = [1, 2, 3, 4, 5];

// Define a dummy contour function for illustration
function contour(values, value) {
  // Just as an example, let's say contour returns an object combining values and value
  return { values, value };
}

// Use map to apply contour function to each element in tz
const result = tz.map(value => contour(values, value));

// Output the result
console.log(result);

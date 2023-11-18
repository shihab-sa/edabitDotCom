// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// Examples
// sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720

function sumPolygon(n) {
  return (n - 2) * 180;
}

console.log(sumPolygon(3)); // ➞ 180
console.log(sumPolygon(4)); // ➞ 360
console.log(sumPolygon(6)); // ➞ 720

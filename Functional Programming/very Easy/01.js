// Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

// Examples
// sumPolygon(3) ➞ 180

// sumPolygon(4) ➞ 360

// sumPolygon(6) ➞ 720
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.



function sumPolygon(n){
    return (n-2)*180

}

console.log(sumPolygon(3));

console.log(sumPolygon(4) );

console.log(sumPolygon(6) );
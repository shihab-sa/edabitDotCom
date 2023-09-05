// substring()

function convertTime(timeStr) {
  // Split the time string into parts using ":" as a delimiter
  const timeParts = timeStr.split(":");
  let h = parseInt(timeParts[0]);
  let m = timeParts[1];
  let s = timeParts[2].substring(0, 2);
  console.log(s);
}

// Test cases
console.log(convertTime("07:05:45PM")); // ➞ "19:05:45"

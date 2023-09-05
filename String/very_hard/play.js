function convertTime(timeStr) {
  // Split the time string into parts using ":" as a delimiter
  const timeParts = timeStr.split(":");
  console.log(timeParts);
}

// Test cases
console.log(convertTime("07:05:45PM")); // ➞ "19:05:45"
console.log(convertTime("12:40:22AM")); // ➞ "00:40:22"
console.log(convertTime("12:45:54PM")); // ➞ "12:45:54"
console.log(convertTime("01:15:30AM")); // ➞ "01:15:30"

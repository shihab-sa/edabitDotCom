// split(" এর ভিতরে যদি দেই কিছু ")

// সেটাকে replace করে দিবে!

function convertTime(timeStr) {
  // Split the time string into parts using ":" as a delimiter
  const timeParts = timeStr.split(":");
  console.log(timeParts);
}

// Test cases
console.log(convertTime("07:05:45PM")); // ➞ "19:05:45"

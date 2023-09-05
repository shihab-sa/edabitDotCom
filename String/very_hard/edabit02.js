// 24-Hour Time
// Write a function that receives the time in 12-hour AM/PM format and returns a string representation of the time in military (24-hour) format.

// Examples
// convertTime(“07:05:45PM”) ➞ “19:05:45”

// convertTime(“12:40:22AM”) ➞ “00:40:22”

// convertTime(“12:45:54PM”) ➞ “12:45:54”
// Notes
// Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock.
// Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

function convertTime(timeStr) {
  // Split the time string into parts using ":" as a delimiter
  const timeParts = timeStr.split(":");

  // Extract the hour, minute, and second from the parts
  const hour = parseInt(timeParts[0]);
  const minute = timeParts[1];
  const second = timeParts[2].substring(0, 2); // Remove "AM" or "PM"

  // Determine if it's AM or PM
  const isPM = timeStr.includes("PM");

  // Handle special cases for 12AM and 12PM
  if (hour === 12) {
    return isPM ? `12:${minute}:${second}` : `00:${minute}:${second}`;
  } else {
    // Convert to 24-hour format
    const militaryHour = isPM ? hour + 12 : hour;
    const formattedHour = String(militaryHour).padStart(2, "0");

    return `${formattedHour}:${minute}:${second}`;
  }
}

// Test cases
console.log(convertTime("07:05:45PM")); // ➞ "19:05:45"
console.log(convertTime("12:40:22AM")); // ➞ "00:40:22"
console.log(convertTime("12:45:54PM")); // ➞ "12:45:54"
console.log(convertTime("01:15:30AM")); // ➞ "01:15:30"

// Jake's Meal Time
// Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning, lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.

// Create a function that takes in the current time as a string and determines the duration of time before Jake's next meal. Represent this as an array with the first and second elements representing hours and minutes, respectively.

// Examples
// timeToEat("2:00 p.m.") ➞ [5, 0]
// // 5 hours until the next meal, dinner

// timeToEat("5:50 a.m.") ➞ [1, 10]
// // 1 hour and 10 minutes until the next meal, breakfast
// Notes
// N/A

function timeToEat(currentTime) {
  const mealTimes = {
    breakfast: { hour: 7, minute: 0 },
    lunch: { hour: 12, minute: 0 },
    dinner: { hour: 19, minute: 0 },
  };

  const timeParts = currentTime.split(/[:\s]/);
  const hour = parseInt(timeParts[0]);
  const minute = parseInt(timeParts[1]);
  const period = timeParts[2];

  let nextMeal;
  if (period === "p.m." && hour !== 12) {
    nextMeal = mealTimes.dinner;
  } else if (hour < 7) {
    nextMeal = mealTimes.breakfast;
  } else if (hour < 12) {
    nextMeal = mealTimes.lunch;
  } else {
    nextMeal = mealTimes.breakfast; // Next day's breakfast
  }

  let hours = nextMeal.hour - hour;
  let minutes = nextMeal.minute - minute;

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }

  if (hours < 0) {
    hours += 24;
  }

  return [hours, minutes];
}

// Test cases
console.log(timeToEat("2:00 p.m.")); // Output: [5, 0]
console.log(timeToEat("5:50 a.m.")); // Output: [1, 10]

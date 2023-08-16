function shouldServeDrinks(age, isBreakTime) {
    return age >= 18 && !isBreakTime;
  }
  
  // Examples
  console.log(shouldServeDrinks(17, true)); // false
  console.log(shouldServeDrinks(19, false)); // true
  console.log(shouldServeDrinks(30, true)); // false
  
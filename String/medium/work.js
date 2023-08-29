function areaOfCountry(contryName, area) {
  let tottalLadmanse = 148940000;
  let poputaltion = (area / tottalLadmanse) * 100;

  return `${contryName} is ${poputaltion.toFixed(
    2
  )}% of the total world's landmass"`;
}

console.log(areaOfCountry("Russia", 17098242));

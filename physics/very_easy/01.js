// Kinetic Energy
// Kinetic energy can be calculated with the following formula:

// KE = 1/2mv²

// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J
// Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

// Examples





function kineticEnergy(m,v){

    return 1/2*(m*(v*v))

}

console.log(kineticEnergy(60, 3));
console.log(kineticEnergy(45, 10));
console.log(kineticEnergy(63.5, 7.35));
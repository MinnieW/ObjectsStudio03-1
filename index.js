// Code your crewMass function here:
function crewMass(crew){
  let totalMass = 0;
  for (i=0; i < crew.length; i++){
    totalMass += crew[i].mass;
  }
  return totalMass;
}

function fuelForSpecies(crew){
  let fuelMass = 0;
  for (i=0; i < crew.length; i++){
    if (crew[i].species === "cat" || crew[i].species === "dog"){
      fuelMass += 200
    } else {
      fuelMass += 100
    }
  }
  return fuelMass;
}

// Code your fuelRequired function here:
function fuelRequired(mass){
  let totalFuel = 0;
  totalFuel = Math.round((75000 + mass)*9.5)+fuelForSpecies(crew);
return totalFuel;
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let crew = [candidateB,candidateD,candidateF];

let totalCrewMass = crewMass(crew);
let additionalFuel = fuelForSpecies(crew)

//console.log(fuelRequired(totalCrewMass));
console.log(`The mission has a launch mass of ${totalCrewMass} kg and requires ${fuelRequired(totalCrewMass)} kg of fuel.`)
//console.log(fuelForSpecies(crew));

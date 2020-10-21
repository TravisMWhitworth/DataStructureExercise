// 1a
const jedi = [];

// 1b
jedi[0] ="Luke";
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
jedi.pop();

// 1g
jedi.shift();


// 2a
const sithLords = ["Darth Vader", "Darth Sidous", "Darth Maul"]

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"] 

// 2c
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
sithLords.splice(2, 2);
console.log(sithLords);

// 3a
const droids = {
    astromech: "R2-D2",
    protocol: "C-3PO",
    assassin: "IG-88"
};
console.log(droids);
// // 3b
console.log(droids ["astromech"]);

// // 3c
droids.protocol
console.log(droids.protocol);

// // 3d
droids.assassin = "IG-11";
console.log(droid.assassin);

// // // BONUS
// // // 4
console.log(starWarsVillains);
console.log(starWarsVillains[0]);
console.log(starWarsVillains[0][6]);
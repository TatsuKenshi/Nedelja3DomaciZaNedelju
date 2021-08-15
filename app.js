console.log(`-------- Zadatak 1 --------`);

// 1 Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
{
  let niz = [2, 1, 5, 8, 24, 64, 88, 12, 15, 17, 33, 10, 3, 20];

  function racunica(niz) {
    return niz.filter((element) => element % 5 === 0);
  }
  let noviNiz = racunica(niz);
  console.log(noviNiz);
}

console.log(`-------- Zadatak 2 --------`);

// 2 Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime
// * Vrsta
// * Sposobnosti (niz sposobnosti pokemona)
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

let bulbasaur = {
  ime: "Bulbasaur",
  vrsta: "Grass",
  sposobnosti: ["Overgrow", "Chlorophyll"],
  karakteristike: {
    napad: 49,
    odbrana: 49,
    brzina: 45,
  },
};

let charizard = {
  ime: "Charizard",
  vrsta: "Fire",
  sposobnosti: ["Blaze", "Solar Power"],
  karakteristike: {
    napad: 84,
    odbrana: 78,
    brzina: 100,
  },
};

let pikachu = {
  ime: "Pikachu",
  vrsta: "Electric",
  sposobnosti: ["Static", "Lightning Rod"],
  karakteristike: {
    napad: 55,
    odbrana: 40,
    brzina: 90,
  },
};

let gyarados = {
  ime: "Gyarados",
  vrsta: "Water",
  sposobnosti: ["Intimidate", "Moxie"],
  karakteristike: {
    napad: 125,
    odbrana: 79,
    brzina: 81,
  },
};

let eevee = {
  ime: "Eevee",
  vrsta: "Normal",
  sposobnosti: ["Run Away", "Adaptability", "Anticipation"],
  karakteristike: {
    napad: 55,
    odbrana: 50,
    brzina: 55,
  },
};
let pokemoni = [bulbasaur, charizard, pikachu, gyarados, eevee];
console.log(pokemoni);

console.log(`-------- Zadatak 3 --------`);

// 3 Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

function sposobnostiPokemona(niz) {
  let pomocni = [];
  niz.map(function (el) {
    pomocni.push(`Sposobnosti ${el.ime}-a: ${el.sposobnosti.join(", ")}`);
  });
  return pomocni;
}

let sveSposobnosti = sposobnostiPokemona(pokemoni);
console.log(sveSposobnosti);

console.log(`-------- Zadatak 4 --------`);

// 4 Sortirati pokemone po brzini, rastuće.

function najbrziPokemon(niz) {
  niz.sort((a, b) => a.karakteristike.brzina - b.karakteristike.brzina);
  let brzina = [];
  niz.forEach(function (element) {
    brzina.push(`Brzina ${element.ime}-a je ${element.karakteristike.brzina}`);
  });
  return brzina;
}
console.log(najbrziPokemon(pokemoni));

console.log(`-------- Zadatak 5 --------`);

// 5 Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

// preko forEach (straightforward)

function najjaci(niz) {
  let max = 0;
  let pobednik = "";
  niz.forEach((el) => {
    if (el.karakteristike.napad > max) {
      max = el.karakteristike.napad;
      pobednik = `Pobednik je ${el.ime} sa snagom napada: ${max}`;
    }
  });
  return pobednik;
}
console.log(najjaci(pokemoni));

// izvlacenje niza napada

function najjaci2(niz) {
  let battle = [];
  // moze i forEach umesto map-a
  pokemoni.map(function (element) {
    battle.push(element.karakteristike.napad);
  });

  let maximum = battle.reduce(function (a, b) {
    return Math.max(a, b);
  });

  let pobednik = ``;
  // moze i filter umesto forEach-a
  niz.forEach(function (element) {
    if (element.karakteristike.napad === maximum) {
      pobednik = `Pobednik je ${element.ime} sa snagom napada: ${maximum}`;
    }
  });
  return pobednik;
}
console.log(najjaci2(pokemoni));

// filter umesto forEach-a (straightforward)

function najjaci3(niz) {
  let max = 0;
  let pobednik = "";
  niz.filter((el) => {
    if (el.karakteristike.napad > max) {
      max = el.karakteristike.napad;
      pobednik = `Pobednik je ${el.ime} sa snagom napada: ${max}`;
    }
  });
  return pobednik;
}
console.log(najjaci3(pokemoni));

// sort super-straightforward

function najjaci4(niz) {
  let pobednik = ``;
  niz.sort((a, b) => a.karakteristike.napad - b.karakteristike.napad).reverse();
  pobednik = `Pobednik je ${niz[0].ime} sa snagom napada: ${niz[0].karakteristike.napad}`;
  return pobednik;
}
console.log(najjaci4(pokemoni));

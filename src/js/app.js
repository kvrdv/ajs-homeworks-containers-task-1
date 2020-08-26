class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}

const Bowerman = new Character('Bob');
const Swordsman = new Character('Sam');
const Magician = new Character('Maggy');
const Daemon = new Character('Dan');
const Undead = new Character('Andy');
const Zombie = new Character('Zack');

class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    if (this.members.has(obj) === false) {
      this.members.add(obj);
    } else throw new Error('Этот персонаж уже есть в команде!');
  }

  addAll(...allCharacters) {
    for (let i = 0; i < allCharacters.length; i++) {
      if (this.members.has(allCharacters[i]) === false) {
        this.members.add(allCharacters[i]);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}

const Ateam = new Team;

// Ateam.add(Bowerman);
// Ateam.add(Swordsman);
// Ateam.add(Magician);
// Ateam.add(Daemon);
// Ateam.add(Undead);
// Ateam.add(Zombie);

Ateam.addAll(Bowerman, Swordsman, Magician, Bowerman);
console.log(Ateam)


// console.log(Ateam.toArray());
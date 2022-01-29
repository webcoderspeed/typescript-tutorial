abstract class StreetFighter {
  constructor() {}

  move() {}
  fight() {
    console.log(`${this.name} attacks with ${this.getSpecialAttack()}`);
  }

  abstract getSpecialAttack(): string;

  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadouken';
  }

  get name(): string {
    return 'Ryu';
  }
}

const ryu = new Ryu();

class ChunLi extends StreetFighter {
  getSpecialAttack(): string {
    return 'Hadouken';
  }

  get name(): string {
    return 'Ryu';
  }
}

const chunli = new ChunLi();

ryu.fight();
chunli.fight();


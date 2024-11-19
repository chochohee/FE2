abstract class Spell {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  abstract cast(): void;
}

// 불 마법과 얼음마법의 이름을 열거형으로 정의
enum FireSpellName {
  FireBall = "Fire Ball",
  MeteorStrike = "Meteor Strike",
}
enum FrostSpellName {
  IceSpear = "Ice Spear",
  FrostNova = "Frost Nova",
}

class FireSpell extends Spell {
  readonly damage = 50;

  constructor(name: FireSpellName) {
    super(name);
  }

  cast() {
    console.log(`${this.name} 마법이 발사됬습니다!, 데미지가 ${this.damage} 발생했습니다!`)
  }

}

class FrostSpell extends Spell {
  readonly slow = 0.5;

  constructor(name: FrostSpellName) {
    super(name)
  }

  cast() {
    console.log(`${this.name} 마법이 발사됬습니다!, 적의 속도를 ${this.slow}% 둔화시킵니다!`)
  }
}

class Wizard<S extends Spell> {
  #spellBook: S[] = [];

  constructor(spellBook: S[]) {
    this.#spellBook = spellBook;
  }

  // 마법의 이름을 통해서 마법을 찾아 발사합니다.
  castFromSpellBook(name: string): void {
    // 마법의 이름으로 책안의 마법을 검색 = 있으면 실행, 없으면 에러
    const spell = this.#spellBook.find((spell) => name === spell.name)

    if (spell) {
      spell.cast();
    } else {
      throw new Error("보유하고있지 않은 마법입니다.")
    }
  }

}

const frostSpells: FrostSpell[] = [new FrostSpell(FrostSpellName.IceSpear)]
const fireSpells: FireSpell[] = [new FireSpell(FireSpellName.MeteorStrike)]


const frostWizard = new Wizard(frostSpells);
const FireWizard = new Wizard(fireSpells);


frostWizard.castFromSpellBook("Ice Spear")
FireWizard.castFromSpellBook("Meteor Strike")
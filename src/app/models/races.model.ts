import { Elements, Race, Races } from "./deyralein.model";

export class Human extends Race {

    override description = Races.HUMAN;
    override baseLife: number = 12;

}

export class Demon extends Race {

    override description = Races.DEMON;
    override baseLife: number = 12;

    override bonusDexterity: number = 1;
    override bonusCharisma: number = -1;

    element: Elements | undefined;

    constructor(element: Elements) {
        super();
        this.element = element;
        this.ability = 'abilities.demon.' + element;
    }

}

export class DragonKin extends Race {

    override description: Races = Races.DRAGON_KIN;
    override baseLife: number = 15;

    override bonusDexterity: number = 1;
    override bonusCharisma: number = -1;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class Elf extends Race {

    override description: Races = Races.ELF;
    override baseLife: number = 10;

    override bonusDexterity: number = -1;
    override bonusIntelligence: number = 1;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class Dwarf extends Race {

    override description: Races = Races.DWARF;
    override baseLife: number = 15;

    override bonusDexterity: number = 1;
    override bonusPerception: number = -1;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class Orc extends Race {

    override description: Races = Races.ORC;
    override baseLife: number = 15;

    override bonusDexterity: number = 1;
    override bonusCharisma: number = -1;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class RaankinSML extends Race {

    override description: Races = Races.RAANKIN_SML;
    override baseLife: number = 10;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class RaankinMDM extends Race {

    override description: Races = Races.RAANKIN_MDM;
    override baseLife: number = 12;

    constructor() {
        super();
        this.updateAbility();
    }

}

export class RaankinLRG extends Race {

    override description: Races = Races.RAANKIN_LRG;
    override baseLife: number = 14;

    override ability: string = '';

}

export function getRace(race: Races, element?: Elements) {
    switch (race) {
        case Races.HUMAN:
            return new Human();
        case Races.DEMON:
            return new Demon(element!);
        case Races.DRAGON_KIN:
            return new DragonKin();
        case Races.ELF:
            return new Elf();
        case Races.DWARF:
            return new Dwarf();
        case Races.ORC:
            return new Orc();
        case Races.RAANKIN_SML:
            return new RaankinSML();
        case Races.RAANKIN_MDM:
            return new RaankinMDM();
        case Races.RAANKIN_LRG:
            return new RaankinLRG();
    }
}
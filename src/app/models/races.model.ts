import { Elements, Race, Races } from "./dnd.model";

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

}

export class Elf extends Race {

    override description: Races = Races.ELF;
    override baseLife: number = 10;

    override bonusDexterity: number = -1;
    override bonusIntelligence: number = 1;

}

export class Dwarf extends Race {

    override description: Races = Races.DWARF;
    override baseLife: number = 15;

    override bonusDexterity: number = 1;
    override bonusPerception: number = -1;

}

export class Orc extends Race {

    override description: Races = Races.ORC;
    override baseLife: number = 15;

    override bonusDexterity: number = 1;
    override bonusCharisma: number = -1;

}

export class RaankinSML extends Race {

    override description: Races = Races.RAANKIN_SML;
    override baseLife: number = 10;

}

export class RaankinMDM extends Race {

    override description: Races = Races.RAANKIN_MDM;
    override baseLife: number = 12;

}

export class RaankinLRG extends Race {

    override description: Races = Races.RAANKIN_LRG;
    override baseLife: number = 14;

    override ability: string = '';

}
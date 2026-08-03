import { CharacterClass, CharacterClasses } from "./dnd.model";

export class Druid extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.DRUID;
    override baseLife: number = 12;

    override bonusCharisma: number = 1;
    override bonusWisdom: number = -2;
    override bonusPerception: number = 1;

}

export class ArcaneMage extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.ARCANE_MAGE;
    override baseLife: number = 8;

    override bonusDexterity: number = -2;
    override bonusIntelligence: number = 2;

}

export class Bard extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.BARD;
    override baseLife: number = 10;

    override bonusDexterity: number = 2;
    override bonusWisdom: number = -2;

}

export class ArmedMageSR extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.ARMED_MAGE_SR;
    override baseLife: number = 14;

    override bonusDexterity: number = 2;
    override bonusWisdom: number = -2;

}

export class ArmedMageLR extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.ARMED_MAGE_LR;
    override baseLife: number = 12;

    override bonusWisdom: number = -2;
    override bonusPerception: number = 2;

}

export class Sorcerer extends CharacterClass {

    override description: CharacterClasses = CharacterClasses.SORCERER;
    override baseLife: number = 10;

    override bonusDexterity: number = 1;
    override bonusIntelligence: number = -2;
    override bonusPerception: number = 1;

}
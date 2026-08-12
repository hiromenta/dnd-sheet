export interface DeyraleinSetup {
    charachters: CharacterModel[];
}

export interface PartialCharacterModel {
    name: string;
    race: Race,
    class: CharacterClass,
    imageUrl?: string;

    dexterity: number;
    intelligence: number;
    charisma: number;
    wisdom: number;
    perception: number;
}

export interface CharacterModel extends PartialCharacterModel {
    id: string;

    maxLife: number;
    life: number;
    maxTar: number;
    tar: number;
    level: number;
}

export class Character implements CharacterModel {

    name: string;
    race: Race;
    class: CharacterClass;
    imageUrl: string;

    dexterity: number;
    intelligence: number;
    charisma: number;
    wisdom: number;
    perception: number;

    id: string;

    maxLife: number;
    life: number;
    maxTar: number;
    tar: number;
    level: number;

    constructor(partialModel?: PartialCharacterModel, model?: CharacterModel) {
        if (partialModel) {
            this.name = partialModel.name;
            this.race = partialModel.race;
            this.class = partialModel.class;
            this.imageUrl = partialModel.imageUrl || 'https://static.vecteezy.com/system/resources/thumbnails/034/098/052/small_2x/my-unchecked-illustration-design-free-png.png';

            // TODO: Max (26 - 4 - 4 - 4 - 4 - 4) total; <= 5
            this.dexterity = -4 + partialModel.dexterity + (this.race.bonusDexterity || 0) + (this.class.bonusDexterity || 0);
            this.intelligence = -4 + partialModel.intelligence + (this.race.bonusIntelligence || 0) + (this.class.bonusIntelligence || 0);
            this.charisma = -4 + partialModel.charisma + (this.race.bonusCharisma || 0) + (this.class.bonusCharisma || 0);
            this.wisdom = -4 + partialModel.wisdom + (this.race.bonusWisdom || 0) + (this.class.bonusWisdom || 0);
            this.perception = -4 + partialModel.perception + (this.race.bonusPerception || 0) + (this.class.bonusPerception || 0);

            this.id = (this.name.trim().toLowerCase().replaceAll(' ', '')) + Math.round(Math.random() * 999999);

            this.maxLife = this.race.baseLife + this.class.baseLife;
            this.life = this.maxLife;
            this.maxTar = 30;
            this.tar = 0;
            this.level = 1;
        } else if (model) {
            this.name = model.name;
            this.race = model.race;
            this.class = model.class;
            this.imageUrl = model.imageUrl || '';

            this.dexterity = model.dexterity;
            this.intelligence = model.intelligence;
            this.charisma = model.charisma;
            this.wisdom = model.wisdom;
            this.perception = model.perception;

            this.id = model.id;

            this.maxLife = model.maxLife;
            this.life = model.life;
            this.maxTar = model.maxTar;
            this.tar = model.tar;
            this.level = model.level;
        } else {
            this.name = '';
            this.race = new Race();
            this.class = new CharacterClass();
            this.imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/034/098/052/small_2x/my-unchecked-illustration-design-free-png.png';
            
            this.dexterity = -4 + (this.race.bonusDexterity || 0) + (this.class.bonusDexterity || 0);
            this.intelligence = -4 + (this.race.bonusIntelligence || 0) + (this.class.bonusIntelligence || 0);
            this.charisma = -4 + (this.race.bonusCharisma || 0) + (this.class.bonusCharisma || 0);
            this.wisdom = -4 + (this.race.bonusWisdom || 0) + (this.class.bonusWisdom || 0);
            this.perception = -4 + (this.race.bonusPerception || 0) + (this.class.bonusPerception || 0);

            this.id = (this.name.trim().toLowerCase().replaceAll(' ', '')) + Math.round(Math.random() * 999999);

            this.maxLife = this.race.baseLife + this.class.baseLife;
            this.life = this.maxLife;
            this.maxTar = 30;
            this.tar = this.maxTar;
            this.level = 1;
        }
    }

    getModifier(stat?: number) {
        return Math.floor((stat || 0) / 3);
    }

}

export enum Races {
    HUMAN = 'human',
    DEMON = 'demon',
    DRAGON_KIN = 'dragon-kin',
    ELF = 'elf',
    DWARF = 'dwarf',
    ORC = 'orc',
    RAANKIN_SML = 'raankin-sml',
    RAANKIN_MDM = 'raankin-mdm',
    RAANKIN_LRG = 'raankin-lrg'
}

export enum Elements {
    AIR = 'air',
    EARTH = 'earth',
    FIRE = 'fire',
    ICE = 'ice'
}

export class Race {

    description!: Races;
    baseLife!: number;

    ability!: string;

    bonusDexterity!: number;
    bonusIntelligence!: number;
    bonusCharisma!: number;
    bonusWisdom!: number;
    bonusPerception!: number;

    updateAbility() {
        this.ability = 'abilities.' + this.description;
    }

}

export enum CharacterClasses {
    DRUID = 'druid',
    ARCANE_MAGE = 'arcane-mage',
    BARD = 'bard',
    ARMED_MAGE_SR = 'armed-mage-sr',
    ARMED_MAGE_LR = 'armed-mage-lr',
    SORCERER = 'sorcerer'
}

export class CharacterClass {

    description!: CharacterClasses;
    baseLife!: number;

    bonusDexterity!: number;
    bonusIntelligence!: number;
    bonusCharisma!: number;
    bonusWisdom!: number;
    bonusPerception!: number;

}
export interface DndSetup {
    charachters: Character[];
}

export interface CharacterModel {
    name: string;
    race: Race;
    class: CharacterClass;
    imageUrl?: string;

    dexterity?: number;
    intelligence?: number;
    charisma?: number;
    wisdom?: number;
    perception?: number;

    maxLife?: number;
    life?: number;
    maxTar?: number;
    tar?: number;
    level?: number;
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

    maxLife: number;
    life: number;
    maxTar: number;
    tar: number;
    level: number;

    constructor(model: CharacterModel) {
        this.name = model.name;
        this.race = model.race;
        this.class = model.class;
        this.imageUrl = model.imageUrl || 'https://static.vecteezy.com/system/resources/thumbnails/034/098/052/small_2x/my-unchecked-illustration-design-free-png.png';

        this.dexterity = model.dexterity || 2;
        this.intelligence = model.intelligence || 2;
        this.charisma = model.charisma || 2;
        this.wisdom = model.wisdom || 2;
        this.perception = model.perception || 2;

        this.maxLife = model.maxLife || 100;
        this.life = model.life || this.maxLife;
        this.maxTar = model.maxTar || 30;
        this.tar = model.tar || this.maxTar;
        this.level = model.level || 1;
    }

}

export enum Races {
    HUMAN = 'human'
}

export abstract class Race {

    description!: Races;

}

export enum CharacterClasses {
    DRUID = 'druid'
}

export abstract class CharacterClass {

    description!: CharacterClasses;

}
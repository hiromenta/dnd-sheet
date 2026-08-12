import { Component } from "@angular/core";
import { ControlType, MyForm } from "../../models/form.model";
import { Character, CharacterClasses, PartialCharacterModel, Races } from "../../models/deyralein.model";
import { FormComponent } from "../../shared/form/form.component";
import { TranslatePipe } from "../../pipes/translate.pipe";
import { getRace } from "../../models/races.model";
import { getClass } from "../../models/classes.model";
import { DeyraleinService } from "../../services/deyralein.service";

@Component({
    selector: 'my-make-character',
    templateUrl: './make-character.component.html',
    styleUrls: ['./make-character.component.scss'],
    standalone: true,
    imports: [FormComponent, TranslatePipe]
})
export class MakeCharacterComponent {

    form: MyForm = {
        controls: [
            { selector: 'name', label: 'character.name', type: ControlType.TEXT },
            { type: ControlType.SPACER },
            { selector: 'race', label: 'character.race', type: ControlType.RADIO, options: this._getRaceOptions() },
            { type: ControlType.SPACER },
            { selector: 'class', label: 'character.class', type: ControlType.RADIO, options: this._getClassOptions() },
            { type: ControlType.SPACER },
            { selector: 'imageUrl', label: 'character.imageUrl', type: ControlType.TEXT },
            { type: ControlType.SPACER },
            { selector: 'dexterity', label: 'character.dexterity', type: ControlType.NUMBER },
            { selector: 'intelligence', label: 'character.intelligence', type: ControlType.NUMBER },
            { selector: 'charisma', label: 'character.charisma', type: ControlType.NUMBER },
            { selector: 'wisdom', label: 'character.wisdom', type: ControlType.NUMBER },
            { selector: 'perception', label: 'character.perception', type: ControlType.NUMBER }
        ]
    };

    constructor(private _deyraleinService: DeyraleinService) {}

    private _getRaceOptions() {
        const options = [];

        for (const [key, value] of Object.entries(Races)) {
            options.push({ value, label: `races.${value}` });
        }

        return options;
    }

    private _getClassOptions() {
        const options = [];

        for (const [key, value] of Object.entries(CharacterClasses)) {
            options.push({ value, label: `classes.${value}` });
        }

        return options;
    }

    makeCharacter() {
        const value = this.form.value;

        const race = getRace(value?.['race'] as Races);
        const characterClass = getClass(value?.['class'] as CharacterClasses);

        const partialCharacter: PartialCharacterModel = {
            name: value?.['name'],
            race,
            class: characterClass,
            imageUrl: value?.['imageUrl'],
            dexterity: +value?.['dexterity'],
            intelligence: +value?.['intelligence'],
            charisma: +value?.['charisma'],
            wisdom: +value?.['wisdom'],
            perception: +value?.['perception']
        };

        const character = new Character(partialCharacter);

        this._deyraleinService.saveCharacter(character);
    }

}
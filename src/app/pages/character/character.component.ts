import { Component, OnInit } from "@angular/core";
import { Character, PartialCharacterModel } from "../../models/dnd.model";
import { DragonKin } from "../../models/races.model";
import { Bard } from "../../models/classes.model";
import { TranslatePipe } from "../../pipes/translate.pipe";

@Component({
    selector: 'my-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    imports: [TranslatePipe],
    standalone: true
})
export class CharacterComponent implements OnInit {

    character?: Character;

    ngOnInit(): void {
        const model: PartialCharacterModel = {
            name: 'Test',
            race: new DragonKin(),
            class: new Bard(),

            dexterity: -4 + 5,
            intelligence: -4 + 5,
            charisma: -4 + 5,
            wisdom: -4 + 5,
            perception: -4 + 6
        };

        this.character = new Character(model);
    }

}
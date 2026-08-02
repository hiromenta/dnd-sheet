import { Component, OnInit } from "@angular/core";
import { Character, CharacterModel } from "../../models/dnd.model";
import { Human } from "../../models/races.model";
import { Druid } from "../../models/classes.model";
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
        const model: CharacterModel = {
            name: 'Test',
            race: new Human(),
            class: new Druid()
        };

        this.character = new Character(model);
    }

}
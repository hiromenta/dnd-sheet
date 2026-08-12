import { Component, OnInit } from "@angular/core";
import { Character } from "../../models/deyralein.model";
import { TranslatePipe } from "../../pipes/translate.pipe";
import { ActivatedRoute } from "@angular/router";
import { DeyraleinService } from "../../services/deyralein.service";

@Component({
    selector: 'my-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    imports: [TranslatePipe],
    standalone: true
})
export class CharacterComponent implements OnInit {

    character?: Character;

    constructor(private _route: ActivatedRoute, private _deyraleinService: DeyraleinService) {}

    ngOnInit(): void {
        const id = this._route.snapshot.queryParamMap.get('id');
        const model = this._deyraleinService.setup.charachters.find(c => c.id === id);

        this.character = new Character(undefined, model);
    }

}
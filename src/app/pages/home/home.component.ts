import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Paths } from "../../app.routes";
import { TranslatePipe } from "../../pipes/translate.pipe";
import { DeyraleinService } from "../../services/deyralein.service";

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [TranslatePipe],
    standalone: true
})
export class HomeComponent {

    constructor (private _router: Router, private _deyraleinService: DeyraleinService) {}

    goToEncounters() {
        this._router.navigate([Paths.ENCOUNTERS]);
    }

    goToMakeCharacter() {
        this._router.navigate([Paths.MAKE_CHARACTER]);
    }

    goToSettings() {
        this._router.navigate([Paths.SETTINGS]);
    }

    getCharacters() {
        return this._deyraleinService.setup.charachters;
    }

    goToCharacter(id: string) {
        this._router.navigate([Paths.CHARACTER], { queryParams: { id } });
    }

}
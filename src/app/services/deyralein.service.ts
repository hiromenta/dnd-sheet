import { Injectable } from "@angular/core";
import { Character, DeyraleinSetup } from "../models/deyralein.model";

@Injectable({ providedIn: 'root' })
export class DeyraleinService {

    private _setup?: DeyraleinSetup;

    private _getDefaultSetup(): DeyraleinSetup {
        return {
            charachters: []
        };
    }

    get setup(): DeyraleinSetup {
        if (!this._setup) {
            const setupFromStorage = localStorage.getItem('setup') || JSON.stringify(this._getDefaultSetup());
            this._setup = JSON.parse(setupFromStorage);
        }

        return this._setup!;
    }

    saveCharacter(character: Character) {
        this.setup!.charachters.push(character);
        this.saveSetup();
    }

    saveSetup() {
        localStorage.setItem('setup', JSON.stringify(this.setup));
    }

}
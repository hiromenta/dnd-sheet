import { Component } from "@angular/core";
import { DeyraleinService } from "../../services/deyralein.service";
import { TranslatePipe } from "../../pipes/translate.pipe";
import { Encounter } from "../../models/deyralein.model";

@Component({
    selector: 'my-encounters',
    templateUrl: './encounters.component.html',
    styleUrls: ['./encounters.component.scss'],
    standalone: true,
    imports: [
        TranslatePipe
    ]
})
export class EncountersComponent {

    constructor(private _deyraleinService: DeyraleinService) {}

    getEncounters() {
        return this._deyraleinService.setup.encounters.sort((a, b) => b.initiative - a.initiative);
    }

    addEncounter() {
        const id = Math.ceil(Math.random() * 999999);

        this._deyraleinService.setup.encounters.push({
            id,
            name: 'Name',
            maxLife: 30,
            life: 30,
            maxTar: 30,
            tar: 30,
            initiative: 1
        });

        this._deyraleinService.saveSetup();
    }

    editEncounter(encounter: Encounter, prop: keyof Encounter) {
        const id = encounter.id;
        const value = prompt(prop);

        if (!value) {
            return;
        }

        if (prop === 'name') {
            this._deyraleinService.setup.encounters.find(e => e.id === id)![prop] = value as string;
        } else {
            (this._deyraleinService.setup.encounters.find(e => e.id === id)![prop] as number) = +(value || 0) as number;
        }

        this._deyraleinService.saveSetup();
    }

    getWidth(encounter: Encounter, stat: 'life' | 'tar') {
        if (stat === 'life') {
            return (encounter.life * 100) / encounter.maxLife;
        }

        if (stat === 'tar') {
            return (encounter.tar * 100) / encounter.maxTar;
        }

        return 0;
    }

    deleteEncounter(encounter: Encounter) {
        const index = this._deyraleinService.setup.encounters.findIndex(e => e.id === encounter.id);
        this._deyraleinService.setup.encounters.splice(index, 1);
        this._deyraleinService.saveSetup();
    }

    editTar(encounter: Encounter, value: number) {
        const id = encounter.id;

        let newTar = encounter.tar + value;

        if (newTar < 0) {
            newTar = 0;
        }

        if (newTar > encounter.maxTar) {
            newTar = encounter.maxTar;
        }

        this._deyraleinService.setup.encounters.find(e => e.id === id)!.tar = newTar;
        this._deyraleinService.saveSetup();
    }

}
import { Injectable } from "@angular/core";
import { DndSetup } from "../models/dnd.model";

@Injectable({ providedIn: 'root' })
export class DndService {

    setup?: DndSetup;

    getSetup() {
        if (!this.setup) {
            const setupFromStorage = localStorage.getItem('setup');
        }
    }

}
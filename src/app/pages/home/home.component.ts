import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Paths } from "../../app.routes";
import { TranslatePipe } from "../../pipes/translate.pipe";

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [TranslatePipe],
    standalone: true
})
export class HomeComponent {

    constructor (private _router: Router) {}

    goToSettings() {
        this._router.navigate([Paths.SETTINGS]);
    }

}
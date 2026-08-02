import { Component, OnInit } from "@angular/core";
import { ControlType, MyForm } from "../../models/form.model";
import { LanguageCode } from "../../models/language.model";
import { Themes } from "../../models/themes.model";
import { TranslateService } from "../../services/translate.service";
import { of, switchMap } from "rxjs";
import { ThemesService } from "../../services/themes.service";
import { LoaderService } from "../../services/loader.service";
import { FormComponent } from "../../shared/form/form.component";

@Component({
    selector: 'my-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [FormComponent]
})
export class SettingsComponent implements OnInit {

    form: MyForm = {
        controls: [
            { type: ControlType.TITLE, selector: 'settings.language.title' },
            {
                selector: 'language',
                type: ControlType.RADIO,
                required: true,
                options: [
                    { value: LanguageCode.ITALIAN, label: 'settings.language.languages.italian' },
                    { value: LanguageCode.ENGLISH, label: 'settings.language.languages.english' }
                ],
                defaultValue: localStorage.getItem('language') || LanguageCode.ENGLISH
            },
            { type: ControlType.SPACER },
            { type: ControlType.TITLE, selector: 'settings.theme.title' },
            {
                selector: 'theme',
                type: ControlType.RADIO,
                required: true,
                options: [
                    { value: Themes.LIGHT, label: 'settings.theme.themes.light' },
                    { value: Themes.DARK, label: 'settings.theme.themes.dark' }
                ],
                defaultValue: localStorage.getItem('theme') || Themes.LIGHT
            }
        ]
    }

    canChangeForm = false;

    constructor(private _loaderService: LoaderService, private _translateService: TranslateService, private _themesService: ThemesService) {}

    ngOnInit(): void {
        this._loaderService.show();

        setTimeout(() => {
            this.canChangeForm = true;
            this._loaderService.hide();
        }, 500);
    }

    formChanged(ev: MyForm) {
        if (!this.canChangeForm) {
            return;
        }

        switch (ev.lastControlChanged) {
            case 'language':
                this.changeLanguage();
                break;
            case 'theme':
                this.changeTheme();
                break;
        }
    }

    changeLanguage() {
        const language = this.form.value?.['language'];

        this._translateService.getCurrentLanguage()
            .pipe(
                switchMap((currentLanguage) => {
                    if (currentLanguage.code !== language) {
                        return this._translateService.setLanguage(language);
                    }

                    return of(null);
                })
            )
            .subscribe((data) => {
                if (data) {
                    location.reload();
                }
            });
    }

    changeTheme() {
        const theme = this.form.value?.['theme'];
        this._themesService.changeTheme(theme).subscribe();
    }

}
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store, select } from '@ngrx/store';

import { postPetsList } from './_modules/angular-seed/ngrx-store/app-ngrx-store/app-petshop-ngrx-store/actions/action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-seed';

    constructor(translate: TranslateService) {
        translate.setDefaultLang('fr-FR');
        translate.use('fr-FR');
    }
}

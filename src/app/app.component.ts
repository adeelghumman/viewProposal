import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable, skipWhile } from 'rxjs';
import { language } from './shared/store/i18n/i18n.model';
import { i18nSelectors } from './shared/store/i18n/i18n.selectors';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from './shared/local-storage/local-storage.service';
import { i18nService } from './shared/services/i18n/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @Select(i18nSelectors.currentLanguage) language$!: Observable<language>;
  constructor(
    private _translate: TranslateService,
    private _local: LocalStorageService,
    private _i18n: i18nService) { 
    this.init();
    }

    

  init() {
    this.initLanguage();
  }

  //#region LANGUAGE MANAGEMENT

  initLanguage() {
    this.languageListener();
    this.getLanguageFromLocal();
  }

  languageListener() {
    this.language$.pipe(skipWhile(val => !val)).subscribe(lang => {
      this._translate.setDefaultLang(lang.id);
    });
  }

  getLanguageFromLocal() {
    let lang: language = this._local.getLanguage();
    if (lang) {
      this._i18n.changeLanguage(lang);
    }
  }


}

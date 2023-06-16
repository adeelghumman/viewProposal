import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { i18nService } from 'src/app/shared/services/i18n/i18n.service';
import { language } from 'src/app/shared/store/i18n/i18n.model';
import { i18nSelectors } from 'src/app/shared/store/i18n/i18n.selectors';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss'],
})
export class I18nComponent implements OnInit {

  @Select(i18nSelectors.allLanguages) languages$!: Observable<language[]>;
  @Select(i18nSelectors.allLanguagesLoader) loader$!: Observable<boolean>;
  @Select(i18nSelectors.currentLanguage) currentLang$!: Observable<language>;

  constructor(
    private _service: i18nService
  ) { }

  ngOnInit() {

    this.currentLang$.subscribe(lang => console.log(lang)
    )
  }

  getAllLanguages() {
    this._service.getAllLanguages();
  }

  changeLanguage(lang: language) {
    this._service.changeLanguage(lang);
  }

}

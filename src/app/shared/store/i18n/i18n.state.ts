import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { changeLanguage, getAllLanguages } from './i18n.actions';
import { i18nAllLanguagesStateModel, i18nCurrentLanguageStateModel, language } from "./i18n.model";
import { LocalStorageService } from "../../local-storage/local-storage.service";

//#region Current Language Management

const currentLangDefaults: language = {
    id: 'en-US',
    name: 'English',
    flagCode: 'us'
};

@State<i18nCurrentLanguageStateModel>({
  name: 'i18nCurrentLanguage',
  defaults: {
    selectedLang: currentLangDefaults
  }
})
@Injectable()
export class i18nStateCurrentLanguage {

  constructor(
    private _local: LocalStorageService
  ) { }

  @Action(changeLanguage) changeLanguage(
    { setState }: StateContext<i18nCurrentLanguageStateModel>,
    { language }: changeLanguage
  ){
    setState({
        selectedLang: language
    });
    this._local.setLanguage(language);
  }

}

//#endregion Current Language Management

//#region All Languages Management

const allLanguagesDefaults: language[] = [];

@State<i18nAllLanguagesStateModel>({
  name: 'i18nAllLanguages',
  defaults: {
    languages: allLanguagesDefaults,
    loader: false
  }
})
@Injectable()
export class i18nStateAllLanguages {

  constructor() { }

  @Action(getAllLanguages) getAllLanguages(
    { setState, getState }: StateContext<i18nAllLanguagesStateModel>,
  ){

    setState({
      languages: getState().languages,
      loader: true
    });

    let _languages: language[] = [
      {
        id: 'en-US',
        name: 'English',
        flagCode: 'us'
      },
      {
        id: 'es-ES',
        name: 'Español',
        flagCode: 'es'
      }
    ];

    setState({
      languages: _languages,
      loader: false
    });
  }
}

//#endregion All Languages Management
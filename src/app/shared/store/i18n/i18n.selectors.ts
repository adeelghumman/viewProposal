import { Selector } from "@ngxs/store";
import { i18nAllLanguagesStateModel, i18nCurrentLanguageStateModel, language } from './i18n.model';
import { i18nStateAllLanguages, i18nStateCurrentLanguage } from "./i18n.state";

export class i18nSelectors {
    
    @Selector([i18nStateCurrentLanguage]) static currentLanguage(state: i18nCurrentLanguageStateModel): language {
        return state.selectedLang;
    }

    @Selector([i18nStateAllLanguages]) static allLanguages(state: i18nAllLanguagesStateModel): language[] {
        return state.languages;
    }

    @Selector([i18nStateAllLanguages]) static allLanguagesLoader(state: i18nAllLanguagesStateModel): boolean {
        return state.loader;
    }
    
}
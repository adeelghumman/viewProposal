import { language } from './i18n.model';

export class changeLanguage {
    static readonly type = '[i18n] Change current language';
    constructor(public language: language){}
}

export class getAllLanguages {
    static readonly type = '[i18n] Get all languages';
    constructor(){}
}
export interface language {
    id: string;
    name: string;
    flagCode: string;
}

export class i18nCurrentLanguageStateModel {
    public selectedLang: language = {
        id: 'en-US',
        name: 'English',
        flagCode: 'us'
    };
}

export class i18nAllLanguagesStateModel {
    public languages: language[] = [];
    public loader: boolean = false;
}
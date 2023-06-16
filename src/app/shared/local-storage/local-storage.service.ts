import { Injectable } from '@angular/core';
import { language } from '../store/i18n/i18n.model';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private localStorage: Storage;

  constructor(private _localStorageRefService: LocalStorageRefService){
      this.localStorage = _localStorageRefService.localStorage;
  }

  //#region LANGUAGE MANAGEMENT

  setLanguage(language: language){
    const lang = JSON.stringify(language);
    this.localStorage.setItem('language', lang);
  }

  getLanguage(): language{
    const lang: language = JSON.parse(this.localStorage.getItem('language')!);
    return lang;
  }

  clearLanguage() {
    this.localStorage.removeItem('language');
  }

  //#endregion LANGUAGE MANAGEMENT
  
}


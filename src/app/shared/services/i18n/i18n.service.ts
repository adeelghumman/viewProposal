import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { changeLanguage, getAllLanguages } from '../../store/i18n/i18n.actions';
import { language } from '../../store/i18n/i18n.model';

@Injectable({
  providedIn: 'root'
})
export class i18nService {

  constructor(
    private _store: Store
  ){}

  changeLanguage(lang: language){
    this._store.dispatch(new changeLanguage(lang));
  }

  getAllLanguages(){
    this._store.dispatch(new getAllLanguages());
  }
}

export class TranslateHttpLoaderService implements TranslateLoader {

  constructor(
    private _http: HttpClient,
    private _baseUrl: string = environment.i18n.baseUrl,
    private _fileExt: string = environment.i18n.fileExt
  ) { }
  
  getTranslation(lang: string): Observable<any> {
    return this._http.get(`${this._baseUrl}${lang}${this._fileExt}`);
  }
  
}

import { Inject, Injectable } from '@angular/core';
import { appServiceConfig } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(@Inject(appServiceConfig) private config: AppConfig, private http : HttpClient) { }

  login(): Observable<any> {
    return this.http.get<any>(this.config.apiEndPoint + '/amazon/login/');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { logoRoute } from 'src/app/utils/utils';
import { LogoSource } from 'src/app/interfaces/logo_source';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(private httpClient: HttpClient) {
  }

  getLogo(): Observable<LogoSource> {
    return this.httpClient.get<LogoSource>(logoRoute);
  }
}

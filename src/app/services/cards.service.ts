import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { enviroment } from '../enviroments/enviroments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private apiURL = enviroment.API_URL

  constructor(private http: HttpClient) { }

  getCard(): Observable<any> {
    return this.http.get<any>(this.apiURL)
  }
}

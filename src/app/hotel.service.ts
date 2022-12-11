import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {  ACCUEIL_RECEPTION } from "./common/hotel/accueil_reception";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HotelService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private evaluationUrl = 'api/v1/evaluation';

  constructor(private http: HttpClient,) { }

  // addAccueilReception(accueil: ACCUEIL_RECEPTION): Observable<ACCUEIL_RECEPTION> {
  //   return this.http.post<ACCUEIL_RECEPTION>(this.evaluationUrl, accueil, this.httpOptions).pipe(
  //     tap((newaccueil: ACCUEIL_RECEPTION) => this.log(`added hero w/ id=${newHotel.id}`)),
  //     catchError(this.handleError<ACCUEIL_RECEPTION>('addHotel'))
  //   );
  // }
    

}

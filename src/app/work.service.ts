import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  
  private apiUrl = "assets/fakeapi.json";
  lo: any;

  constructor(private http: HttpClient) { }

  getWorkjson(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  searchWorkOrderId(term: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?work_order_id=${term}`).pipe(
      tap(x => x.length ?
        this.lo(`found "${term}"`) :
        this.lo(`not found "${term}"`))
    );
  }
}

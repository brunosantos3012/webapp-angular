import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerConsultService {

  private readonly API_URL = 'http://localhost:3000/customer';

  constructor(
    private http: HttpClient
  ) { }

  public getCustomer(page?: number, limit?: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/?_page=${page || 0}&_limit=${limit || 10}`, );
  }

  public deleteCustomer(customerId: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${customerId}`);
  }

}

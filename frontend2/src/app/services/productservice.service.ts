import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private tourapiUrl = 'http://localhost:3000/api/tours';
  private userapiUrl = 'http://localhost:3000/api/users';


  private baseUrl = 'http://localhost:3000/api/users'; // Replace with your backend URL
  private authTokenKey = 'auth_token';
  private authTokenSubject: BehaviorSubject<string | null>;


  constructor(private http: HttpClient) { this.authTokenSubject = new BehaviorSubject<string | null>(this.getToken());
  }

  
  private getToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
    this.authTokenSubject.next(token);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { username, password }).pipe(
      tap(response => {
        const token = response.token; // Assuming your API returns a 'token' field
        this.setToken(token);
        console.log(token);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
    this.authTokenSubject.next(null);
  }

  getTours(): Observable<any[]> {
    return this.http.get<any[]>(this.tourapiUrl);
  }
  


  addTour(tourData: any): Observable<any> {
 

    return this.http.post<any>(this.tourapiUrl, tourData);
     
  }
  addUser(Data: any): Observable<any> {
 

    return this.http.post<any>(this.userapiUrl,Data);
     
  }
  getTourById(tourId: string): Observable<any> {
    const url = `${this.tourapiUrl}/${tourId}`; // Assuming your API endpoint follows this structure
    return this.http.get(url);
  }

}

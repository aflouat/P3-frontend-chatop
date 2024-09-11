import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private pathService = 'api/user';

  constructor(private httpClient: HttpClient) { }

  public getUserById(id: number): Observable<User> {
    const url = `http://localhost:3001/api/auth/me`;  // Mettez ici le bon endpoint
    console.log('Fetching user from:', url);
    return this.httpClient.get<User>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching user:', error);
        return throwError(() => new Error('Error fetching user: ' + error.message));
      })
    );
  }
}

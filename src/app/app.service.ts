import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { environment } from '../environments/environment';
import { Country } from './models/country';
import { UserDetail } from './models/user-detail';
import { UserUpdate } from './models/user-update';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    test(): Observable<string> {
        return this.http.get<string>(`${environment.baseApiURL}/Test/Test`);
    }
    
    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${environment.baseApiURL}/Countries/GetCountries`);
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.baseApiURL}/Users/GetUsers`);
    }
    
    getUserDetail(id: number): Observable<UserDetail> {
        return this.http.get<UserDetail>(`${environment.baseApiURL}/Users/UpdateUser?id=${id}`);
    }

    createUser(user: UserUpdate): Observable<User> {
        return this.http.post<UserDetail>(`${environment.baseApiURL}/Users/CreateUser`, user);
    }

    updateUser(user: UserUpdate): Observable<User> {
        return this.http.post<UserDetail>(`${environment.baseApiURL}/Users/UpdateUser`, user);
    }

}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './core/models/user';
import { environment } from '../environments/environment';
import { Country } from './core/models/country';
import { UserDetail } from './core/models/user-detail';
import { UserUpdate } from './core/models/user-update';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

    constructor(private http: HttpClient) { }

    test(): Observable<string> {
        return this.http.get<string>(`${environment.baseApiURL}/Test/Test`);
    }

    getAllCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${environment.baseApiURL}/Countries/GetCountries`);
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(`${environment.baseApiURL}/Users/GetUsers`);
    }

    getUser(id: number): Observable<UserUpdate> {
        return this.http.get<UserDetail>(`${environment.baseApiURL}/Users/UpdateUser?id=${id}`)
            .pipe(map((user: UserDetail) => new UserUpdate(user.id, user.name, user.services)));
    }

    createUser(user: UserUpdate): Observable<User> {
        return this.http.post<UserUpdate>(`${environment.baseApiURL}/Users/CreateUser`, user);
    }

    updateUser(user: UserUpdate): Observable<User> {
        return this.http.post<UserUpdate>(`${environment.baseApiURL}/Users/UpdateUser`, user);
    }

}
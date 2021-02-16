import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserUpdateDialogComponent } from './user-update-dialog/user-update-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from './core/store/reducers/countries.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './core/store/effects/countries.effects';
import { AppSandbox } from './app.sandbox';
import { usersReducer } from './core/store/reducers/users.reducer';
import { UsersEffects } from './core/store/effects/users.effects';
import { UserEffects } from './core/store/effects/user.effects';
import { CreateUserEffects } from './core/store/effects/create-user.effects';
import { UpdateUserEffects } from './core/store/effects/update-user.effects';
import { userReducer } from './core/store/reducers/user.reducer';
import { createUserReducer } from './core/store/reducers/create-user.reducer';
import { updateUserReducer } from './core/store/reducers/update-user.reducer';
import { UserUpdateDialogSandbox } from './user-update-dialog/user-update-dialog.sandbox';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    UserUpdateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      countries: countriesReducer,
      users: usersReducer,
      user: userReducer,
      createUser: createUserReducer,
      updateUser: updateUserReducer
    }),
    EffectsModule.forRoot([
      CountriesEffects,
      UsersEffects,
      UserEffects,
      CreateUserEffects,
      UpdateUserEffects
    ]),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [
    AppService,
    AppSandbox,
    UserUpdateDialogSandbox
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

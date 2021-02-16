import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from './core/models/country';
import { User } from './core/models/user';
import { AppSandbox } from './app.sandbox';
import { UserUpdateDialogComponent } from './user-update-dialog/user-update-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  countryList: Country[] = [];
  userList: User[] = [];

  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private appSandbox: AppSandbox, private dialog: MatDialog) {
    this.appSandbox.fetchAllUsers();
  }

  ngOnInit(): void {
    this.appSandbox.users$.subscribe(data => this.userList = data);
  }

  openCreateUserDialog(): void {
    this.dialog.open(UserUpdateDialogComponent, {
      data: {
        user: null,
        isCreate: true
      }
    });
  }

  openUpdateUserDialog(user: User): void {
    this.dialog.open(UserUpdateDialogComponent, {
      data: {
        user: user,
        isCreate: false
      }
    });
  }

}

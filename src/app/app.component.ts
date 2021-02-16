import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Country } from './core/models/country';
import { User } from './core/models/user';
import { AppSandbox } from './app.sandbox';
import { UserUpdateDialogComponent } from './user-update-dialog/user-update-dialog.component';
import { UserUpdate } from './core/models/user-update';

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
  }

  ngOnInit(): void {
    this.appSandbox.fetchAllUsers()
      .subscribe(data => this.userList = data);
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(UserUpdateDialogComponent, {
      data: {
        user: null,
        isCreate: true
      }
    });
    dialogRef.afterClosed().subscribe((user: UserUpdate) => {
      this.appSandbox.onCreateUser(this.userList, new User(user.id, user.name))
        .subscribe(data => this.userList = data);
    });

  }

  openUpdateUserDialog(user: User): void {
    const dialogRef = this.dialog.open(UserUpdateDialogComponent, {
      data: {
        user: user,
        isCreate: false
      }
    });
    dialogRef.afterClosed().subscribe((user: UserUpdate) => {
      this.appSandbox.onUpdateUser(this.userList, new User(user.id, user.name))
        .subscribe(data => this.userList = data);
    });
  }

}

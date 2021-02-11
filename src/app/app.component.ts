import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from './app.service';
import { Country } from './models/country';
import { User } from './models/user';
import { UserDetail } from './models/user-detail';
import { UserUpdate } from './models/user-update';
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

  constructor(private appService: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.appService.getCountries().subscribe(countries => {
      this.countryList = countries;
    });
    this.loadUsers();
  }

  openCreateUserDialog(): void {
    const dialogRef = this.dialog.open(UserUpdateDialogComponent, {
      data: {
        isCreate: true,
        countryList: this.countryList
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadUsers();
    });
  }

  openUpdateUserDialog(user: User): void {
    this.appService.getUserDetail(user.id).subscribe((userDetail: UserDetail) => {
      const userUpdate: UserUpdate = new UserUpdate(userDetail.id, userDetail.name, userDetail.services);
      const dialogRef = this.dialog.open(UserUpdateDialogComponent, {
        data: {
          userUpdate: userUpdate,
          isCreate: false,
          countryList: this.countryList
        }
      });
      dialogRef.afterClosed().subscribe(() => {
        this.loadUsers();
      });
    });
  }

  private loadUsers() {
    this.appService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from '../app.service';
import { Country } from '../models/country';
import { User } from '../models/user';
import { UserUpdate } from '../models/user-update';

export interface DialogData {
    userUpdate: UserUpdate,
    isCreate: boolean,
    countryList: Country[]
}

@Component({
    selector: 'app-user-update-dialog',
    templateUrl: 'user-update-dialog.html',
})
export class UserUpdateDialogComponent implements OnInit {

    error: string = '';
    userForm: FormGroup;

    get userUpdate(): UserUpdate {
        return (this.data && this.data.userUpdate) || { id: 0, name: null, countries: [] };
    }

    get mode(): string {
        return (this.data && this.data.isCreate) ? 'Create' : 'Update';
    }

    get countryList(): Country[] {
        return (this.data && this.data.countryList) || [];
    }

    constructor(public dialogRef: MatDialogRef<UserUpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData, private formBuilder: FormBuilder, private appService: AppService) {
        this.userForm = this.formBuilder.group({
            id: [this.userUpdate.id],
            name: [this.userUpdate.name, [Validators.required]],
            countries: [this.userUpdate.countries]
        });
    }

    ngOnInit(): void { }

    submit(): void {
        this.error = '';
        const user: UserUpdate = this.userForm.value;
        const obs = this.data.isCreate ? this.appService.createUser(user) : this.appService.updateUser(user);
        obs.subscribe((user: User) => {
            this.dialogRef.close(user);
        }, (httpError: HttpErrorResponse) => {
            this.error = httpError.error.Detail;
        });
    }

}
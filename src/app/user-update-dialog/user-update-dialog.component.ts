import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from '../core/models/country';
import { User } from '../core/models/user';
import { UserUpdate } from '../core/models/user-update';
import { UserUpdateDialogSandbox } from './user-update-dialog.sandbox';

export interface DialogData {
    user: User;
    isCreate: boolean;
}

@Component({
    selector: 'app-user-update-dialog',
    templateUrl: 'user-update-dialog.html',
})
export class UserUpdateDialogComponent implements OnInit {

    userForm!: FormGroup;
    countryList!: Country[];
    error!: any;

    get mode(): string {
        return (this.data && this.data.isCreate) ? 'Create' : 'Edit';
    }

    constructor(
        public dialogRef: MatDialogRef<UserUpdateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private formBuilder: FormBuilder,
        private userUpdateDialogSandbox: UserUpdateDialogSandbox) {
        this.initUserForm(new UserUpdate(0, '', []));
    }

    ngOnInit(): void {
        this.userUpdateDialogSandbox.fetAllCountries().subscribe(data => this.countryList = data);
        if (!this.data.isCreate) {
            this.userUpdateDialogSandbox.fetchUser(this.data.user).subscribe(user => {
                this.initUserForm(<UserUpdate>user);
            });
        }
    }

    initUserForm(user: UserUpdate) {
        this.userForm = this.formBuilder.group({
            id: [user.id],
            name: [user.name, [Validators.required]],
            countries: [user.countries]
        });
    }

    submit(): void {
        this.error = '';
        const user: UserUpdate = this.userForm.value;
        var promise = this.data.isCreate ? this.userUpdateDialogSandbox.createUser(user) : this.userUpdateDialogSandbox.updateUser(user);
        promise.subscribe(
            data => this.dialogRef.close(data),
            error => this.error = error.error.Detail
        );
    }
    
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import notify from 'devextreme/ui/notify';
import { IUser } from '../config';
import { UserComponentsConfig } from '../user-components.config';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addFormUser!: FormGroup;

  urlPattern =
    /(^[a-zñA-ZÑ]*:\/\/[a-zñA-ZÑ]*\.[a-zA-Z]*\/?[a-z0-9]*\/[a-z]*\.[a-z]{3})/;

  // Buttons
  userComponent = new UserComponentsConfig();
  arrayButtons = this.userComponent.buttons;

  constructor(
    private _builder: FormBuilder,
    private _userService: UserService
  ) 
  {}

  ngOnInit() {
    this.addFormUser = this._builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      prefix: ['', [Validators.required]],
      position: ['', [Validators.required]],
      picture: ['', [Validators.pattern(this.urlPattern)]],
      birthDate: [''],
      hireDate: [''],
      address: [''],
      notes: ['', []],
    });
  }

  btnDisabled(button: any) {
    if (button.id === 'submit' && !this.addFormUser.valid) return true;
    else return false;
  }

  clickOnButton(button: any) {
    if (button.id === 'submit') {
      this.submit();
    } else {
      this.clear();
    }
  }

  submit() {
    if (this.addFormUser.invalid) {
      return;
    } else {
      // ENVIAR DATOS A BACK
      const dataForm: IUser = this.addFormUser.value;

      this._userService.addUser(dataForm).subscribe(
        () => {
          notify(
            {
              message: 'You have submitted the form',
              position: {
                my: 'center top',
                at: 'center top',
              },
            },
            'success',
            3000
          );
        },
        (error) => {
          notify(
            {
              message: 'It has been a problem with the form',
              position: {
                my: 'center top',
                at: 'center top',
              },
            },
            'error',
            3000
          );
        }
      );
    }
  }

  clear() {
    this.addFormUser.reset();
  }
}

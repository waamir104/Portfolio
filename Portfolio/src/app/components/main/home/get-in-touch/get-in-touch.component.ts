import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { ContactRequest } from './../../../../models/contact-request.model';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetInTouchService } from 'src/app/services/get-in-touch.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {

  gitForm: FormGroup;

  constructor ( private _form: FormBuilder, private _getInTouchService: GetInTouchService ) {
    this.gitForm = _form.group({
      name: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  hasErrors(control: string, errorName: string) : boolean {
    return this.gitForm.get(control).hasError(errorName) && this.gitForm.get(control).touched;
  }

  OnSubmit() {
    if (this.gitForm.valid) {
      let content = {
        name: this.gitForm.get('name')?.value,
        subject: this.gitForm.get('subject')?.value,
        email: this.gitForm.get('email')?.value,
        message: this.gitForm.get('message')?.value
      }

      let contactRequest: ContactRequest = content;

      this._getInTouchService.registerContactRequest(contactRequest).subscribe(
        (response: HttpResponse<any>) => {
          if (response.status == HttpStatusCode.Ok) {
            Swal.fire({
              title: "You will be contacted ASAP.",
              icon: 'success',
              timer: 4000,
              timerProgressBar: true
            });
          } else {
            Swal.fire({
              title: "An error ocurred. Please retry later.",
              icon: 'error',
              timer: 4000,
              timerProgressBar: true
            });
          }
        }
      );
    } else {
      Swal.fire({
        title: "An error ocurred. Please retry later.",
        icon: 'error',
        timer: 4000,
        timerProgressBar: true
      });
    }
  }
}

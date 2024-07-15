import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent {

  gitForm: FormGroup;

  constructor ( private _form: FormBuilder ) {
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
      const emailBody = `
        Nombre: ${content.name}
        Asunto: ${content.subject}
        Email: ${content.email}
        Mensaje: ${content.message}
      `;
      // TODO send email pending
      if (true) {
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

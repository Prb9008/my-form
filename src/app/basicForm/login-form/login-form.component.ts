import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      address: ['', Validators.required],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', [Validators.required, this.pastDateValidator]]
    });
  }

  pastDateValidator(control: any) {
    const date = new Date(control.value);
    const today = new Date();
    return date <= today ? null : { futureDate: true };
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      const fileName = 'formData.txt';
      const file = new Blob([JSON.stringify(data)], { type: 'text/plain' });
      const a = document.createElement('a');
      const url = URL.createObjectURL(file);
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
      alert('Form submitted successfully!');
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: false,
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  copied = false;
  submitted = false;
  isSubmitting = false;

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;

  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      telefono: [''],
      web: [''],
    });
  }

  ngOnInit(): void {}

  copyEmail(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const email = 'inglterzariol@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 2500);
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitted = true;
        this.form.reset();
      }, 800);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  faGithub = faGithub;
  faLinkedinIn = faLinkedinIn;
  faEnvelope = faEnvelope;

  constructor(private formbuilder: FormBuilder) {
    this.form = this.formbuilder.group({
      nombre: '',
      email: '',
      mensaje: '',
      telefono: '',
      web: '',
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event) {
    event.preventDefault();
    const value = this.form.value;
    console.log(value); //TODO: save to spreadsheet in google
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-data',
    template: `
<div class="row">
  <div class="col-md-12">
    <strong>Imię i nazwisko:</strong> {{name}} {{surname}} <strong>Adres:</strong> {{address}}
  </div>
</div>
<div class="row form-inline">
  <div class="col-md-3">
    Imię: <input [value]="name" class="form-control">
  </div>
  <div class="col-3">
    Nazwisko: <input #inputSurname [value]="surname" (keyup)="surname = inputSurname.value" class="form-control">
  </div>
</div>
<div class="row">
  <div class="col-md-6">
    Adres: <input [(ngModel)]="address" class="form-control">
  </div>
</div>`
})

export class ContactDataComponent {
    name = 'Mateusz';
    surname = 'Stradałowicz';
    address = 'Handlowa 6g';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form-authentification',
  standalone: true,
  templateUrl: './form-authentification.component.html',
  styleUrl: './form-authentification.component.scss'
})
export class FormAuthentificationComponent {
  username: string = '';
  password: string = '';

  constructor() { }

  login() {
    // Logique de connexion à implémenter ici
    console.log('Identifiant:', this.username);
    console.log('Mot de passe:', this.password);
  }
}

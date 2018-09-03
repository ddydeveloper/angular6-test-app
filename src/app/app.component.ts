import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
                <mat-toolbar>
                  <button mat-icon-button routerLink="">
                    <mat-icon color="primary">home</mat-icon>
                  </button>
                  <span class="spacer"></span>
                  <span class="margin-r">Ivanov Ivan</span>
                  <button mat-flat-button>Logout</button>
                </mat-toolbar>
                <router-outlet></router-outlet>
              </div>`
})
export class AppComponent {
  title = 'angular6-medical-system';
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">
                <mat-toolbar>
                  <button mat-icon-button routerLink="">
                    <mat-icon color="primary">home</mat-icon>
                  </button>
                  <button mat-icon-button routerLink="history">
                    <mat-icon>list</mat-icon>
                  </button>
                  <span class="spacer"></span>
                  <button mat-flat-button>Logout</button>
                </mat-toolbar>
                <div class="basic-container">
                  <router-outlet></router-outlet>
                </div>
              </div>`
})
export class AppComponent {
  title = 'angular6-medical-system';
}

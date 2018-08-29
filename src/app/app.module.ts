import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from './containers/app/app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AccountComponent } from './containers/account/account.component';
import { PatientComponent } from './containers/patient/patient.component';
import { NotFoundComponent } from './containers/notfound/notFound.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { HistoryComponent } from './containers/history/history.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'account/:id', component: AccountComponent},
  { path: 'account/:id/history', component: HistoryComponent},
  { path: 'account/:id/schedule', component: ScheduleComponent},
  { path: 'patient/:id', component: PatientComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountComponent,
    PatientComponent,
    NotFoundComponent,
    HistoryComponent,
    ScheduleComponent
  ],
  imports:      [ BrowserModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(appRoutes) ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

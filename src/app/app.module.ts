import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { PatientComponent } from './containers/patient/patient.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { HistoryComponent } from './containers/history/history.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CdkTableModule } from '@angular/cdk/table';
import { PipesModule } from './pipes.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DataService } from './services/dataService';
import { HttpClientModule } from '@angular/common/http';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'account/:id/schedule', component: ScheduleComponent},
  { path: 'patient/:id', component: PatientComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientComponent,
    HistoryComponent,
    ScheduleComponent,
  ],
  imports: [
    PipesModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule.withConfig({useColumnBasisZero: false}),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    CdkTableModule,
    MaterialModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

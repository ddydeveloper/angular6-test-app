import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './containers/app/app.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AccountComponent } from './containers/account/account.component';
import { PatientComponent } from './containers/patient/patient.component';
import { NotFoundComponent } from './containers/notfound/notFound.component';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { HistoryComponent } from './containers/history/history.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { PipesModule } from './pipes.module';

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
  imports: [
    PipesModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule.withConfig({useColumnBasisZero: false}),
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

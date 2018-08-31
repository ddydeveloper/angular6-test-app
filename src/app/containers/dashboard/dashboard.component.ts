import { OnInit, Component, Injectable, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Specialization from '../../models/specialization';
import DataService from '../../services/dataService';
import User from '../../models/user';
import Patient from '../../models/patient';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const times: string[] = [
  '08:00', '09:00', '10:00',
  '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00'
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options: FormGroup;

  times: string[] = [];
  startTime: string = null;
  endTime: string = null;

  illnesses = Specialization;
  department: Specialization = null;
  date: Date = null;
  note: string = null;

  doctors: User[] = [];
  doctorId: number = null;

  patients: Patient[] = [];
  patientId: number = null;

  constructor() {
    // this.doctors = dataService.getUsers();
    // this.patients = dataService.getPatients();
    // this.times = times;
  }

  onDoctorChanged(id: number) {
    this.doctorId = id;
  }

  onChange(event: any) {

  }

  ngOnInit() { }
}

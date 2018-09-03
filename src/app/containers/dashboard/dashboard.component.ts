import { OnInit, Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/dataService';
import { Department } from '../../models/enum';
import { Doctor, Patient, Appointment } from '../../models/api';
import { Observable } from 'rxjs';

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
  departments = Department;

  doctors$: Observable<Doctor[]>;
  patients$: Observable<Patient[]>;

  constructor(public fb: FormBuilder, public dataService: DataService) {

  }

  createForm() {
    this.options = this.fb.group({
      startTime: ['08:00', Validators.required ],
      endTime:  ['09:00', Validators.required ],
      date:  [null, Validators.required ],
      note: [null],
      doctorId: [null, Validators.required],
      patientId: [null, Validators.required],
      departmentId: [Department[Department.Unknown], Validators.required]
    });
  }

  onSubmit(event: any) {
    const newAppointment: Appointment = {
      id: null,
      userId: this.options.get('doctorId').value,
      patientId: this.options.get('patientId').value,
      date: this.options.get('date').value,
      admissionTime: { startTime: this.options.get('startTime').value, endTime: this.options.get('endTime').value },
      departmentId: this.options.get('departmentId').value,
      isCancelled: false,
      note: this.options.get('note').value
    };

    this.dataService.addAppointment(newAppointment).subscribe();
    this.options.reset({});
    this.createForm();
  }

  ngOnInit() {
    this.doctors$ = this.dataService.getDoctors();
    this.patients$ = this.dataService.getPatients();
    this.times = times;

    this.createForm();
  }
}

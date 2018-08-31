import { Component, OnInit } from '@angular/core';
import { Appointment } from '../../models/api';
import { DataService } from '../../services/dataService';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  dataSource$: Observable<Appointment[]>;
  displayedColumns: string[];

  constructor(public dataService: DataService) {
    this.dataSource$ = dataService.getAppointments();
    this.displayedColumns = ['userId', 'patientId', 'date', 'admissionTime', 'departmentId'];
  }

  ngOnInit() {

  }
}

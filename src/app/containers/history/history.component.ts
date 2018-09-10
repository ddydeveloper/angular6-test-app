import { Component, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../models/api';
import { DataService } from '../../services/dataService';
import { merge, of as observableOf } from 'rxjs';
import { MatSort, MatPaginator } from '@angular/material';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  dataSource: Appointment[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'userId', 'patientId', 'date', 'admissionTime', 'departmentId', 'note'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  pageSizes: number[] = [5, 10, 25, 50];
  activeSort = 'date';
  activeDirection = 'asc';

  constructor(public dataService: DataService) {

  }

  ngOnInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          const skip: number = this.paginator.pageIndex > 1 ? (this.paginator.pageIndex - 1) * this.paginator.pageSize : 0;
          const take: number = this.paginator.pageSize ? this.paginator.pageSize : this.pageSizes[0];
          const sortBy = this.sort.active ? this.sort.active : this.activeSort;
          const direction = this.sort.direction ? this.sort.direction : this.activeDirection;

          return this.dataService.getAppointments(sortBy, direction, skip, take);
        }),
        map((data: Appointment[]) => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.length;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe((data: Appointment[]) => this.dataSource = data);
  }
}

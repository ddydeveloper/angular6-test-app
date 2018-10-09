import { Injectable } from '@angular/core';
import { Patient, Appointment, Doctor } from '../models/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://asp-net-api-ddy.azurewebsites.net';

const headers = new HttpHeaders().set('Accept', 'application/json; v=1.0').set('Content-type', 'application/json; v=1.0');
const options = { headers: headers };

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(public http: HttpClient) {

    }

    public getDoctor = (id: number): Observable<Doctor> => {
        return this.http.get<Doctor>(`${apiUrl}/doctors/${id}`, options);
    }

    public getDoctors = (): Observable<Doctor[]> => {
        return this.http.get<Doctor[]>(`${apiUrl}/doctors`, options);
    }

    public getPatient = (id: number): Observable<Patient> => {
        return this.http.get<Patient>(`${apiUrl}/patients/${id}`, options);
    }

    public getPatients = (): Observable<Patient[]> => {
        return this.http.get<Patient[]>(`${apiUrl}/patients`, options);
    }

    public getAppointments = (sortBy: string, order: string, skip: number, take: number, date: Date = null): Observable<Appointment[]> => {
        if (!date) {
            date = new Date(Date.now());
        }

        const url = `${apiUrl}/appointments/${date.toDateString()}`;
        const queryParams = `sortBy=${sortBy}&order=${order}&skip=${skip}&take=${take}`;

        return this.http.get<Appointment[]>(`${url}?${queryParams}`, options);
    }

    public addAppointment = (appointment: Appointment): Observable<Appointment> => {
        appointment.id = 0;
        const body = JSON.stringify(appointment);

        return this.http.post<Appointment>(`${apiUrl}/appointments`, body, options);
    }
}

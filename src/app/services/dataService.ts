import { Injectable } from '@angular/core';
import { Patient, Appointment, Doctor } from '../models/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:44383/api';

const headers = new HttpHeaders()
    .set('Content-Type', 'application/json;v=1.0')
    .set('Accept', 'application/json;v=1.0');

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(public http: HttpClient) {

    }

    public getDoctor = (id: number): Observable<Doctor> => {
        return this.http.get<Doctor>(`${apiUrl}/doctors/${id}`);
    }

    public getDoctors = (): Observable<Doctor[]> => {
        return this.http.get<Doctor[]>(`${apiUrl}/doctors`);
    }

    public getPatient = (id: number): Observable<Patient> => {
        return this.http.get<Patient>(`${apiUrl}/patients/${id}`);
    }

    public getPatients = (): Observable<Patient[]> => {
        return this.http.get<Patient[]>(`${apiUrl}/patients`);
    }

    public getAppointments = (date: Date = null): Observable<Appointment[]> => {
        return this.http.get<Appointment[]>(`${apiUrl}/appointments/${date}`);
    }

    public addAppointment = (appointment: Appointment): Observable<Appointment> => {
        appointment.departmentId = 1;
        const body = JSON.stringify(appointment);
        const options = { headers: headers };

        return this.http.post<Appointment>(`${apiUrl}/appointments`, body, options);
    }
}

import User from '../models/user';
import Appointment from '../models/appointment';
import Patient from '../models/patient';
import * as moment from 'moment';
import Title from '../models/title';
import UserTitle from '../models/userTitle';
import Specialization from '../models/specialization';
import UserSpecialization from '../models/userSpecialization';
import { Injectable } from '@angular/core';

const today = new Date(Date.now());
const tomor = new Date('08 29 2018');

const users: User[] = [
    {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        description: '-',
        birthDate: new Date('01 01 1981'),
        employementDate: new Date('10 06 2014'),
        workingStartDate: new Date('11 09 2003'),
        isRetired: false
    },
    {
        id: 2,
        firstName: 'Igor',
        lastName: 'Surkov',
        description: '-',
        birthDate: new Date('11 09 1974'),
        employementDate: new Date('04 01 2010'),
        workingStartDate: new Date('12 12 1998'),
        isRetired: false
    },
];

const userTitles: UserTitle[] = [
    { id: 1, userId: 1, title: Title.Bachelor, startDate: new Date('01 01 2003') },
    { id: 2, userId: 1, title: Title.Intern, startDate: new Date('01 01 2004') },
    { id: 3, userId: 1, title: Title.Ordinator, startDate: new Date('01 01 2006') },
    { id: 4, userId: 2, title: Title.Bachelor, startDate: new Date('01 01 1998') },
    { id: 5, userId: 2, title: Title.Intern, startDate: new Date('01 01 1999') },
    { id: 6, userId: 2, title: Title.Ordinator, startDate: new Date('01 01 2001') },
    { id: 7, userId: 2, title: Title.Candidate, startDate: new Date('01 01 2008') },
];

const userSpecializations: UserSpecialization[] = [
    { id: 1, userId: 1, specialization: Specialization.Dermatology, startDate: new Date('01 01 2010') },
    { id: 2, userId: 1, specialization: Specialization.Oncology, startDate: new Date('01 01 2010') },
    { id: 3, userId: 2, specialization: Specialization.Surgery, startDate: new Date('01 01 2010') },
    { id: 4, userId: 2, specialization: Specialization.Therapy, startDate: new Date('01 01 2010') },
];

const patients: Patient[] = [
    { id: 1, firstName: 'Ivan', lastName: 'Terentev', description: '-', birthDate: new Date('08 12 1984') },
    { id: 2, firstName: 'Darya', lastName: 'Kolyvanova', description: '-', birthDate: new Date('07 23 2001') },
    { id: 3, firstName: 'Kirill', lastName: 'Andreev', description: '-', birthDate: new Date('02 14 1982') },
    { id: 4, firstName: 'Jon', lastName: 'Goodman', description: '-', birthDate: new Date('04 18 1995') },
];

const appointments: Appointment[] = [
    {
        id: 1,
        userId: 1,
        patientId: 1,
        date: today,
        admissionTime: { startTime: '10:00', endTime: '10:30' },
        specialization: Specialization.Dermatology,
        isCancelled: false,
        note: ''
    },
    { id: 2,
        userId: 1,
        patientId: 2,
        date: today,
        admissionTime: { startTime: '11:00', endTime: '12:00' },
        specialization: Specialization.Dermatology,
        isCancelled: false,
        note: ''
    },
    {
        id: 3,
        userId: 1,
        patientId: 3,
        date: today,
        admissionTime: { startTime: '12:00', endTime: '12:30' },
        specialization: Specialization.Dermatology,
        isCancelled: true,
        note: ''
    },
    {
        id: 4,
        userId: 1,
        patientId: 4,
        date: today,
        admissionTime: { startTime: '14:00', endTime: '14:30' },
        specialization: Specialization.Oncology,
        isCancelled: false,
        note: ''
    },
    { id: 5, userId: 2, patientId: 1, date: today, admissionTime: { startTime: '09:00', endTime: '10:00' },
    specialization: Specialization.Surgery,     isCancelled: false,
    note: '' },
    { id: 6, userId: 2, patientId: 2, date: today,
        admissionTime: { startTime: '10:00', endTime: '10:30' },
        specialization: Specialization.Surgery,     isCancelled: false,
    note: '' },
    { id: 7, userId: 2, patientId: 3, date: tomor,
        admissionTime: { startTime: '12:00', endTime: '13:00' },
        specialization: Specialization.Surgery,     isCancelled: false,
    note: '' },
    { id: 8,
        userId: 2, patientId: 4, date: today,
        admissionTime: { startTime: '15:00', endTime: '16:00' }, specialization: Specialization.Therapy,     isCancelled: false,
    note: '' }
];

@Injectable({providedIn: 'root'})
export default class DataService {
    public getUser = (id: number): User => {
        const user: User = users.find((u: User) => u.id === id);
        return user ? user : users[0];
    }

    public getUsers = (): User[] => {
        return users;
    }

    public getPatient = (id: number): Patient => {
        const patient: Patient = patients.find((p: Patient) => p.id === id);
        return patient ? patient : patients[0];
    }

    public getPatients = (): Patient[] => {
        return patients;
    }

    public getUserCurrentTitle = (id: number): Title => {
        const titles: Title[] = userTitles
            .filter((ut: UserTitle) => ut.userId === id)
            .sort((fut: UserTitle, sut: UserTitle) => {
                if (fut.startDate > sut.startDate) {
                    return 1;
                }

                if (fut.startDate < sut.startDate) {
                    return -1;
                }

                return 0;
            })
            .map((ut: UserTitle) => ut.title);

        return titles[titles.length - 1];
    }

    public getUserSpecializations = (id: number): Specialization[] => {
        return userSpecializations
            .filter((us: UserSpecialization) => us.userId === id)
            .map((us: UserSpecialization) => us.specialization);
    }

    public getAppointments = (userId: number, date: Date): Appointment[] => {
        const begin: Date = moment(date).startOf('day').toDate();
        const end: Date = moment(date).endOf('day').toDate();

        return appointments.filter((a: Appointment) => a.id === userId && a.date > begin && a.date < end);
    }

    public addAppointment = (value: Appointment): void => {
        appointments.push(value);
    }
}

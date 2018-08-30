import AdmissionTime from './admissionTime';
import Specialization from './specialization';

export default class Appointment {
    public id: number;
    public userId: number;
    public patientId: number;
    public date: Date;
    public admissionTime: AdmissionTime;
    public specialization: Specialization;
    public isCancelled: boolean;
    public note: string;
}

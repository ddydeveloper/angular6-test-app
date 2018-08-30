import AdmissionTime from './admissionTime';

export default class UserSchedule {
    public id: number;
    public userSpecializationId: number;
    public monday: AdmissionTime;
    public tuesday: AdmissionTime;
    public wednesday: AdmissionTime;
    public thursday: AdmissionTime;
    public friday: AdmissionTime;
}

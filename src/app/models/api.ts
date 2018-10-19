class AdmissionTime {
    public startTime: string;
    public endTime: string;

    // public hasIntersections = (at: AdmissionTime): boolean => {
    //     return this.endTime >= at.startTime || at.endTime >= this.startTime;
    // }
}

class Anamnesis {
    public id: number;
    public userId: number;
    public description: string;
    public createDate: Date;
}

class Appointment {
    public id: number;
    public userId: number;
    public patientId: number;
    public date: Date;
    public admissionTime: AdmissionTime;
    public departmentId: number;
    public isCancelled: boolean;
    public note: string;
}

class Patient {
    public id: number;
    public firstName: string;
    public lastName: string;
    public description: string;
    public birthDate: Date;
}

class Role {
    public id: number;
    public name: string;
    public description: string;
}

class Doctor {
    public id: number;
    public firstName: string;
    public lastName: string;
    public description: string;
    public birthDate: Date;
    public employementDate: Date;
    public workingStartDate: Date;
    public isRetired: boolean;
}

class DoctorRole {
    public id: number;
    public userId: number;
    public roleId: number;
    public createDate: Date;
}

class DoctorSchedule {
    public id: number;
    public userSpecializationId: number;
    public monday: AdmissionTime;
    public tuesday: AdmissionTime;
    public wednesday: AdmissionTime;
    public thursday: AdmissionTime;
    public friday: AdmissionTime;
}

class DoctorSpecialization {
    public id: number;
    public userId: number;
    public departmentId: number;
    public startDate: Date;
}

class DoctorTitle {
    public id: number;
    public userId: number;
    public titleId: number;
    public startDate: Date;
}

export {
    AdmissionTime,
    Anamnesis,
    Appointment,
    Patient,
    Role,
    Doctor,
    DoctorRole,
    DoctorSchedule,
    DoctorSpecialization,
    DoctorTitle
};

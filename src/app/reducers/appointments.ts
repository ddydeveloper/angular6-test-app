import * as appointment from '../actions/appointment';
import { Appointment } from '../models/api';

export interface State {
    loaded: boolean;
    loading: boolean;
    appointments: Appointment[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    appointments: []
};

export function reducer(state = initialState, action: appointment.Actions): State {
    switch (action.type) {
        case appointment.ADD_SUCCESS:
        case appointment.REMOVE_FAIL: {
            const app: Appointment = action.payload;
            const existing = state.appointments.find((a: Appointment) => app.id === a.id );

            if (existing) {
                return state;
            }

            return Object.assign({}, state, { appointments: [...state.appointments, appointment] });
        }

        case appointment.REMOVE_SUCCESS:
        case appointment.ADD_FAIL: {
            const app: Appointment = action.payload;
            const existing = state.appointments.filter((a: Appointment) => a.id !== app.id);

            if (existing && state.appointments.length === existing.length) {
                return state;
            }

            return Object.assign({}, state, { appointments: existing });
        }

        case appointment.LOAD: {
            return Object.assign({}, state, { loading: true });
        }

        case appointment.LOAD_SUCCESS: {
            return {
                loading: false,
                loaded: true,
                appointments: action.payload
            };
        }
    }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getAppointments = (state: State) => state.appointments;

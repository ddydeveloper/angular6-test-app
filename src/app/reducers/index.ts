import * as fromAppointments from './appointments';
import { ActionReducer, combineReducers, compose, createSelector } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';

export interface State {
    appointments: fromAppointments.State;
}

const reducers = {
    appointments: fromAppointments.reducer
};

export function reducer(state: any, action: any) {
    return combineReducers(reducers);
}

export const getAppointmentsState = (state: State) => state.appointments;

export const getAppointments = createSelector(getAppointmentsState, fromAppointments.getAppointments);
export const getAppointmentsLoaded = createSelector(getAppointmentsState, fromAppointments.getLoaded);
export const getAppointmentsLoading = createSelector(getAppointmentsState, fromAppointments.getLoading);

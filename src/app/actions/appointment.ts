import { Action } from '@ngrx/store';
import { Appointment } from '../models/api';

export const ADD            = '[Appointment] Add';
export const ADD_SUCCESS    = '[Appointment] Add Success';
export const ADD_FAIL       = '[Appointment] Add Fail';

export const REMOVE         = '[Appointment] Remove';
export const REMOVE_SUCCESS = '[Appointment] RemoveSuccess';
export const REMOVE_FAIL    = '[Appointment] Remove Fail';

export const LOAD           = '[Appointment] Load';
export const LOAD_SUCCESS   = '[Appointment] Load Success';
export const LOAD_FAIL      = '[Appointment] Load Fail';

export class AddAction implements Action {
    readonly type = ADD;

    constructor(public payload: Appointment) {

    }
}

export class AddSuccessAction implements Action {
    readonly type = ADD_SUCCESS;

    constructor(public payload: Appointment) {

    }
}

export class AddFailAction implements Action {
    readonly type = ADD_FAIL;

    constructor(public payload: Appointment) {

    }
}

export class RemoveAction implements Action {
    readonly type = REMOVE;

    constructor(public payload: Appointment) {

    }
}

export class RemoveSuccessAction implements Action {
    readonly type = REMOVE_SUCCESS;

    constructor(public payload: Appointment) {

    }
}

export class RemoveFailAction implements Action {
    readonly type = REMOVE_FAIL;

    constructor(public payload: Appointment) {

    }
}

export class LoadAction implements Action {
    readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Appointment[]) {

    }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;
}

export type Actions =
    AddAction | AddSuccessAction | AddFailAction |
    RemoveAction | RemoveSuccessAction | RemoveFailAction |
    LoadAction | LoadSuccessAction | LoadFailAction;

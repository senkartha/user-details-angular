import { Action } from '@ngrx/store';
import { IUserDetails } from '../../Models/Interfaces/user-details.interface';

export enum UserDetailsActionTypes {
    SetUserDetails = '[USER DETAILS] SET USER DETAILS',
    SetUserDetailsSuccess = '[USER DETAILS] SET USER DETAILS SUCCESS',
    SetUserDetailsFailure = '[USER DETAILS] SET USER DETAILS FAILURE',
}

export class SetUserDetails implements Action {
    readonly type = UserDetailsActionTypes.SetUserDetails;
    constructor(public payload: IUserDetails) { }
}

export class SetUserDetailsSuccess implements Action {
    readonly type = UserDetailsActionTypes.SetUserDetailsSuccess;
    constructor(public payload: IUserDetails) { }
}

export class SetUserDetailsFailure implements Action {
    readonly type = UserDetailsActionTypes.SetUserDetailsFailure;
    constructor(public payload: any) { }
}


export type UserDetailsActions = SetUserDetails
    | SetUserDetailsSuccess
    | SetUserDetailsFailure;
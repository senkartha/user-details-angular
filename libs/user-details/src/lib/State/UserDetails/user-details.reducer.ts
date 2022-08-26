import { IUserDetails } from "../../Models/Interfaces/user-details.interface";
import { UserDetailsActions, UserDetailsActionTypes } from "./user-details.actions";

export const UserDetailsFeatureKey = 'UserDetails';

export interface IUserDetailsState {
    data?: IUserDetails,
    loading: Boolean,
    loaded: Boolean,
    isError: Boolean,
    error?: any
}

const initialState: IUserDetailsState = {
    data: undefined,
    loaded: false,
    loading: false,
    isError: false,
    error: undefined
};

export function UserDetailsReducer(state = initialState, action: UserDetailsActions) {
    switch (action.type) {
        case UserDetailsActionTypes.SetUserDetails:
            return {
                ...state,
                loading: true,
                loaded: false,
                isError: false,
                error: undefined
            };
        case UserDetailsActionTypes.SetUserDetailsSuccess:
            return {
                ...state,
                data: action.payload,
                loading: false,
                loaded: true,
                isError: false,
                error: undefined
            };
        case UserDetailsActionTypes.SetUserDetailsFailure:
            return {
                ...state,
                loading: false,
                loaded: true,
                isError: true,
                error: action.payload
            };
        default:
            return state;
    }
}
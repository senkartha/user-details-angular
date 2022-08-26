import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserDetailsState, UserDetailsFeatureKey } from "./user-details.reducer";

export const getUserDetailsState = createFeatureSelector<IUserDetailsState>(UserDetailsFeatureKey);

export const getUserDetails = createSelector(
    getUserDetailsState,
    (udState) => {
        if (!udState) {
            return null;
        }
        return udState.data;
    }
);

export const isUserDetailsLoaded = createSelector(
    getUserDetailsState,
    (udState) => {
        if (!udState) {
            return null;
        }
        return udState.loaded;
    }
);

export const isUserDetailsError = createSelector(
    getUserDetailsState,
    (udState) => {
        if (!udState) {
            return null;
        }
        return udState.error;
    }
);
// ngrx
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BehaviorSubject, catchError, combineLatest, map, switchMap } from 'rxjs';
import { IUserDetails } from '../../Models/Interfaces/user-details.interface';
import { UserDetailsService } from '../../Services/user-details/user-details.service';
import { SetUserDetails, SetUserDetailsFailure, SetUserDetailsSuccess, UserDetailsActionTypes } from './user-details.actions';

@Injectable()
export class UserDetailsEffects {
    constructor(
        private actions$: Actions,
        private userDetailsService: UserDetailsService
    ) { }

    setUserDetails$ = createEffect(() => this.actions$.pipe(
        ofType(UserDetailsActionTypes.SetUserDetails),
        map((action: SetUserDetails) => action.payload),
        switchMap((userDetails: IUserDetails) => {
            return combineLatest([
                this.userDetailsService.setUserDetails(userDetails),
                new BehaviorSubject(userDetails).asObservable()
            ]);
        }),
        switchMap(([response, userdetails]) => {
            if (response) {
                return [new SetUserDetailsSuccess(userdetails)]
            }
            return [new SetUserDetailsFailure('Error: setUserDetails$ : Api Call failed')];
        }),
        catchError((err) => {
            return [
                new SetUserDetailsFailure(err)
            ];
        })
    ));
}

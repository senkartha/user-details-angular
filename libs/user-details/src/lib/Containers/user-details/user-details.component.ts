import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserDetails } from '../../Models/Interfaces/user-details.interface';
import { isUserDetailsError, isUserDetailsLoaded, IUserDetailsState, SetUserDetails } from '../../State';

@Component({
  selector: 'user-details-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private store: Store<IUserDetailsState>) { }

  public userDetails = <IUserDetails>{ firstName: undefined, lastName: undefined };
  public isUserDetailsLoaded$ = this.store.select(isUserDetailsLoaded);
  public isUserDetailsError$ = this.store.select(isUserDetailsError);

  // Alias
  json = JSON;

  ngOnInit(): void { }

  clearForm() {
    this.userDetails.firstName = undefined;
    this.userDetails.lastName = undefined;
  }

  submitUserDetails() {
    this.store.dispatch(new SetUserDetails(JSON.parse(JSON.stringify(this.userDetails))))
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserDetails } from '../../Models/Interfaces/user-details.interface';
import { userDetailsConf } from '../../Models/Constants/data-providers.const';
import { IUserDetailsConfiguration } from '../../Models/Interfaces/user-details-configurations.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  private userDetailsConf: IUserDetailsConfiguration;

  constructor(private http: HttpClient, @Inject(userDetailsConf) _userDetailsConf: IUserDetailsConfiguration,) { 
    this.userDetailsConf = _userDetailsConf;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Type': 'application/json'
    })
  };

  setUserDetails(user: IUserDetails) {
    const userEndPoint = this.userDetailsConf.baseUrl + this.userDetailsConf.userEndPoint;
    return this.http.post<boolean>(userEndPoint, user, this.httpOptions);
  }
}

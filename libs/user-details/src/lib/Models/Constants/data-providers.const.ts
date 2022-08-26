import { InjectionToken } from "@angular/core";
import { IUserDetailsConfiguration } from "../Interfaces/user-details-configurations.interface";

//Injection Parameter equivalent to the configuration passed to the User Details Module.
export const userDetailsConf = new InjectionToken<IUserDetailsConfiguration>('User Details Configuration');
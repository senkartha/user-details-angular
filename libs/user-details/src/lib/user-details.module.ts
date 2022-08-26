import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsRoutingModule } from './user-details.routing.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailsEffects, UserDetailsFeatureKey, UserDetailsReducer } from './State';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsService } from './Services';
import { UserDetailsComponent } from './Containers';
import { IUserDetailsConfiguration } from './Models/Interfaces/user-details-configurations.interface';
import { userDetailsConf } from './Models/Constants/data-providers.const';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    UserDetailsRoutingModule,
    StoreModule.forFeature(UserDetailsFeatureKey, UserDetailsReducer),
    EffectsModule.forFeature([UserDetailsEffects])
  ],
  providers: [UserDetailsService],
  declarations: [UserDetailsComponent],
})
export class UserDetailsModule {
  static forRoot(envconf: IUserDetailsConfiguration): ModuleWithProviders<UserDetailsModule> {
    return {
      ngModule: UserDetailsModule, providers:
        [
          { provide: userDetailsConf, useValue: envconf }
        ]
    };
  }
}

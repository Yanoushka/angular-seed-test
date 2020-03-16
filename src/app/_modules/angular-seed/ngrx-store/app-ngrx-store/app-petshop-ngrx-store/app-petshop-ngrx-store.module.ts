import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { petsReducer } from './reducers/reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('petsList', petsReducer)
  ]
})
export class AppPetshopNgrxStoreModule { }

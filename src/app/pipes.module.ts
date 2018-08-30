import { NgModule } from '@angular/core';
import { EnumKeysPipe } from './pipes/enumKeys';
import { PhoneNumberPipe } from './pipes/phoneNumber';


@NgModule({
  imports: [],
  declarations: [ EnumKeysPipe, PhoneNumberPipe ],
  exports: [ EnumKeysPipe, PhoneNumberPipe ]
})
export class PipesModule {

}

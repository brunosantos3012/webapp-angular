import { AbstractControl } from "@angular/forms";
import * as moment from "moment";

export function birthDayValidator(control: AbstractControl) {
  const minAge: number = 18;
  const maxAge: number = 60;

  const age = moment().diff(moment(control.value).format('DD/MM/yyyy'), 'years');

  return age >= minAge && age < maxAge ? null : { data: true };

}

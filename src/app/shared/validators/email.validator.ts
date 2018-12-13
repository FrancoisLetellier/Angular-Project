import { FormControl } from '@angular/forms';

export function emailValidator(input : FormControl){
    return /@/.test(input.value) ? null : { email: true}
}
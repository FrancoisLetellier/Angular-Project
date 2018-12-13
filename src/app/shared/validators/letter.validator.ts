import { FormControl } from '@angular/forms'
/*
export function letterValidator(input: FormControl){
   
    return /a/.test(input.value) ? { letter: true } : null
}
*/
export function letterValidator(letter: string){
   return function (input: FormControl) : { letter : string } | null {
    const regexp = new RegExp(letter)   
    return regexp.test(input.value) ? { letter: letter } : null // letter : letter permet de rendre dynamique l'erreur
}
}
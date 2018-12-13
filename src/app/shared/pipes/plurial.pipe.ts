import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name : 'plurial'
})

export class PlurialPipe implements PipeTransform {
transform(word: string, nb: number): string{
    return word + (nb > 1 ? 's' : '')
}

}
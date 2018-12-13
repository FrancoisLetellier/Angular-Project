import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'autoComplete'
})

export class AutocompletePipe implements PipeTransform{
    transform(names: Array<string>, firstname: string): Array<string>{
        return names.filter(name => name.startsWith(firstname))
    }
}
import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name : 'extFilter',
    pure : false
})

export class ExtensionPipe implements PipeTransform{
    transform(users: Array<any>, extension: string): Array<any>{
        if(extension == 'all'){
            return users
        }
        return users.filter(user => user.email.endsWith(extension))
        

    }
}
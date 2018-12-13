import { Pipe, PipeTransform } from '@angular/core'

const WORDS = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}


@Pipe({
    name : 'lang'
})

export class LangPipe implements PipeTransform{
    transform(langId: string, lang: string): string{
        return WORDS[langId][lang]
        

    }
}
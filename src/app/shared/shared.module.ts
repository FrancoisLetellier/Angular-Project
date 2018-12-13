import { NgModule } from '@angular/core';
import { PlurialPipe } from './pipes/plurial.pipe';
import { AutocompletePipe } from './pipes/autocomplete.pipe';
import { LangPipe } from './pipes/lang.pipe'
import { ConfirmDirective } from './directives/confirm.directive';


const declarations = [PlurialPipe, AutocompletePipe, LangPipe, ConfirmDirective]

@NgModule({
    declarations,
    exports: declarations
})

export class SharedModule{

}
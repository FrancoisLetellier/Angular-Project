import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive( {
 selector: '[appConfirm]'
})

export class ConfirmDirective{

    @Input('appConfirm') message: string
    @Input() appConfirmUsername: string 
    @Output() onConfirm: EventEmitter<void> = new EventEmitter

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message + ' ' + this.appConfirmUsername)
        if(bool){
            this.onConfirm.emit()
        }
    }
}


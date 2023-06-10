import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmationPanel]'
})
export class ConfirmationPanelDirective {

  @Input('confirm')
  execFunction!: Function;

  @HostListener('click',['$event'])
  onClick(){
    const confirmed= window.confirm('Seguro de querer pechar?');
    if(confirmed) return this.execFunction();
  }

}

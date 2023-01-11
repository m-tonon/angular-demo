import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen (event: Event) {
    this.isOpen = this.elemRef.nativeElement.contains(event.target) ? !this.isOpen: false
  }

  constructor(private elemRef: ElementRef) {}
}

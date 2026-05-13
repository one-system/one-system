import { Directive, OnInit, OnDestroy, Input, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, EnvironmentInjector } from "@angular/core";
import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";

// #region README

// <router-outlet> does not yet support a [name] attribute, therefore we have implemented this. Usage:
// <router-outlet-named [name]="name1">

// #endregion

@Directive({
    selector: 'router-outlet-named',
    exportAs: 'outlet'
})
export class RouterOutletNamedDirective implements OnInit, OnDestroy {
    // #region Properties

    public outlet?: RouterOutlet;
    @Input() public name: string = '';

    // #endregion

    // #region Properties

    constructor(
        private parentContexts: ChildrenOutletContexts,
        private location: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private changeDetector: ChangeDetectorRef,
        private environmentInjector: EnvironmentInjector
    ) { }

    // #endregion

    // #region Angular Methods

    ngOnInit() {
        this.outlet = new RouterOutlet(this.parentContexts, this.location, this.name, this.changeDetector, this.environmentInjector);
        this.outlet.ngOnInit();
    }

    ngOnDestroy() {
        if (this.outlet) {
            this.outlet.ngOnDestroy();
        }
    }

    // #endregion
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFavoriteComponent } from './sidebar-favorite.component';

describe('SidebarFavoriteComponent', () => {
    let component: SidebarFavoriteComponent;
    let fixture: ComponentFixture<SidebarFavoriteComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SidebarFavoriteComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SidebarFavoriteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

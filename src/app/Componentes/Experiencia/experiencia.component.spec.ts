import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExperienciaComponent } from "./experiencia.component";

describe('EducacionComponent', () => {
    let component: ExperienciaComponent;
    let fixture: ComponentFixture<ExperienciaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ExperienciaComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExperienciaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('debe crear', () => {
        expect(component).toBeTruthy();
    });
});
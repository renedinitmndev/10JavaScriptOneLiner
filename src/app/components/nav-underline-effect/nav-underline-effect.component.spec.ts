import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavUnderlineEffectComponent } from './nav-underline-effect.component';

describe('NavUnderlineEffectComponent', () => {
  let component: NavUnderlineEffectComponent;
  let fixture: ComponentFixture<NavUnderlineEffectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUnderlineEffectComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavUnderlineEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserTabAktivComponent } from './browser-tab-aktiv.component';

describe('BrowserTabAktivComponent', () => {
  let component: BrowserTabAktivComponent;
  let fixture: ComponentFixture<BrowserTabAktivComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserTabAktivComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserTabAktivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

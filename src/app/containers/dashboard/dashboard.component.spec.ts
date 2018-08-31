import { TestBed, async } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../material.module';
import { EnumKeysPipe } from '../../pipes/enumKeys';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, EnumKeysPipe ],
      imports: [ RouterTestingModule.withRoutes([]), BrowserAnimationsModule, MaterialModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

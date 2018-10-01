import { TestBed, async } from '@angular/core/testing';
import { HistoryComponent } from './history.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AccountComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryComponent ],
      imports: [ RouterTestingModule.withRoutes([]), BrowserAnimationsModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';
import { app } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [app],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(app);
    const App = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(app);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, crud-angular-material');
  });
});

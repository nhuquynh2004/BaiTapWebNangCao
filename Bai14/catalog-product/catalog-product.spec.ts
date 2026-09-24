import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogProductComponent } from './catalog-product';

describe('CatalogProductComponent', () => {
  let component: CatalogProductComponent;
  let fixture: ComponentFixture<CatalogProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogProductComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

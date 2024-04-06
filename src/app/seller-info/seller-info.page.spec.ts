import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerInfoPage } from './seller-info.page';

describe('SellerInfoPage', () => {
  let component: SellerInfoPage;
  let fixture: ComponentFixture<SellerInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SellerInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

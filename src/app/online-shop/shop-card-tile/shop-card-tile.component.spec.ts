import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardTileComponent } from './shop-card-tile.component';

describe('ShopCardTileComponent', () => {
  let component: ShopCardTileComponent;
  let fixture: ComponentFixture<ShopCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { CatalogService } from '../catalog-service';

@Component({
  selector: 'app-catalog-product',
  standalone: false,
  templateUrl: './catalog-product.html',
})
export class CatalogProductComponent {
  selectedProduct: any = null;
  
  public categories: any

  constructor(private _service: CatalogService) {
    this.categories = this._service.getCategories()
  }
}


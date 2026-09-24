import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-service-product-image-event',
  standalone:true,
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css'],
  imports:[CommonModule,RouterModule]
  })
export class ServiceProductImageEventComponent {
  public products:any
  constructor(pservice: ProductService,private router:Router){
  this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
  this.router.navigate(['service-product-image-event',f.ProductId])
  }
}
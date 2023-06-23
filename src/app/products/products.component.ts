import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products = [
    {id:1, name: 'Analog watch', price: '109', color:'black', available:'Available', image:'/assets/products/Watch.jpg'},
    {id:2, name: 'i Phone 12', price: '1009', color:'White', available:'Not Available', image:'/assets/products/Iphone12.jpg'},
    {id:3, name: 'Dell laptop', price: '1020', color:'Black', available:'Available', image:'/assets/products/DellLaptop.jpg'}
  ];

}

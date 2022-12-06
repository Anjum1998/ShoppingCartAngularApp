import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  image=""
  productCode=""
  productName=""
  manufacturingDate=""
  expiryDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""
 
  constructor(private api:ApiService){}
  

  readValue=()=>
  {
    let data:any =
    {"image":this.image ,"productCode":this.productCode,"productName":this.productName,"manufacturingDate":this.manufacturingDate,
    "expiryDate":this.expiryDate,"brand":this.brand,
    "price":this.price,
    "sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }
 
  
}

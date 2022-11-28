import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  image=""
  title=""
  description=""
  price=""
  sellername=""
  quantity=""

  readValue=()=>
  {
    let data:any =
    {"title":this.title,
    "price":this.price,"description":this.description,
    "image":this.image,"sellername":this.sellername,"quantity":this.quantity}
    console.log(data)
  }
 
  
}

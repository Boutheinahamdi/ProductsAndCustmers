import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {ProductsModel} from "../models/products.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products !: Array<ProductsModel> ;
  searchGroup !: FormGroup;
  curentpage:number=0;
  totalpages:number=0;
  size:number=4;
constructor(private producstservice : ProductsService, private fb:FormBuilder) {

}
  ngOnInit(): void {
    this.searchGroup=this.fb.group({
      keyword: this.fb.control(null)
    });
this.getPageProducts();
  }
getAllProducts(){
  this.producstservice.getProducts().subscribe({
    next :(data)=>{
      this.products=data;
    }
  })
}
  getPageProducts(){
    this.producstservice.getPages(this.curentpage,this.size).subscribe({
      next :(data)=>{
        this.products=data.products;
        this.totalpages=data.totalpages;
        //console.log(this.totalpages);
      }
    })
  }
  handledelete(product: ProductsModel) {
  let conf=confirm("you sure?");

  if(! conf) return;
    this.producstservice.deleteProducts(product.id).subscribe({
      next :(data)=>{
        this.getPageProducts();
    }
    })

  }

  setPromotion(product: ProductsModel) {
    this.producstservice.setPromo(product).subscribe({
      next : (data)=>{
        this.getPageProducts();

      }
    })
  }

  searchproduct()  {
this.producstservice.searchprod(this.searchGroup.value.keyword).subscribe({
  next :(data)=>{
    this.products=data;
  }
})

  }

  gotopage(i: number) {
  this.curentpage=i;
  this.getPageProducts();

  }
}

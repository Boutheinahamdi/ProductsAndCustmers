import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Page, ProductsModel} from "../models/products.model";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _products: Array<ProductsModel> ;
  constructor() {
    this._products=[{id:1,nom:"pc",price:1500, promotion:true},{id:2,nom:"phone",price:150, promotion:false}];
for( let i=3;i<21;++i){
this._products.push({id:i,nom:"phone"+i,price:150+i, promotion:false})
    }
  }

  public  getProducts(): Observable<ProductsModel[]>{
    return of(this._products);
  }
  public  getPages(page:number,size:number): Observable<Page>{
    let index= page*size;
    let totalpages= ~~(this._products.length /size);
    let long=this._products.length;

    console.log(totalpages);
    console.log(long);
    if(this._products.length% size !=0) {totalpages++;}
     let products =this._products.slice(index,index+size);

    return of({pages: page, size:size,totalpages:totalpages,products:products});
  }
  public deleteProducts(id:number):Observable<boolean> {
    this._products=this._products.filter(p=>p.id!=id);
    return of(true);

}
public setPromo(p1:ProductsModel):Observable<boolean>{

    let product= this._products.find(p=> p.id==p1.id);
    if(product){
      p1.promotion=!p1.promotion;
    }
 return  of(true);

}
searchprod(keyword:string):Observable<ProductsModel[]>{
  let product= this._products.filter(p=>p.nom.includes(keyword));
  return of(product);
}
}

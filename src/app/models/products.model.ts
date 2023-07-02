
export interface ProductsModel{
  id : number;
  nom : string;
  price : number;
  promotion : boolean;
}
export interface Page{
  products : ProductsModel[];
  size: number;
  pages: number;
  totalpages:number;
}


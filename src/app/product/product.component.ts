import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  constructor() { }

  ngOnInit() {

    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是一个商品，是我在学习angular时创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.69,1.5,"这是二个商品，是我在学习angular时创建的",["图书"]),
      new Product(3,"第三个商品",3.59,3.5,"这是三个商品，是我在学习angular时创建的",["硬件设备"]),
      new Product(4,"第四个商品",4.49,2.5,"这是四个商品，是我在学习angular时创建的",["电子产品"]),
      new Product(5,"第五个商品",5.39,4.5,"这是五个商品，是我在学习angular时创建的",["硬件设备"]),
      new Product(6,"第六个商品",6.29,3.5,"这是六个商品，是我在学习angular时创建的",["图书"])
    ]

  }

}

export class Product {
  constructor(
    public  id:number,
    public  title:string,
    public  price:number,
    public  rating:number,
    public  desc:string,
    public  categories:Array<string>
  ){

  }
}

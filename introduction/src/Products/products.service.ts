import { Injectable ,NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class ProductsService{
private Products: Product[] =[];

constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

async insertProduct(title: string, description: string, price: number){
    const newProduct = new this.productModel({
        title,
        description:description,
        price,
    });
  const result = await newProduct.save();
  console.log(result);
    return 'prodId';
}
getProducts(){
    return [...this.Products];
}

getSingleProduct(productId: string){
    const product = this.Products.find(prod => prod.id === productId);
    if(!product){
        throw new NotFoundException('Could Find the Product');
    }
    return { ...product };
}
} 
import { Injectable ,NotFoundException } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
private Products: Product[] =[];

insertProduct(title: string, description: string, price: number){
    const prodId = Math.random().toString();
    const newProduct = new Product(new Date().toString(),title,description,price)
    this.Products.push(newProduct);
    return prodId;
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
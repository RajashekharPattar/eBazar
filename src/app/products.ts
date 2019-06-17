export class product {
    name: string;
    imagePath: string;
    rating: number;
    price : number;
   
    constructor(name: string, imagePath: string, rating: number,price:number) {
        this.name = name;
        this.imagePath = imagePath;
        this.rating = rating;     
        this.price = price;
    }
    
}
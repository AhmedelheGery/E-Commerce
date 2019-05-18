// (1) - CREATING RECIPE CLASS
export class Product {
    public name: string;
    public description: string;
    public price : string;
    public imgPath: string;

    constructor(name: string , description: string , price: string , imgPath: string){
        this.name        = name ;
        this.description = description ;
        this.price       = price ;
        this.imgPath     = imgPath ;
    }
}
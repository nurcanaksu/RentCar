import { CarImage } from "./carImage";

export interface Car { //carDetail
    //carname i int yapıp tabloyu değiştireblirsin view designdan
    carName:string;
    brandID:number;
    brandName:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    colorID:number;
    carImage: CarImage[];
}

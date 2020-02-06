import { ValueConverter } from '@angular/compiler/src/render3/view/template';

export interface Product {
    id : number,
    name : string,
    description: string,
    reviews: number,
    rating: number,
    imgUrl: string,
    price: string
}

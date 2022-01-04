export interface Product {
    id?:number,
    name: string;
    category: string;
    description: string;
    NomConsommateur: string;
    imageUrl: string;
    quantity: Number;
    date: Date;
    etat?: Boolean;
}

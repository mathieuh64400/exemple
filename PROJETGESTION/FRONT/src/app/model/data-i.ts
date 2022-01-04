export interface DataI {
    Nom:string;
    Description:string;
    Date:string;
    Category:string;
}

export class Data implements DataI {
    Nom:string="";
    Description:string="";
    Date:string="";
    Category:string="";
}
import { Country, Currency } from "shared/const/common";


export interface ProfileType {
    first:string,
    lastname:string,
    age:number;
    currency:Currency;
    country:Country;
    city:string;
    username:string;
    avatar:string

}

export interface ProfileShema {
    data?:ProfileType;
    isLoading:boolean;
    error?:string,
    readonly:boolean

}
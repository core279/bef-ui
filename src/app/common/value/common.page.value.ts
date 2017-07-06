import {Sort} from "./common.sort.value";
export class Page{
    first           : boolean;
    last            : boolean = false;
    number          : number; //==page
    numberOfElements: number;
    size            : number;
    sort            : Sort;
    totalElements   : number;
    totalPages      : number;
}

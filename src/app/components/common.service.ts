import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})


export class CommonService {
    constructor(){}
    isAdmin:boolean=false;
    usersData:any;
    addToCartItems:Array<any>=[];

    storeItems(items:any)
    {
this.addToCartItems.push(items);
    }

    sendUsersData()
    {
        return this.usersData;
    }
}

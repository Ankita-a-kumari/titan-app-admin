import { Component, OnInit } from "@angular/core";
import { CommonService } from '../common.service';



@Component({
    selector:'add-ToCart',
    templateUrl:'./addtoCart.component.html'
})


export class AddToCartComponent implements OnInit{

    constructor(private commonService:CommonService){}
     getItems=JSON.parse(localStorage.getItem('cartItems')||'[]');

    ngOnInit()
    {
        if(this.commonService.addToCartItems.length==0)
        {
           
            this.getItems=JSON.parse(localStorage.getItem('cartItems')||'[]')
        }  
        else 
        {
            this.commonService.addToCartItems.forEach((item,index)=>
        {
            let postion=this.getItems.map((e:any)=> e.id).indexOf(item.id)
            if(postion==-1) this.getItems.push(item)
           
        } );

        this.commonService.addToCartItems.map((item)=>{
return item
        })
            
        }

        localStorage.setItem('cartItems',JSON.stringify(this.getItems))
    }

    removeItems(index:number)
    {
        this.getItems.splice(index,1);
        this.commonService.addToCartItems=this.getItems;
        localStorage.setItem('cartItems',JSON.stringify(this.getItems))

    }

}
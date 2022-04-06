import { NgModule } from "@angular/core";
import { AddToCartComponent } from './addToCart.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
    
    imports:[
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path:'',component:AddToCartComponent},
           
        ])
    ],
    declarations:
    [
        AddToCartComponent
    ],
    exports:[RouterModule]

})

export class AddToCartModule {}
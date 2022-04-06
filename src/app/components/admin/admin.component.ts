import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";


@Component({
selector:'app-admin',
templateUrl:'./admin.component.html'
})

export class AdminComponent implements OnInit
{
    constructor(private commonService:CommonService){}
    data:any;
    ngOnInit(): void {
        this.data=this.commonService.sendUsersData()
    }

}
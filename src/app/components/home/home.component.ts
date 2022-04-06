import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '../../../../node_modules/@angular/router';
import {NgbModal, NgbModalRef, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('myModal1') modal!:ElementRef<any>;
  modalRef!:NgbModalRef;
  modalOptions:NgbModalOptions;

  constructor(private commonService:CommonService, private router:Router,private modalService:NgbModal) {
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {}

  data: any;

  user = [
    {
      id:1,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90116NM01_1.jpg?pView=listing',
      title: 'Connected X - Jet Black Hybrid Smart Watch',
      price: '₹11995.00',
      sale: '₹7995.00',
    },
    {
      id:2,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90137AP01_1.jpg?pView=listing',
      title: 'Titan Smart Touch Screen Watch With Aluminium Case',
      price: '₹11995.00',
      sale: '₹8995.00',
    },
    {
      id:3,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90149AP01_1.jpg?pView=listing',
      title: ' Titan Smart Pro Touch Screen Smart Watch With Black Strap Aluminum Case',
      price: '₹14995.00',
      sale: '₹11995.00',
    },
    {
      id:4,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90116QM01_1.jpg?pView=listing',
      title: 'Connected X - Khaki Green Hybrid Smart Watch',
      price: '₹11995.00',
      sale: '₹7995.00',
    },
    {
      id:5,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90149AP02_1.jpg?pView=listing',
      title: 'Titan Smart Pro Touch Screen Smart Watch With Pink Strap Aluminum Case',
      price: '₹14995.00',
      sale: '₹11995.00',
    },
    {
      id:6,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90116QM02_1.jpg?pView=listing',
      title: 'Connected X - Copper Brown Hybrid Smart Watch',
      price: '₹11995.00',
      sale: '₹7995.00',
    },
    {
      id:7,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/90137AP03_1.jpg?pView=listing',
      title: 'Titan Smart Touch Screen Watch With Aluminium Case',
      price: '₹11995.00',
      sale: '₹8995.00',
    },
    {
      id:8,
      img: 'https://staticimg.titan.co.in/Titan/Catalog/1870KM01_1.jpg?pView=listing',
      title: 'Workwear Silver Dial Silver Stainless Steel Strap Watch',
      price: '₹6895.00',
      sale: '₹5515.00',
    },
  ];

  addToCartItems(items:any)
  {
    let login=localStorage.getItem('token')
    if(login)
    {
      this.commonService.storeItems(items);
    }
else {
this.modalRef=this.modalService.open(this.modal,this.modalOptions)

}
  }

naviatetoLogin()
{
  this.router.navigate(['./login']);
  this.modalRef.dismiss('navigated tologin')

}
}

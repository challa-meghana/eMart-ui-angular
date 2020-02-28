import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { EmartService } from 'src/app/emart.service';
import { Router } from '@angular/router';
import { Bill } from '../../Bill';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {
cartItems: Item[];
bill:Bill[];
buyerName: string = 'sneha';
buyerId: string= '901';
todayDate: string= '18/02/2020';
amount: number=0;


  constructor(protected emartService: EmartService,protected router:Router) { }

  ngOnInit(): void {
      this.cartItems = this.emartService.getAllCart();
      let size = this.cartItems.length;
      for(let i=0;i<size;i++){
        this.amount = this.amount + this.cartItems[i].price;
       // console.log(this.bill[i].item.length)
      }
  }
  
  addBill(){
    this.emartService.addBill(this.buyerId, this.todayDate, this.amount);
    this.router.navigate(['item-list']);
  }
}
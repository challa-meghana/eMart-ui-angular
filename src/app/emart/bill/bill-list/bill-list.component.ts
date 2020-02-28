import { Component, OnInit } from '@angular/core';




import { Bill } from '../../bill';
import { EmartService } from 'src/app/emart.service';
import { Item } from '../../Item';



@Component({

  selector: 'app-bill-list',

  templateUrl: './bill-list.component.html',

  styleUrls: ['./bill-list.component.css']

})

export class BillListComponent implements OnInit {
  bills: Bill[];
  
  cartItems: Item[];
  buyerName: string = 'akshara';
  buyerId: string = '101';
  buyerDate: string = '20/11/2019';
  buyerContact: string = 'akshara@gmail.com';
  amount: number = 0;
  showBill: boolean;
  

    constructor(protected emartService: EmartService) { }



  ngOnInit(): void {

    this.bills = this.emartService.getAllBills();
    //console.log(this.bills[0].item.length);
    if(this.bills.length==0){
      this.showBill=false;
    }
    else{
      this.showBill=true;
    }

}
}
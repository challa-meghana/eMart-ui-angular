import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../Item';
import { EmartService } from 'src/app/emart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  allItems: Item[];
  constructor(protected router:Router,protected emartService: EmartService) {}


  ngOnInit(): void {
    this.allItems = this.emartService.getAllItems();
  }
  displayItemDetails(itemId: number){
  this.router.navigate(['/item-display/'+itemId]);
}
addToCart(itemId: number){
  this.emartService.addToCart(itemId);
  this.router.navigate(['item-list']);
}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmartService } from 'src/app/emart.service';
import { Item } from '../../Item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit {
item: Item;
  
  constructor(protected activatedRoute: ActivatedRoute,protected emartService: EmartService,protected router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
                                              (param)=>{
                                                          let id = param.get('iId');
                                                          this.item = this.emartService.getItem(id);
                                                      });
  }
  addToCart(itemId: number){
    this.emartService.addToCart(itemId);
    this.router.navigate(['item-list']);
  }

}

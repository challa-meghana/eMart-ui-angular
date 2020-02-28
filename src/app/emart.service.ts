import { Injectable } from '@angular/core';
import { Category } from './emart/Category';
import { SubCategory } from './emart/Subcategory';
import { Item } from './emart/Item';
import { Bill } from './emart/Bill';
import { BuyerSignupComponent } from './emart/user/buyer-signup/buyer-signup.component';
import { Buyer } from './emart/Buyer';
import { SellerSignupComponent } from './emart/user/seller-signup/seller-signup.component';
import { Seller } from './emart/Seller';






@Injectable({
  providedIn: 'root'
})
export class EmartService {


  categories: Category[];
  subCategories: SubCategory[];
  allItems: Item[];
  cartItems: Item[];
  allBills : Bill[];
  allBuyers: Buyer[];
  allSellers: Seller[];

  constructor() {
    this.allBills=[];
    this.categories = [{
                              id: 501,
                              name: 'Electronics',
                              brief: 'Varieties of electronics like TV,Washing Machine'
                            },
                            {
                              id: 502,
                              name: 'Mobiles',
                              brief: 'Varieties of SmartPhones'
                            },
                            {
                              id: 503,
                              name: 'Clothes',
                              brief: 'Varieties of clothes'
                            },
                            {
                              id: 504,
                              name: 'footwear',
                              brief: 'Varieties of footwear'
                            }];
    this.subCategories = [{
                                id: 101,
                                name: 'LED',
                                categoryId: 501,
                                brief: 'Led 50 inches',
                                gstPercent: 5

                          },
                          {
                                id: 102,
                                name: 'Headphones',
                                categoryId: 501,
                                brief: 'Sony',
                                gstPercent: 5

                          },
                          {
                                id: 103,
                                name: 'iphonexs',
                                categoryId: 502,
                                brief: 'iphone',
                                gstPercent: 5

                          },
                          {
                                id: 104,
                                name: 'Samsumg M30s',
                                categoryId: 502,
                                brief: 'samsung',
                                gstPercent: 5
        
                         },
                         {
                                id: 105,
                                name: 'Kurti',
                                categoryId: 503,
                                brief: 'tops',
                                gstPercent: 5
      
                        },
                        {
                                id: 106,
                                name: 'jeans',
                                categoryId: 503,
                                brief: 'Denim',
                                gstPercent: 5
      
                       },
                       {
                                id: 107,
                                name: 'sarees',
                                categoryId: 503,
                                brief: 'georget saree',
                                gstPercent: 5

                        },
                        {
                                  id: 108,
                                  name: 'Washingmachine',
                                  categoryId: 501,
                                  brief: 'frontend washingmachine',
                                  gstPercent: 5

                        },
                        {
                                  id: 109,
                                  name: 'Oppo',
                                  categoryId: 502,
                                  brief: 'oppoA5',
                                  gstPercent: 5

                        },
                        {
                                  id: 110,
                                  name: 'shoe',
                                  categoryId: 504,
                                  brief: 'Earton traning shoe',
                                  gstPercent: 5

                        },
                        {
                                  id: 111,
                                  name: 'High heels',
                                  categoryId: 504,
                                  brief: 'High Heels for girls',
                                  gstPercent: 5

                        },
                        {
                                  id: 112,
                                  name: 'slippers',
                                  categoryId: 504,
                                  brief: 'slippers for girls',
                                  gstPercent: 5

                        }
                      ];
    this.allItems=[{
                        id: 201,
                        name: 'LED',
                        categoryId: 501,
                        subCategoryId: 101 ,
                        price: 50000,
                        description: 'Xiaomi Mi Smart TV',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://u01.appmifile.com/images/2018/04/07/e6d01675-0453-42c7-ac3a-e7a30843133f.png' 
                  },
                  {
                        id: 202,
                        name: 'Headphones ',
                        categoryId: 501,
                        subCategoryId: 102 ,
                        price: 5000,
                        description: 'Mauno wieless head phones',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://images-na.ssl-images-amazon.com/images/I/51rRwx6wJgL._SL1000_.jpg' 
                },
                {
                        id: 203,
                        name: 'iphonexs',
                        categoryId: 502,
                        subCategoryId: 103 ,
                        price: 89900,
                        description: 'Apple iphone xs silver',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzkJq0YupQFe9QgntmORJWtaGxmQ3hW-0p2c7sJkLA7qox30WO' 
                },
                {
                        id: 204,
                        name: 'Samsung M30s',
                        categoryId: 502,
                        subCategoryId: 104 ,
                        price: 14999,
                        description: 'samgsung galaxy M30s',
                        stock: 5,
                        remarks: 'good product',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXHbARa9ipJgTOY06ufUysennHusNKWPCeY9hqHrsnfJQUKCXe' 
                },
                {
                        id: 205,
                        name: 'Kurti',
                        categoryId: 503,
                        subCategoryId: 105 ,
                        price: 5000,
                        description: 'Rock western wear kurti',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrpeFHJrTcIjIR0FWPTIQPargWRvksxw6Y3qm-aIFDYjUafDy1' 
                },
                {
                        id: 206,
                        name: 'jeans',
                        categoryId: 503,
                        subCategoryId: 106 ,
                        price: 50000,
                        description: 'waist design streachable',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvZO8AtlhhiHXTf-Yvm-yuZWzFHMbYn4vZC12S4mrerY15Ym_g' 
              },
              {
                        id: 207,
                        name: 'Sarees',
                        categoryId: 503,
                        subCategoryId: 107 ,
                        price: 3000,
                        description: 'Georget saree with unstiched belt',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSJhf4oLMhjctXbOfHR72yD2KDndknRQQty1yf_MONwnyFnN9x' 
              },
              {
                        id: 208,
                        name: 'Washingmachine',
                        categoryId: 501,
                        subCategoryId: 108 ,
                        price: 26000,
                        description: '25kg Commercial Washing Machine',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://5.imimg.com/data5/CW/VP/MY-37028020/25-kg-industrial-washing-machine-500x500.jpg' 
              },
              {
                        id: 209,
                        name: 'Oppo',
                        categoryId: 502,
                        subCategoryId: 109 ,
                        price: 12000,
                        description: 'oppo A5 (3GB RAM)',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxXNLlwLLb1oXDPU5ReB_oSzA6_8BwvImh810R0iKWCDQNNjln' 
              },
              {
                        id: 210,
                        name: 'shoe',
                        categoryId: 504,
                        subCategoryId: 110,
                        price: 2500,
                        description: 'Earton Traning shoes',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoNUBIcZEnHe9LQeyo-z2rhj5WG8iECG6AS_WARRtnZZduuNxJ' 
              },
              {
                        id: 211,
                        name: 'High heels',
                        categoryId: 504,
                        subCategoryId: 111,
                        price: 2500,
                        description: 'Earton Traning shoes',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD0JcMnooxezHYNquG9D0AX51U_-fu9o_FNard_u6lSK6Gu_QR' 
              },
              {
                        id: 212,
                        name: 'slippers',
                        categoryId: 504,
                        subCategoryId: 112,
                        price: 2500,
                        description: 'slippers ladies soft plush',
                        stock: 5,
                        remarks: 'good quality',
                        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgDEQeNYn-W1zZwHZzbpmAxMff2RFKpBXpODAZ6uHCq6qtDDqK' 
              }
            ];
    this.cartItems = [];
    this.allBuyers = [{
                          id:101,
                          username:'Aksh',
                          password:'aksh',
                          email:'aksh@gmailcom',
                          mobile:7729880770,
                          date:'19/02/2020'
                        },
                        {
                          id:102,
                          username:'sweety',
                          password:'sweety',
                          email:'sweety@gmailcom',
                          mobile:6303799615,
                          date:'19/02/2022'
                        }
                      ];
                    this.allSellers = [{
                          id:201,
                          username:'Ashu',
                          password:'ashu',
                          company:'abc',
                          gst:6,
                          brief:"description",
                          address:'Chennai',
                          email:'ashu@gmail.com',
                          website:'alibaba.com',
                          contact:9876543210,
                          date: '12/06/1998'
                        },
                        {
                          id:202,
                          username:'Sana',
                          password:'sana',
                          company:'xyz',
                         
                          brief:"description",
                          address:'Chennai',
                          email:'sana@gmail.com',
                          website:'shaik.com',
                          contact:8974561320,
                           gst: 7,
                           date: '17/11/1996'
                        }
                      ];
  }
  getAllItems():Item[]{
    return [].concat(this.allItems);
  }
  getCategories():Category[]{
    return [].concat(this.categories);
  }
  getSubCategories():SubCategory[]{
    return [].concat(this.subCategories);
  }
  getItem(itemId: string):Item{
    let item: Item;
    let size = this.allItems.length;
    for(let i=0;i<size;i++){
        if(this.allItems[i].id == +itemId){
          //item = this.allItems[i];
         item = { 
                  id: this.allItems[i].id,
                  name: this.allItems[i].name,
                  categoryId: this.allItems[i].categoryId,
                  subCategoryId: this.allItems[i].subCategoryId,
                  price:this.allItems[i].price,
                  description: this.allItems[i].description,
                  stock: this.allItems[i].stock,
                  remarks: this.allItems[i].remarks,
                  img: this.allItems[i].img 
         };
          break;       
       
      }
    }
  return item;
}

addToCart(itemId: number){
  let item:Item = this.getItem(itemId+'')
  this.cartItems.push(item);
}
getAllCart(){
    return [].concat(this.cartItems);
}
getAllBills(){
  return [].concat(this.allBills);
}
deleteCartItem(itemId: number){
  let size = this.cartItems.length;
  for(let i=0;i<size;i++){
    if(this.cartItems[i].id == itemId){
      this.cartItems.splice(i,1);
    }
  }
}
addBill(buyerId: string, todayDate: string, amt: number){
  let billSize = this.allBills.length;
  let bill:Bill = {
                      id: ++billSize,
                      buyerId: +buyerId,
                      type: 'Debit',
                      date: todayDate,
                      remarks: '',
                      item: this.cartItems,
                      amount: amt
                  };
                  this.allBills.push(bill);
                  this.cartItems=[];
}
validateBuyer(user: string, password: string){
  let buyer: Buyer;
  let size = this.allBuyers.length;
  for(let i=0;i<size;i++){
    if(this.allBuyers[i].username == user && this.allBuyers[i].password == password){
      buyer = {
        id: this.allBuyers[i].id,
        username: this.allBuyers[i].username,
        password: this.allBuyers[i].password,
        email: this.allBuyers[i].email,
        mobile: this.allBuyers[i].mobile,
        date: this.allBuyers[i].date
      };
      break;
    }
  }
  return buyer;
}
validateSeller(user: string, password: string){
  let seller: Seller;
  let size = this.allSellers.length;
  for(let i=0;i<size;i++){
    if(this.allSellers[i].username == user && this.allSellers[i].password == password){
      seller = {
        id: this.allSellers[i].id,
        username: this.allSellers[i].username,
        password: this.allSellers[i].password,
        email: this.allSellers[i].email,
        date: this.allSellers[i].date,
        company:this.allSellers[i].company,
        gst:this.allSellers[i].gst,
        brief:this.allSellers[i].brief,
        address:this.allSellers[i].address,
        website:this.allSellers[i].website,
        contact:this.allSellers[i].contact

      };
      break;
    }
  }
  return seller;
}
}
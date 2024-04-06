import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seller-info',
  templateUrl: './seller-info.page.html',
  styleUrls: ['./seller-info.page.scss'],
})
export class SellerInfoPage implements OnInit {
  description: any;
  sellerImage: any;
  title: any;
  subtitle: any;
  price: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log(res);
      this.description = res.description;
      this.sellerImage = res.image;
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.price = res.price;
    });
  }
  navigateBack() {
    this.location.back();
  }
}

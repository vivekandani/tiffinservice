import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items = [
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle1',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle2',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle3',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
    {
      image:
        'https://t4.ftcdn.net/jpg/01/10/72/71/360_F_110727174_TdSrQM2Oa0POZr073oYIMa0e9UemT2sm.jpg ',
      title: 'imgTitle',
      subtitle: 'imgSubtitle',
      price: 20,
      description: 'this is good',
    },
  ];
  constructor() {}

  ngOnInit() {
    console.log('abc');
  }
  selectSeller(item: any, i: any) {
    // console.log(item, i);
  }
}

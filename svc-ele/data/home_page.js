module.exports = () => {
  return {
    searchRecommends: [
      {
        value: 0,
        label: 'Beef Brisket',
      },
      {
        value: 1,
        label: 'Salad',
      },
      {
        value: 2,
        label: 'Milk Tea',
      },
      {
        value: 3,
        label: 'Watermelon Juice',
      },
    ],
    banner: [
      {
        imgUrl: '/imgs/index_page/transformer-banner.png',
      },
    ],
    transformer: [
      {
        label: 'Food',
        imgUrl: '/imgs/index_page/transformer-icon1.png',
      },
      {
        label: 'Convenience',
        imgUrl: '/imgs/index_page/transformer-icon2.png',
      },
      {
        label: 'Online',
        imgUrl: '/imgs/index_page/transformer-icon3.png',
      },
      {
        label: 'Health',
        imgUrl: '/imgs/index_page/transformer-icon4.png',
      },
      {
        label: 'Entertainment',
        imgUrl: '/imgs/index_page/transformer-icon5.png',
      },
      {
        label: 'Afternoon Tea',
        imgUrl: '/imgs/index_page/transformer-icon6.png',
      },
      {
        label: 'Fruits',
        imgUrl: '/imgs/index_page/transformer-icon7.png',
      },
      {
        label: 'Flowers',
        imgUrl: '/imgs/index_page/transformer-icon8.png',
      },
      {
        label: 'Grocery',
        imgUrl: '/imgs/index_page/transformer-icon9.png',
      },
      {
        label: 'Drinks',
        imgUrl: '/imgs/index_page/transformer-icon10.png',
      },
      {
        label: 'Snacks',
        imgUrl: '/imgs/index_page/transformer-icon11.png',
      },
      {
        label: 'Medicine',
        imgUrl: '/imgs/index_page/transformer-icon12.png',
      },
      {
        label: 'Fruits',
        imgUrl: '/imgs/index_page/transformer-icon13.png',
      },
      {
        label: 'Coupons',
        imgUrl: '/imgs/index_page/transformer-icon14.png',
      },
      {
        label: 'Pet Food',
        imgUrl: '/imgs/index_page/transformer-icon15.png',
      },
    ],
    scrollBarInfoList: [
      {
        type: 'coupon',
        badge: 'Coupon',
        detail: `<span class="info-num">1</span>more order to claim<span class="info-num">4</span>coupons`,
        btn: 'Check',
      },
      {
        type: 'cashback',
        badge: 'Cashback',
        detail: `<span class="info-num">40</span>dollars cashback to claim`,
        btn: 'Check',
      },
    ],
    countdown: {
      time: 24 * 60 * 60 * 1000,
      goods: {
        imgUrl: '/imgs/index_page/count-down-p.png',
        name: 'Tender Chicken Burger + Fried Chips + Iced Coke',
        price: 19.8,
        oldPrice: 28.9,
      },
    },
    activities: [
      '/imgs/index_page/activity/01.png',
      '/imgs/index_page/activity/02.png',
      '/imgs/index_page/activity/03.png',
    ],
  }
}

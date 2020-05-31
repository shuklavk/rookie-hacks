import React from 'react';
import BusinessCard from './BusinessCard';

export default () => {
  const city = 'Palm Beach';
  const card1 = {
    name: ' Rocco’s Tacos & Tequila Bar',
    address: '5090 PGA Boulevard Palm Beach Gardens, FL 33418',
    hours: '11:30 AM - 10 PM',
    phone: '(561) 623-0127',
    website: 'www.roccostacos.com',
    img:
      'https://d37219swed47g7.cloudfront.net/media/reviews/aria-wine-bar/banners/Aria-Wine-Bar_0.jpeg',
    message:
      'Open for indoor seating at 25 percent capacity, and for outdoor seating at a 6-foot distance. A limited menu with Rocco’s staple dishes will be available to order. Curbside pick-up and delivery orders will be available.'
  };
  const card2 = {
    name: 'Grease Burger Bar',
    address: '213 Clematis Street, West Palm Beach',
    hours: '12 PM - 9 PM',
    phone: '(561) 651-1075',
    website: 'https://www.greasewpb.com/',
    img:
      'https://1620winery.com/wp-content/uploads/2019/04/wineerybar-1024x768.jpg',
    message: 'Curbside and delivery only.'
  };
  const card3 = {
    name: 'Barcello',
    address: '11603 US Highway 1 North Palm Beach, FL 33408',
    hours: '4 PM to 9 PM',
    phone: '561-660-8222',
    website: 'https://barcellonpb.com/',
    img:
      'https://cdn.vox-cdn.com/thumbor/pAuJ3w2g919Z0-W2egiWoc3LLG0=/0x0:3741x2450/1400x1400/filters:focal(1572x926:2170x1524):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/53681167/ABV_3___Credit_City_Winery.0.jpg',
    message:
      'Will operate at 25 percent capacity, and patrons who sit outside will be seated six feet apart.'
  };
  return (
    <div
      style={{ backgroundImage: 'linear-gradient(to right,  #8eedb6, yellow)' }}
    >
      <header
        style={{
          textAlign: 'center',
          margin: '0px 0px 70px 0px',
          backgroundColor: '#ffb84d'
        }}
      >
        <h1 style={{ color: 'white', fontSize: '64px' }}>REOPENER</h1>
      </header>
      <div
        className="container"
        style={{
          textAlign: 'center'
        }}
      >
        <h1
          style={{
            margin: '0px 50px 50px 0px'
          }}
        >
          Support Local Businesses in{' '}
          <span style={{ color: 'orange' }}>{city}</span>
        </h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <BusinessCard card={card1} />
          <BusinessCard card={card2} />
          <BusinessCard card={card3} />
        </div>
      </div>
    </div>
  );
};

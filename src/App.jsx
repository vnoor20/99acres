import React from 'react';
import PropertyList from './file';
import card from './card.module.css';

const properties = [
  {
    id: 1, name: 'Luxury Condo with Ocean View',
    pictureUrl: 'https://i.pinimg.com/originals/31/41/f8/3141f803a9d69556a3704ee0aa066c96.jpg',
    price: 1200000,
    details: '3 Bedroom Condo in Miami Beach, Florida'


  },
  {
    id: 2,
    name: 'Mountain Retreat Cabin',
    pictureUrl: 'https://res.cloudinary.com/evolve-vacation-rental-network/image/upload/f_auto,c_limit,w_3840,q_auto/listings_s3/listings/409825/images/main/a0Ff200000Lu6swEAB',
    price: 850000,
    details: '4 Bedroom Cabin in Aspen, Colorado'
  },
  {
    id: 3,
    name: 'City Loft in Downtown',
    pictureUrl: 'https://i.pinimg.com/originals/f2/69/f3/f269f35104f5a2d41cc62c5fb518ab83.jpg',
    price: 600000,
    details: '2 Bedroom Loft in Downtown Los Angeles, California'

  },
  {
    id: 4,
    name: 'Lakefront Property with Dock',
    pictureUrl: 'https://i.pinimg.com/originals/53/dd/ef/53ddefd1366a18d8c3e585a3cfcc65a5.jpg',
    price: 950000,
    details: '5 Bedroom House with Lake Access in Lake Tahoe, Nevada'
  },
  {
    id: 5,
    name: 'Historic Brownstone',
    pictureUrl: 'https://static01.nyt.com/images/2012/07/26/garden/26LOCATION_SPAN/26LOCATION5-superJumbo.jpg?quality=90&auto=webp',
    price: 1100000,
    details: '6 Bedroom Brownstone in Brooklyn, New York'
  },
  {
    id: 6,
    name: 'Contemporary Penthouse',
    pictureUrl: 'https://www.christiesrealestate.com/blog/wp-content/uploads/2021/02/modern-luxury-penthouses-one-jackson-square-new-york2.jpg',
    price: 1800000,
    details: '3 Bedroom Penthouse in San Francisco, California'
  },
  {
    id: 7,
    name: 'Ranch Style Home',
    pictureUrl: 'https://nextluxury.com/wp-content/uploads/estate-ranch-home-ranch-style-house-1.jpg',
    price: 750000,
    details: '4 Bedroom Ranch in Austin, Texas'
  },
  
 
];

const App = () => {
  return (
    <div className={card.container}>
      <h1 className={card.title}>99 ACRES </h1>
      <PropertyList properties={properties} />
    </div>
  );
};

export default App;